// const router = require('express').Router();
// const { Product, Category, Tag, ProductTag } = require('../../models');
import { Router } from "express";
const router = Router();
import { Product, Category, Tag, ProductTag } from "../../models/index.js";

// The `/api/products` endpoint

// get all products
router.get("/", async (req, res) => {
  // find all products
  try {
    const prods = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(prods);
  } catch (err) {
    res
      .status(500)
      .json({ message: "unable to get products at this time. " + err });
  }
  // be sure to include its associated Category and Tag data
});

// get one product
router.get("/:id", async (req, res) => {
  if (!req.params.id) res.status(400).json({ message: "an id is required" });
  try {
    const prod = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!prod)
      res
        .status(404)
        .json({ message: `no product found with id [${req.params.id}` });
    res.status(200).json(prod);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        ProductTag.findAll({
          where: { product_id: req.params.id },
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  // delete one product by its `id` value
  if (!req.params.id) res.status(400).json({ message: "no id provided" });
  try {
    let prod = await Product.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!prod)
      res.status(404).json({ message: `product [${req.params.id}] not found` });
    res.status(200).json(prod);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export { router as productRoutes };

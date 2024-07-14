// const router = require('express').Router();
// const { Category, Product } = require('../../models');
import { Router } from 'express';
const router = Router();
import { Category, Product } from '../../models/index.js';

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const r = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(r);
  }catch(err){
    res.status(500).json({message: err});
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {

  try{
    const cat = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    cat ? res.status(200).json(cat) : res.status(404).json({message: `unable to find [${req.params.id}]`})
  }catch(err){
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const {category_name} = req.body;
  if(category_name){
    try{
      const c = await Category.create(req.body);
      res.status(201).json(c)
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(400).json({message: `expected {"category_name": "a name"}`})
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const {category_name} = req.body;
  if(category_name){
    try{
      const c = await Category.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(c);
    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(400).json({message: `expected {"category_name": "a new name"}`})
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const c = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    c ? res.status(200).json(c) : res.status(404).json({message: `unable to find [${req.params.id}]`})
  }catch(err){
    res.status(500).json(err);
  }
});

export {router as categoryRoutes }


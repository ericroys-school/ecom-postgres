// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');
import { Router } from 'express';
const router = Router();
import { Tag, Product, ProductTag } from '../../models/index.js';


// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    res.status(200).json(await Tag.findAll({include: [{model: Product}]}));
  }catch(err){
    res.status(500).json(err)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  if(!req.params.id)
    res.status(400).json({message: "an id is required"})
  
  try{
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    tag ? res.status(200).json(tag) :
    res.status(404).json({message: `unable to find [${req.params.id}]`})
  }catch(error){
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const {tag_name} = req.body;
  if(tag_name){
    try{
    const tag = await Tag.create(req.body);
    res.status(201).json(tag)
    }catch(err){
      res.status(500).json(err)
    }
  }else
  res.status(400).json({message: `expected {"tag_name" : "a tag name"}`})

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  if(!req.params.id)
    res.status(400).json({message: "no id provided"})
  const {tag_name} = req.body;
  if(tag_name){
    try{
    const tag = await Tag.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(tag)
    }catch(err){
      res.status(500).json(err)
    }
  }else
  res.status(400).json({message: `expected {"tag_name" : "a tag name"}`})

});

router.delete('/:id', async (req, res) => {
  if(!req.params.id)
    res.status(400).json({message: "no id provided"})
  try{
    const tag = await Tag.destroy({
      where:{
        id: req.params.id
      }
    })
    tag ? res.status(200).json(tag) : 
      res.status(404).json({message: `unable to find [${req.params.id}]`})

  }catch(err){
    res.status(500).json(err)
  }
});

export { router as tagRoutes }

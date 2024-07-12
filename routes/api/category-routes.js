// const router = require('express').Router();
// const { Category, Product } = require('../../models');
import { Router } from 'express';
const router = Router();
import { Category, Product } from '../../models/index.js';

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const r = await Category.findAll();
    res.status(200).json(r);
  }catch(err){
    res.status(500).json({message: err});
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

export {router as categoryRoutes }


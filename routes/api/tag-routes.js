// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');
import { Router } from 'express';
const router = Router();
import { Tag, Product, ProductTag } from '../../models/index.js';

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

export { router as tagRoutes }

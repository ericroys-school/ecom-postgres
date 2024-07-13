// const { Category } = require('../models');
import { Category } from '../models/Category.js';

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

export const seedCategories = () => Category.bulkCreate(categoryData);


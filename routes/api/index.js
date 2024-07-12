// const router = require('express').Router();
// const categoryRoutes = require('./category-routes');
// const productRoutes = require('./product-routes');
// const tagRoutes = require('./tag-routes');
import { Router } from 'express';
const router = Router();
import {categoryRoutes} from './category-routes.js';
import {productRoutes} from './product-routes.js';
import {tagRoutes} from './tag-routes.js';

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

export { router as apiRoutes }

// import models
// const Product = require('./Product');
import {Product} from './Product.js';
// const Category = require('./Category');
import {Category} from './Category.js';
// const Tag = require('./Tag');
import {Tag} from './Tag.js';
// const ProductTag = require('./ProductTag');
import {ProductTag} from './ProductTag.js';

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

export {
  Product,
  Category,
  Tag,
  ProductTag,
};

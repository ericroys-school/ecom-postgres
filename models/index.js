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
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: 'product_tag'})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: 'product_tag'})

export {
  Product,
  Category,
  Tag,
  ProductTag,
};

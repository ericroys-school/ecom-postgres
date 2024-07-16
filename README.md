# ecom-postgres

![Unlicense](https://img.shields.io/badge/license-The_Unlicense-blue)

## Description

A Node/Express RESTful implementation of a simplified e-commerce model with PostgreSql support via Sequelize ORM. The model provides for CRUD for each piece of the model: Categories, Tags, and Products.

## Table of Contents

- [API Specification](#api-specification)
- [Video Demo](#video-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#licensing)
- [Contributing](#contributing)

### API Specification

The e-commerce API provides endpoints that allow you to perform create, read, update, and delete (CRUD) operations on items in the model.

#### Tags

##### POST /api/tags/

Inserts one record in the tags table.

Request Body Parameters:

```
{
    "tag_name": "a new tag name"
}
```

Status Codes:

- 201 -> Insertion success
- 400 -> Invalid request input
- 500 -> Something went wrong with the backend

##### PUT /api/tags/{id}

Updates an existing tag name.

Request Body Parameters:

```
{
    "tag_name": "an updated tag name"
}
```

Status Codes:

- 200 -> Update success
- 400 -> Invalid request input
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

##### GET /api/tags/{id}

Get a single tag by an id.

Status Codes:

- 200 -> Success
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

##### GET /api/tags

Get all tags.

Status Codes:

- 200 -> Success
- 500 -> Something went wrong with the backend

##### DELETE /api/tags/{id}

Deletes a single tag by an id.

Status Codes:

- 200 -> Success
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

#### Categories

##### POST /api/categories/

Inserts one record in the categories table.

Request Body Parameters:
`{"category_name": "a new category name"}`

Status Codes:

- 201 -> Insertion success
- 400 -> Invalid request input
- 500 -> Something went wrong with the backend

##### PUT /api/categories/{id}

Updates an existing categories name.

Request Body Parameters:

```
{
    "category_name": "an updated category name"
}
```

Status Codes:

- 200 -> Update success
- 400 -> Invalid request input
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

##### GET /api/categories/{id}

Get a single categories by an id.

Status Codes:

- 200 -> Success
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

##### GET /api/categories

Get all categories.

Status Codes:

- 200 -> Success
- 500 -> Something went wrong with the backend

##### DELETE /api/categories/{id}

Deletes a single categories by an id.

Status Codes:

- 200 -> Success
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

#### Products

##### POST /api/products/

Inserts one record in the products table and associates with 0:M tags if provided.

Request Body Parameters:

```
{
	"product_name": "new product name",
	"price": 00.00,
	"stock": 1,
	"tagIds": [1, 2, 3, 4, 5]
}
```

Status Codes:

- 201 -> Insertion success
- 400 -> Invalid request input
- 500 -> Something went wrong with the backend

##### PUT /api/products/{id}

Updates an existing product.

Request Body Parameters:

```
{
	"tagIds": [7, 8, 9]
}
```

Status Codes:

- 200 -> Update success
- 400 -> Invalid request input
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

##### GET /api/products/{id}

Get a single products by an id.

Status Codes:

- 200 -> Success
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

##### GET /api/products

Get all products.

Status Codes:

- 200 -> Success
- 500 -> Something went wrong with the backend

##### DELETE /api/products/{id}

Deletes a single products by an id.

Status Codes:

- 200 -> Success
- 404 -> Unable to find the id provided
- 500 -> Something went wrong with the backend

### Video Demo

There is a [short video](https://drive.google.com/file/d/1LZ34cJuHLK6ejcT2ioH30W3Z6ScwdYl6/view) to demonstrate the creation of the schema, seeding the demo data into the database, running the server, and then each CRUD scenario played with Insomnia.

### Installation

1.  Install Node.js version 20.x or newer
2.  Install or use existing latest PostgreSql server
3.  Clone https://github.com/ericroys-school/ecom-postgres.git
4.  `cd` into the `ecom-postgres` directory
5.  Run `npm i` to load all the project dependencies
6.  Edit .env.EXAMPLE to include your postgresql credentials
7.  Re-name .env.EXAMPLE to .env
8.  Via psql run `CREATE DATABASE ecommerce_db;`
9.  Add the demo data by running `npm run seed`
10. Run the program via `node server.js`

### Usage

The API should be available at http://localhost:3001 using the routes specified in the earlier API specification section.

### Credits

No kittens, puppies, armadillos, otter, or octopi were harmed in the making of this project.

### Licensing

As per always, this repo is licensed with [The Unlicense](http://choosealicense.com/licenses/unlicense) so feel free to do whatever. Share with your kids, dogs, neighbors, mail carrier, etc. Have a nice day!

### Contributing

Feel free to reach out via email @ eric.roys@gmail.com if you are interested in contributions to the project or have any kindly suggestions for improvements and/or enhancements. Tanks, Sherman!

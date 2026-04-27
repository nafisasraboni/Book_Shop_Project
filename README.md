# Book Shop Project

A PHP and MySQL based online book shop website where users can browse books, add products to cart, update cart quantity, and place orders. The project also includes an admin panel for managing book products.

## Project Overview

**Book Shop Project** is a simple e-commerce web application for a bookstore named **The Bookshelf**. It provides user-facing pages for browsing books and ordering products, along with an admin section to add, update, and delete products.

## Features

### User Side
- Home page with bookstore navigation
- About page describing the book shop
- Products/books listing page
- Search option
- Shopping cart system
- Add products to cart
- Update product quantity in cart
- Remove a single item from cart
- Delete all items from cart
- Checkout form
- Order confirmation message after checkout
- Contact page

### Admin Side
- Admin panel for product management
- Add new products with name, price, and image
- Display all added products in a table
- Update existing product details
- Delete products from the product list

## Technologies Used

- PHP
- MySQL
- HTML5
- CSS3
- Bootstrap
- Font Awesome
- JavaScript
- XAMPP / Apache Server

## Project Structure

```text
Book_Shop_Project/
├── admin.php
├── about.php
├── cart.php
├── checkout.php
├── config.php
├── contact.php
├── header.php
├── index1.php
├── login.php
├── products.php
├── search.php
├── style.css
├── style2.css
├── style4.css
├── js/
├── image/
├── uploaded_img/
└── README.md
Database Tables

This project uses MySQL database tables such as:

products
cart
order
Products Table

Stores product/book information.

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(255) NOT NULL
);
Cart Table

Stores cart items.

CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(255) NOT NULL,
  quantity INT NOT NULL
);
Order Table

Stores customer order details.

CREATE TABLE `order` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  method VARCHAR(255) NOT NULL,
  flat VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  pin_code VARCHAR(20) NOT NULL,
  total_products TEXT NOT NULL,
  total_price INT NOT NULL
);
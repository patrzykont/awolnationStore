var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [

	new Product({
	imagePath: 'https://i.pinimg.com/736x/6b/93/50/6b93500d092e37f650c0773eb8fc7552--apps.jpg',
	title: 'AWOLNATION Sweatshirt',
	description: 'AWOLNATION Sweatshirt in a size Large',
	price:15

	}),
	new Product({
	imagePath: 'http://cdn.shopify.com/s/files/1/1370/4065/products/AWOlXmasTee_grande.png?v=1511221308',
	title: 'AWOLNATION Southwest Tee',
	description: 'Southwest designed t-shirt in a size Large',
	price:24

	}),
	new Product({
	imagePath: 'http://images.dresscodeclothing.com/dimages/229348.aspx',
	title: 'Sail Tee',
	description: 'T-shirt based on the song "Sail" in a size Large',
	price:24

	}),
	new Product({
	imagePath: 'http://static.webshopapp.com/shops/134936/files/174643877/350x350x2/awolnation-here-come-the-runts-cd.jpg',
	title: 'Here Comes the Runts CD',
	description: "AWOLNATION's new albumn released in 2018 on CD format",
	price:8.99

	})
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
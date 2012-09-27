var ejs = require("ejs");
var express = require('express');
var app = express();
var service = require("./service/fortuneService");

// configure express
app.set('view engine', 'ejs');
app.listen(8080);

app.get('/', function(req, res){
	// get a fortune
	service.getFortune(function(fortune){
		res.render("fortune", {fortune: fortune});	
	});
	
});

app.get('/categories', function(req, res){
	// get a list of categories
	service.listCategories(function(categories){
		// render the list of categories
		res.render("categories", {categories: categories});	
	});	
});

app.get('/category/:categoryId', function(req, res){
	// return a fortune in the specified category
	service.getCategory(req.params.categoryId, function(category){
		// now get the fortun in this category
		service.getFortune(function(fortune){
			// now show the fortune in the category
			res.render("category", {category: category, fortune: fortune});
		}, req.params.categoryId);
			
	});
	
	
});



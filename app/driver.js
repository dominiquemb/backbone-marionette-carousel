var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var CarouselView = require('./views/carousel');

var initialData = {
		carouseldata: [
			{
				title: "First Block",
				images: [
					'app/img/cookies.jpg',
					'app/img/macaroons.jpg',
					'app/img/orangejuice.jpg'
				]
			},
			{
				title: "Second Block",
				images: [
					'app/img/beach.jpg',
					'app/img/rainforest.jpg',
					'app/img/snowman.jpg'
				]
			},
			{
				title: "Third Block",
				images: [
					'app/img/daisies.jpg',
					'app/img/tulips.jpg',
					'app/img/roses.jpg'
				]
			},
			{
				title: "Fourth Block",
				images: [	
					'app/img/barcelona1.jpg',
					'app/img/barcelona2.jpg',
					'app/img/barcelona3.jpg'
				]
			}
	]
};

var app = new Marionette.Application({
	onStart: function(options) {
		var carousel = new CarouselView({
			model: new Backbone.Model(options.initialData)
		});

		carousel.render(); 
	}
});

app.start({initialData: initialData});

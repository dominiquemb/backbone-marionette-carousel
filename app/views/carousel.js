var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var Carousel = Marionette.LayoutView.extend({
	el: '.carousel',
	tagName: 'div',
  	template: require('../templates/carousel.html'),
	ui: {
		prev: '.prev',
		next: '.next'
	},
	events: {
		'click @ui.prev': 'prevBlock',
		'click @ui.next': 'nextBlock'
	},
	prevBlock: function(evt) {
		var imageBlocks = $(this.el).find('.imageblock');
		var currentBlock = parseInt($(this.el).find('img:not(.hidden)').data('blocknumber'));
		var prevImageBlock = imageBlocks.eq(currentBlock-1);

		if (prevImageBlock.length) {
			var imagesLength = prevImageBlock.find('img').length;
			var randomNumber = Math.floor(Math.random() * imagesLength);

			$(this.el).find('img').addClass('hidden');
			$(this.el).find('.imageblock').eq(currentBlock-1).find('img').eq(randomNumber).removeClass('hidden');

			if ((currentBlock-2) >= 0) {
				$(this.el).find('.prev').removeClass('invisible');
			}
			else {
				$(this.el).find('.prev').addClass('invisible');
			}
			$(this.el).find('.next').removeClass('invisible');
		}
	},
	nextBlock: function(evt) {
		var imageBlocks = $(this.el).find('.imageblock');
		var currentBlock = parseInt($(this.el).find('img:not(.hidden)').data('blocknumber'));
		var nextImageBlock = imageBlocks.eq(currentBlock+1);
		if (nextImageBlock.length) {
			var imagesLength = nextImageBlock.find('img').length;
			var randomNumber = Math.floor(Math.random() * imagesLength);

			$(this.el).find('img').addClass('hidden');		
			$(this.el).find('.imageblock').eq(currentBlock+1).find('img').eq(randomNumber).removeClass('hidden');

			if (imageBlocks.eq(currentBlock+2).length) {
				$(this.el).find('.next').removeClass('invisible');
			}
			else {
				$(this.el).find('.next').addClass('invisible');
			}
			$(this.el).find('.prev').removeClass('invisible');
		}
	},
	onRender: function() {
		var imageBlocks = $(this.el).find('.imageblock');
		var firstImageBlock = imageBlocks.eq(0);
		var imagesLength = firstImageBlock.find('img').length;
		var randomNumber = Math.floor(Math.random() * imagesLength);

		firstImageBlock.find('img').eq(randomNumber).removeClass('hidden');

		if (imageBlocks.length == 1) {
			$(this.el).find('.next').addClass('invisible');
		}	
	}
});

module.exports = Carousel;

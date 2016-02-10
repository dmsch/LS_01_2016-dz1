$(document).ready(function() {
	// console.log('main.js loaded');
	if (!Modernizr.input.placeholder) {
		$('input, textarea').placeholder();
	};
});
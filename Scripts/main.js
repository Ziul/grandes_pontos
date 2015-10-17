var canvas       = null,
		context      = null,
		offsetWidth  = 20,
		offsetHeight = 20;

var setup = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	canvas.width = (window.innerWidth - offsetWidth);
	canvas.height = (window.innerHeight - offsetHeight);

	ATLAS.loadingAssets();

	// It needs to wait a little for the sprites to be loaded
	window.setTimeout(generateBoard, 100);
	window.setTimeout(drawBoard, 150, context);
};

setup();



var PhotoSphereViewer2 = function(args) {
		

		// 还回 true 判断是否支持 getContext;
	var isCanvasSupported = function() {
		var canvas = document.createElement("canvas");
		return !!(canvas.getContext && canvas.getContext('2d'))
	}

		//返回true 判断是否支持
	var isWebGLSupported = function() {
		var canvas = document.createElement('canvas');
		return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
	};
	
	var addEvent = function(elt, evt, f) {
		
	}	

}
var exports = module.exports = {};

exports.triangleArea = function(base, height){
	
	if(base<=0||isNaN(base)||height<=0||isNaN(height))
		return new Error("Invalid input...");
	else	
		return 0.5*base*height;
}

exports.perimeterOfTriangle = function (side1, side2, side3){
	
	if(side1<=0||isNaN(side1)||side2<=0||isNaN(side2)||side3<=0||isNaN(side3))
		return new Error("Invalid input...");
	else
		return side1+side2+side3;
}

exports.areaOfSquare = function (side){
	
	if(side<=0||isNaN(side))
		return new Error("Invalid input...");
	else
		return side*side;
}
 
exports.perimeterOfSquare = function (side){
	
	if(side<=0||isNaN(side))
		return new Error("Invalid input...");
	else
		return 4*side;
}

exports.areaOfCube = function(side){
	
	if(side<=0||isNaN(side))
		return new Error("Invalid input...");
	else
		return 6*side*side;
}

exports.surfaceAreaOfCube = function (side){
	
	if(side<=0||isNaN(side))
		return new Error("Invalid input...");
	else
		return side*side*side;
}
exports.perimeterOfCube = function (side){
		
	if(side<=0||isNaN(side))
		return new Error("Invalid input...");
	else
		return 12*side;
}
exports.circumferenceOfCircle = function (radius){
	
	if(radius<=0||isNaN(radius))
		return new Error("Invalid input...");
	else
		return 2*Math.PI*radius;
}
exports.areaOfCircle = function (radius){
	if(radius<=0||isNaN(radius))
		return new Error("Invalid input...");
	else
		return Math.PI*radius*radius;
}


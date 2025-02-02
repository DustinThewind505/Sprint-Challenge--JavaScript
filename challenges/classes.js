// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(attributes) { 
    this.length = attributes.length;
    this.width = attributes.width;
    this.height= attributes.height;
    };
  

CuboidMaker.prototype.volume = function(){
    return `${this.length * this.width * this.height}`;
  }

CuboidMaker.prototype.surfaceArea = function() {
    return `${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`; 
  }
*/


class CuboidMaker {
    constructor(attributes){
      this.length = attributes.length;
      this.width = attributes.width;
      this.height= attributes.height;
    };
  
    volume(){
      return (this.length * this.width * this.height);
    };
    
    surfaceArea(){
      return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    };
};
const cuboid = new CuboidMaker({
length: 4,
width: 5,
height: 5,
});












// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {
    constructor(cubeAttr){
        super(cubeAttr);
    }

    volume(){
        return (this.width * this.width * this.width);
    }

    surfaceArea(){
        return (6 * (this.width * this.width));
    }
}

const cubert = new CubeMaker({
    length: 4,
    width: 4,
    height: 4,
    });

console.log(cubert.volume());
console.log(cubert.surfaceArea());
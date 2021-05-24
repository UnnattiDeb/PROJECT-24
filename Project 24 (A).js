class Dustbin{
    constructor(x, y, ){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        boxPosition = width/2-100;
    boxY = 610;

    boxleftSprite = createSprite(boxPosition , boxY , 20, 100);
    boxleftSprite.shapeColor = "red";

    boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY , 20, 100, {isStatic: true});
   World.add(world, boxLeftBody);

boxBase = createSprite(boxPosition+100, boxY+40, 200, 20);
boxBase.shapeColor = "red";

boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20, {isStatic: true});
World.add(world, boxBottomBody);

boxleftSprite = createSprite(boxPosition+200, boxY, 20, 100);
boxleftSprite.shapeColor = "red";

boxRightBody = Bodies.rectangle(boxPosition+200-20, boxY, 20, 100, {isStatic:true});
World.add(world, boxRightBody);


    }
    display(){
        fill("green");
        
    }
    }
    

    
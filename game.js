var stage, loader;

function init() {
    stage = new createjs.StageGL("gameCanvas");
   
    var background = new createjs.Shape();
    background.graphics.beginLinearGradientFill(["#2573BB", "#6CB8DA", "#567A32"], [0, 0.85, 1], 0, 0, 0, 480)
    .drawRect(0, 0, 320, 480);
    background.x = 0;
    background.y = 0;
    background.name = "background";
    background.cache(0, 0, 320, 480);
   
    stage.addChild(background);
   
    stage.update();
  }



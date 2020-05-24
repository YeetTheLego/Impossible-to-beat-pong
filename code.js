var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

createEdgeSprites();
//top_border
var Border1 = createSprite(0, 10);
Border1.width = 810;
Border1.height = 20;
//bottem_border
var Border2 = createSprite(0, 400);
Border2.width = 800;
Border2.height = 40;
var Pong1 = createSprite(0, 200);
var Pong2 = createSprite(400, 200);
//Score
var score_net1 = createSprite(400, 0);
score_net1.width = 10;
score_net1.height = 800;
var score_net2 = createSprite(0, 400);
score_net2.width = 10;
score_net2.height = 800;
//Ball
var Ball = createSprite(200, 200);
Ball.scale = 0.1;
Ball.setVelocity(4.5, 5);
//Player
function draw() {
  background(rgb(220,220,220));
  Pong1.width = 30;
  Pong1.height = 55;
  Pong1.y = Ball.y;
  Pong1.y = Ball.y;
  if (keyDown("up")) {
    Pong2.y = Pong2.y - 15;
  }
  if (keyDown("down")) {
    Pong2.y = Pong2.y + 15;
  }
  Pong2.width = 30;
  Pong2.height = 55;
  //bounce+physics
  if (Ball.isTouching(Border2)) {
    Ball.bounceOff(Border2);
  }
  if (Ball.isTouching(Border1)) {
    Ball.bounceOff(Border1);
  }
  if (Ball.isTouching(Pong1)) {
    Ball.bounceOff(Pong1);
  }
  if (Ball.isTouching(Pong2)) {
    Ball.bounceOff(Pong2);
  }
  if (Ball.isTouching(score_net1)) {
    Ball.x = 200;
    Ball.y = 200;
  }
  if (Ball.isTouching(score_net2)) {
    Ball.x = 200;
    Ball.y = 200;
  }
  drawSprites();
  
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

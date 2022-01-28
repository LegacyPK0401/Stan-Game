var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["02e3caa4-9239-405b-8f1d-1001bde750a2","3a3491ca-7991-4b86-9d38-5b3871620538","1f7728a2-fe25-4649-9451-6a7ec17c3b59","de9a5ebb-fa3f-4cd8-8e1b-28aa4374826c","feb7b803-9315-4280-8fd8-29be02c1097d","9cfe2f85-f462-4d4a-a9d1-73e6db5126ab","4c1fdd13-d286-452f-b276-f5b4ac31f5f4","cf0675da-9538-4372-9d3d-1d7f00822521","7fdd269d-5454-4cdb-9f76-27f07c55cee7","a27451de-82d7-4689-b713-4fb9c62fbe82","d4f0ea55-77eb-46a6-90d2-35993b7556a1","af513e01-9c99-4645-91b1-9fafb4889331","a2636b10-adfb-4f3e-ad66-72e54319158a","8ac88f3a-8887-4827-ab61-867af2e40e25","cde148df-40fd-45ef-b74f-62de0920c87e","2800b7c9-5fef-43b0-8b66-9ce9e4221d88","46cea4e8-120b-44fe-946f-3ccb83c3bc2e","23f4e8f5-a31b-4643-b8b0-91750b1c321e","0d50afe2-9725-4015-9ab7-c8ca71f186d0","d58800b3-b40e-4bac-b7e8-b94fe80b10b3"],"propsByKey":{"02e3caa4-9239-405b-8f1d-1001bde750a2":{"name":"stan no","sourceUrl":null,"frameSize":{"x":72,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"bpGZW9AiXoPYd8QzAtEDdWY.M_Obfpw9","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":93},"rootRelativePath":"assets/02e3caa4-9239-405b-8f1d-1001bde750a2.png"},"3a3491ca-7991-4b86-9d38-5b3871620538":{"name":"stan no lightning","sourceUrl":null,"frameSize":{"x":70,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"TplW2Zd0KF8.nmncMFPiLDITb3aJ9_6_","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":143},"rootRelativePath":"assets/3a3491ca-7991-4b86-9d38-5b3871620538.png"},"1f7728a2-fe25-4649-9451-6a7ec17c3b59":{"name":"stan flight no","sourceUrl":null,"frameSize":{"x":76,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"QYz4b1MOdLriiXhm7c.VnoLfFn3KhdKm","loadedFromSource":true,"saved":true,"sourceSize":{"x":76,"y":98},"rootRelativePath":"assets/1f7728a2-fe25-4649-9451-6a7ec17c3b59.png"},"de9a5ebb-fa3f-4cd8-8e1b-28aa4374826c":{"name":"stan flight","sourceUrl":null,"frameSize":{"x":87,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"dOwJEyEDAgjefUFoI2EK0mUUFeA_GS5P","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":96},"rootRelativePath":"assets/de9a5ebb-fa3f-4cd8-8e1b-28aa4374826c.png"},"feb7b803-9315-4280-8fd8-29be02c1097d":{"name":"stan fight","sourceUrl":null,"frameSize":{"x":87,"y":97},"frameCount":2,"looping":false,"frameDelay":12,"version":"qdBSllcA9yEwlohWQqCoN0MHHEanwUcw","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":194},"rootRelativePath":"assets/feb7b803-9315-4280-8fd8-29be02c1097d.png"},"9cfe2f85-f462-4d4a-a9d1-73e6db5126ab":{"name":"stan fight no","sourceUrl":null,"frameSize":{"x":72,"y":93},"frameCount":2,"looping":false,"frameDelay":12,"version":"EhTCnrZF2FCtkgYsRxu2OddE7U2pV3oq","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":93},"rootRelativePath":"assets/9cfe2f85-f462-4d4a-a9d1-73e6db5126ab.png"},"4c1fdd13-d286-452f-b276-f5b4ac31f5f4":{"name":"stan right","sourceUrl":null,"frameSize":{"x":72,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"N71LufjhWZJgaEtS1AOg4TGgM3b2SBp5","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":97},"rootRelativePath":"assets/4c1fdd13-d286-452f-b276-f5b4ac31f5f4.png"},"cf0675da-9538-4372-9d3d-1d7f00822521":{"name":"stan left","sourceUrl":null,"frameSize":{"x":72,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"bEwvah3b_CMsFgqJeGRb_43zvlKf7n0J","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":97},"rootRelativePath":"assets/cf0675da-9538-4372-9d3d-1d7f00822521.png"},"7fdd269d-5454-4cdb-9f76-27f07c55cee7":{"name":"shield_2","sourceUrl":null,"frameSize":{"x":46,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"5iblsZzc1VuPFl.XmZr0um0WYh6HpRTZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":50},"rootRelativePath":"assets/7fdd269d-5454-4cdb-9f76-27f07c55cee7.png"},"a27451de-82d7-4689-b713-4fb9c62fbe82":{"name":"thug","sourceUrl":null,"frameSize":{"x":91,"y":113},"frameCount":10,"looping":true,"frameDelay":12,"version":"J5upWnR_UNWpOGs_wizSc4I_VrHA8t0n","loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":339},"rootRelativePath":"assets/a27451de-82d7-4689-b713-4fb9c62fbe82.png"},"d4f0ea55-77eb-46a6-90d2-35993b7556a1":{"name":"thug_steady","sourceUrl":null,"frameSize":{"x":91,"y":94},"frameCount":1,"looping":false,"frameDelay":12,"version":"Rhwr9WEPwMzmYGAqI3dRnHOtdjj5RNzR","loadedFromSource":true,"saved":true,"sourceSize":{"x":91,"y":94},"rootRelativePath":"assets/d4f0ea55-77eb-46a6-90d2-35993b7556a1.png"},"af513e01-9c99-4645-91b1-9fafb4889331":{"name":"land.jpg_1","sourceUrl":"assets/v3/animations/G0QMwtBwFbTZb0pOHdiAFGHJEPPHUDzlIGh_ZXBDbFg/af513e01-9c99-4645-91b1-9fafb4889331.png","frameSize":{"x":1000,"y":780},"frameCount":1,"looping":true,"frameDelay":4,"version":"SQ5WADwOSrBw.L7iZ_grkoGKiCTu1qbt","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":780},"rootRelativePath":"assets/v3/animations/G0QMwtBwFbTZb0pOHdiAFGHJEPPHUDzlIGh_ZXBDbFg/af513e01-9c99-4645-91b1-9fafb4889331.png"},"a2636b10-adfb-4f3e-ad66-72e54319158a":{"name":"ground","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sYLxu2ekHfdMW8PsdL4CE0JLebNuheyc","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a2636b10-adfb-4f3e-ad66-72e54319158a.png"},"8ac88f3a-8887-4827-ab61-867af2e40e25":{"name":"enemyBlue4_left","sourceUrl":null,"frameSize":{"x":84,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"HA.MqaXhkfLK8Tn1MF9gDYbjYNiy5rOr","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":82},"rootRelativePath":"assets/8ac88f3a-8887-4827-ab61-867af2e40e25.png"},"cde148df-40fd-45ef-b74f-62de0920c87e":{"name":"enemyBlue4_right","sourceUrl":null,"frameSize":{"x":84,"y":82},"frameCount":1,"looping":true,"frameDelay":12,"version":"j8bhyrlaYYBuuCMkHKkko5SqSBxNKXmJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":82},"rootRelativePath":"assets/cde148df-40fd-45ef-b74f-62de0920c87e.png"},"2800b7c9-5fef-43b0-8b66-9ce9e4221d88":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/04L4sdTODkNZF1OHf4qO_I.Al3QP43wA/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"04L4sdTODkNZF1OHf4qO_I.Al3QP43wA","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/04L4sdTODkNZF1OHf4qO_I.Al3QP43wA/category_backgrounds/city.png"},"46cea4e8-120b-44fe-946f-3ccb83c3bc2e":{"name":"win","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IbZCWiZkRIX.w6A9kIm_JqS8HcakA6.m","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/46cea4e8-120b-44fe-946f-3ccb83c3bc2e.png"},"23f4e8f5-a31b-4643-b8b0-91750b1c321e":{"name":"marvel.jpg_1","sourceUrl":"assets/v3/animations/G0QMwtBwFbTZb0pOHdiAFGHJEPPHUDzlIGh_ZXBDbFg/23f4e8f5-a31b-4643-b8b0-91750b1c321e.png","frameSize":{"x":700,"y":281},"frameCount":1,"looping":true,"frameDelay":4,"version":"ko.tNJO12INx8S_nPREmUra4UZSwBhqa","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":281},"rootRelativePath":"assets/v3/animations/G0QMwtBwFbTZb0pOHdiAFGHJEPPHUDzlIGh_ZXBDbFg/23f4e8f5-a31b-4643-b8b0-91750b1c321e.png"},"0d50afe2-9725-4015-9ab7-c8ca71f186d0":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":60,"y":62},"frameCount":2,"looping":true,"frameDelay":12,"version":"oyh2_dRQA6lO84efBIB_DS1AbhuXW66b","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":124},"rootRelativePath":"assets/0d50afe2-9725-4015-9ab7-c8ca71f186d0.png"},"d58800b3-b40e-4bac-b7e8-b94fe80b10b3":{"name":"crop.jpeg_1","sourceUrl":null,"frameSize":{"x":289,"y":322},"frameCount":1,"looping":true,"frameDelay":12,"version":"3spgrJPkM98n83tzjsT.mdXMykB2sWJK","loadedFromSource":true,"saved":true,"sourceSize":{"x":289,"y":322},"rootRelativePath":"assets/d58800b3-b40e-4bac-b7e8-b94fe80b10b3.png"}}};
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

var land=createSprite(200,200);
land.setAnimation("land.jpg_1");
land.scale=0.5;

var help=createSprite(350,50);
help.setAnimation("animation_1");
help.scale=1.3;

var city=createSprite(200,200);
city.setAnimation("city_1");
city.scale=1;
city.visible=false;

var shield=createSprite(0,0);
shield.setAnimation("shield_2");
shield.visible=false;
shield.setCollider("circle");
shield.scale=1.3;

var a=createSprite(400,150);
a.setAnimation("crop.jpeg_1");
a.scale=0.3;
a.velocityX=-2;
a.destroy();

var thug=createSprite(300,221);
thug.setAnimation("thug_steady");
thug.scale=1.5;

var crim=createSprite(50,221);
crim.setAnimation("thug_steady");
crim.debug=true;
crim.scale=1.5;
crim.destroy();

var evil=createSprite(0,0);
evil.setAnimation("thug_steady");
evil.scale=1.5;
evil.destroy();

var sad=createSprite(0,0);
sad.setAnimation("thug_steady");
sad.scale=1.5;
sad.destroy();

var tree=createSprite(200,300);
tree.setAnimation("thug");
tree.scale=1.5;
tree.destroy();

var stan=createSprite(100,221);
stan.setAnimation("stan flight");
stan.scale=1.5;

var lee=createSprite(195,130);
lee.setAnimation("stan flight no");
lee.scale=1.5;
lee.destroy();

var man=createSprite(199,130);
man.setAnimation("stan no lightning");
man.scale=1.5;
man.destroy();

var mar=createSprite(10,20);
mar.setAnimation("marvel.jpg_1");
mar.scale=1.5;
mar.destroy();

var score=0;

var ground=createSprite(150,175);
ground.setAnimation("ground");
ground.scale=5;

var win=createSprite(50,90);
win.setAnimation("win");
win.scale=0.2;
win.destroy();





function draw() {
  background(rgb(100, 128, 173));
  drawSprites();
  fill("gray");
   
   
   fill("black");
   textSize(13);
text("Get High Enough (WASD) and Hold F", 101,15);
text("Kill 100 or more Thugs", 130, 28);
text("Then Press Q",150,39);
movement();
flight();
  combat();
  

if(stan.y>225){
  stan.y=221;
}

 

 if(stan.x<30){
   stan.x=30;
 }
 
 if(stan.x>390){
   stan.x=390;
 }
 
 if(stan.y<10){
   stan.y=10;
 }
 
 
 //throw shield
 if(score>=0){
   if(stan.y<=150){
      if(keyDown("f")){
        shield.visible=true;
        shield.x=World.mouseX;
        shield.y=World.mouseY;
        stan.y=stan.y+0;
        stan.setAnimation("stan flight no");
      } else {
        shield.x=200;
        shield.y=100;
       shield.visible=false;
      }
      
      
      if(keyWentUp("f")){
        stan.setAnimation("stan flight no");
      }
   
    
    
   }

fill("black");
textSize(25);
text("Kills:"+score,10,10,100,100);

} 
}

function combat(){
 if(keyDown("e")){
   stan.setAnimation("stan fight");
   stan.play;
 } 
 
 if(keyWentUp("e")){
   stan.setAnimation("stan flight");
 }
 if(score>=120){
     if(keyDown("q")){
      sad.destroy();
      lee.destroy();
      man=createSprite(199,100);
      man.setAnimation("stan no lightning");
      man.scale=1.5;
      tree=createSprite(200,300);
      tree.setAnimation("thug");
      tree.play;
      tree.scale=1.5;
      win=createSprite(50,136);
      win.setAnimation("win");
      win.scale=1.4;
     a=createSprite(400,150);
    a.setAnimation("crop.jpeg_1");
    a.scale=0.3;
    a.velocityX=-2;
    playSound("assets/category_nature/thunderstorm_1.mp3");
    
   
 }
 

   
 
 }
}

function movement(){
 //left
  if(keyDown("a")){
    stan.setAnimation("stan left");
    stan.x=stan.x-1;
 
  } else{
    stan.setAnimation("stan no");
  }

//right
  if(keyDown("d")){
    stan.x=stan.x+1;
    stan.setAnimation("stan right");
  
  } else {
    stan.setAnimation("stan no");
  }
}

function flight(){
  //up
     if(keyDown("w")){
    stan.y=stan.y-1;
  stan.setAnimation("stan flight");
  
  } else {
    stan.setAnimation("stan no");
  }
  //down
  if(keyDown("s")){
    stan.y=stan.y+1;
    stan.setAnimation("stan flight");
    
 } else {
    stan.setAnimation("stan flight");
  }
  

if(shield.isTouching(thug)){
  thug.destroy();
 crim=createSprite(randomNumber(200,400),221);
 crim.setAnimation("thug_steady");
 crim.scale=1.5;
 score=score+1;
 playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_3.mp3");
}

if(shield.isTouching(crim)){
  crim.destroy();
 thug=createSprite(randomNumber(0,180),221);
 thug.setAnimation("thug_steady");
 thug.scale=1.5;
 score=score+1;
 playSound("assets/category_hits/retro_game_weapon_-_light_punch_2.mp3");
}

if(shield.isTouching(evil)){
  thug.destroy();
  thug=createSprite(130,221);
  thug.setAnimation("thug_steady");
  thug.scale=1.5;
  score=score+1;
  playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_2.mp3");
}
if(shield.isTouching(thug)){
  thug.destroy();
  crim=createSprite(randomNumber(30,390),50);
  crim.setAnimation("enemyBlue4_left");
  crim.scale=0.8;
  playSound("assets/category_hits/retro_game_weapon_-_sword_on_shield_2.mp3");
  
  if(crim.x>=200){
    crim.setAnimation("enemyBlue4_right");
  } else {
    crim.setAnimation("enemyBlue4_left");
  }
  
  if(score>=120){
    thug.destroy();
    crim.destroy();
    evil.destroy();
    sad=createSprite(200,300);
    sad.setAnimation("thug_steady");
    sad.scale=1.5;
    city.visible=true;
    ground.visible=false;
    stan.destroy();
    lee=createSprite(199,130);
    lee.setAnimation("stan flight no");
    lee.scale=1.5;
     mar=createSprite(70,70);
      mar.setAnimation("marvel.jpg_1");
      mar.scale=0.2;
    shield.visible=false;
    shield.x=200;
    thug.y=100;
    }
    
    
  }
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

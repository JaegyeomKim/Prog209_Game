// Create the canvas
// HTML에 사각형 사이즈의 canvas가 생김

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 640;//그냥 800 으로 봐꿈(image size 고쳐야함)
canvas.height = 426;//그냥 800 으로 봐꿈(image size 고쳐야함)
document.body.appendChild(canvas);




// Background, Hero, Monster의 이미지를 불러온거 같음
// Background image
var bgReady = false;
var bgImage = new Image();  //Image는 proporty  onload를 가지고 있음 이미지 로딩이 끝나면 코드를 런해라
bgImage.onload = function () {
    bgReady = true;  
};
bgImage.src = "images/snow.jpg";



// Top image
var topReady = false;
var topImage = new Image();  
topImage.onload = function () {
    topReady = true;  
};
topImage.src = "images/가로.png";


// side image
var sideReady = false;
var sideImage = new Image();  
sideImage.onload = function () {
    sideReady = true;  
};
sideImage.src = "images/세로.png";



// Dog image
var dogReady = false;
var dogImage = new Image();
dogImage.onload = function () {
    dogReady = true;
};
dogImage.src = "images/dog.png";

// Sweet potato image
var sweetReady = false;
var sweetImage = new Image();
sweetImage.onload = function () {
    sweetReady = true;
};
sweetImage.src = "images/sweetpotato.png";

// broccoli image
var broccoliReady = false;
var broccoliImage = new Image();
broccoliImage.onload = function () {
    broccoliReady = true;
};
broccoliImage.src = "images/broccoli.png";

// carrot image
var carrotReady = false;
var carrotImage = new Image();
carrotImage.onload = function () {
    carrotReady = true;
};
carrotImage.src = "images/carrot.png";


// egg image
var eggReady = false;
var eggImage = new Image();
eggImage.onload = function () {
    eggReady = true;
};
eggImage.src = "images/egg.png";

// salmon image
var salmonReady = false;
var salmonImage = new Image();
salmonImage.onload = function () {
    salmonReady = true;
};
salmonImage.src = "images/salmon.png";


// chocolate image
var chocolateReady = false;
var chocolateImage = new Image();
chocolateImage.onload = function () {
    chocolateReady = true;
};
chocolateImage.src = "images/chocolate.png";

// corn image
var cornReady = false;
var cornImage = new Image();
cornImage.onload = function () {
    cornReady = true;
};
cornImage.src = "images/corn.png";


var grapeReady = false;
var grapeImage = new Image();
grapeImage.onload = function () {
    grapeReady = true;
};
grapeImage.src = "images/grape.png";


// Game objects
var dog = {
    speed: 256, // movement in pixels per second
    x: 0,  // where on the canvas are they?
    y: 0  // where on the canvas are they?
};
var sweet = {
// for this version, the sweet does not move, so just and x and y
    x: 0,
    y: 0
};

var grape = {
    x: 0,
    y: 0
};


var broccoli = {
    x: 0,
    y: 0
};

var carrot = {
    x: 0,
    y: 0
};
var chocolate = {
    x: 0,
    y: 0
};
var corn = {
    x: 0,
    y: 0
};
var egg = {
    x: 0,
    y: 0
};
var salmon = {
    x: 0,
    y: 0
};

var CountPoint = 0;


//==========================Handle keyboard controls=======================================



// Handle keyboard controls
var keysDown = {}; //object were we properties when keys go down
                // and then delete them when the key goes up
// so the object tells us if any key is down when that keycode
// is down.  In our game loop, we will move the hero image if when
// we go thru render, a key is down

addEventListener("keydown", function (e) {
    //console.log(e.keyCode + " down")
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    //console.log(e.keyCode + " up")
    delete keysDown[e.keyCode];
}, false);



//======================Update 히어로 움직임 조작===========================================


// Update game objects
var update = function (modifier) {

    //히어로가 밖으로 못나가게 함
    if (38 in keysDown && dog.y > 32+4) { //  holding up key
        dog.y -= dog.speed * modifier;
    }
    if (40 in keysDown && dog.y < canvas.height - (64 + 6)) { //  holding down key
        dog.y += dog.speed * modifier;
    }
    if (37 in keysDown && dog.x > (32+4)) { // holding left key
        dog.x -= dog.speed * modifier;
    }
    if (39 in keysDown && dog.x < canvas.width - (64 + 6)) { // holding right key
        dog.x += dog.speed * modifier;
    }
    


    // Are they touching?
    if (
        dog.x <= (grape.x + 32)
        && grape.x <= (dog.x + 32)
        && dog.y <= (grape.y + 32)
        && grape.y <= (dog.y + 32)
        
    ) {
        --CountPoint;
        grape.x = 200
        grape.y = 395
        if (CountPoint == 5) {
            alert('Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (sweet.x + 32)
        && sweet.x <= (dog.x + 32)
        && dog.y <= (sweet.y + 32)
        && sweet.y <= (dog.y + 32)
    ){
        ++CountPoint;
        sweet.x = 250
        sweet.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (broccoli.x + 32)
        && broccoli.x <= (dog.x + 32)
        && dog.y <= (broccoli.y + 32)
        && broccoli.y <= (dog.y + 32)
    ){
        ++CountPoint;
        broccoli.x = 300
        broccoli.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (carrot.x + 32)
        && carrot.x <= (dog.x + 32)
        && dog.y <= (carrot.y + 32)
        && carrot.y <= (dog.y + 32)
    ){
        ++CountPoint;
        carrot.x = 350
        carrot.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (chocolate.x + 32)
        && chocolate.x <= (dog.x + 32)
        && dog.y <= (chocolate.y + 32)
        && chocolate.y <= (dog.y + 32)
    ){
        --CountPoint;
        chocolate.x = 400
        chocolate.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (corn.x + 32)
        && corn.x <= (dog.x + 32)
        && dog.y <= (corn.y + 32)
        && corn.y <= (dog.y + 32)
    ){
        --CountPoint;
        corn.x = 450
        corn.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (egg.x + 32)
        && egg.x <= (dog.x + 32)
        && dog.y <= (egg.y + 32)
        && egg.y <= (dog.y + 32)
    ){
        ++CountPoint;
        egg.x = 500
        egg.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    } else if (
        dog.x <= (salmon.x + 32)
        && salmon.x <= (dog.x + 32)
        && dog.y <= (salmon.y + 32)
        && salmon.y <= (dog.y + 32)
    ){
        ++CountPoint;
        salmon.x = 550
        salmon.y = 395
        if (CountPoint == 5) {
            alert('Great! Your dog is healthy!')
            location.reload();
        }
        if (grape.y == 395 && sweet.y == 395 && broccoli.y ==395 && carrot.y ==395 && chocolate.y ==395 && corn.y ==395 && egg.y ==395 && salmon.y ==395){
            location.reload();
            alert('Your dog is crying! Check + and - point!')
        }
    }
};






//===============================Draw everything=============================================
// Draw everything in the main render function 배경이랑 히어로 몬스터 그리기 
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    
    if (sideImage) {
        ctx.drawImage(sideImage, 0, 0); //top
        ctx.drawImage(sideImage, 640-32,0); //buttom
    }
    if (topImage) {
        ctx.drawImage(topImage, 0, 0); //top
        ctx.drawImage(topImage, 0, 426-32); //buttom
    }


    if (dogReady) {
        ctx.drawImage(dogImage, dog.x, dog.y);
    }

    if (sweetReady) {
        ctx.drawImage(sweetImage, sweet.x, sweet.y);
    }

    if (grapeReady) {
        ctx.drawImage(grapeImage, grape.x, grape.y);
    }
    
    if (broccoliReady) {
        ctx.drawImage(broccoliImage, broccoli.x, broccoli.y);
    }

    if (carrotReady) {
        ctx.drawImage(carrotImage, carrot.x, carrot.y);
    }

    if (chocolateReady) {
        ctx.drawImage(chocolateImage, chocolate.x, chocolate.y);
    }

    if (cornReady) {
        ctx.drawImage(cornImage, corn.x, corn.y);
    }

    if (eggReady) {
        ctx.drawImage(eggImage, egg.x, egg.y);
    }

    if (salmonReady) {
        ctx.drawImage(salmonImage, salmon.x, salmon.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Dog's Happy Point: " + CountPoint, 32, 10);

}



//==============================포인트 올라감 + 리셋 몬스터 잡을떄마다 혹은 게임 시작====================================

// Reset the game when the player catches a monster
var reset = function () {
    
    dog.x = canvas.width / 2;
    dog.y = canvas.height / 2;


    sweet.x = 32 + (Math.random() * (canvas.width - 96));
    sweet.y = 32 + (Math.random() * (canvas.height - 96));

    grape.x = 32 + (Math.random() * (canvas.width - 96));
    grape.y = 32 + (Math.random() * (canvas.height - 96));


    broccoli.x = 32 + (Math.random() * (canvas.width - 96));
    broccoli.y = 32 + (Math.random() * (canvas.height - 96));


    carrot.x = 32 + (Math.random() * (canvas.width - 96));
    carrot.y = 32 + (Math.random() * (canvas.height - 96));

    chocolate.x = 32 + (Math.random() * (canvas.width - 96));
    chocolate.y = 32 + (Math.random() * (canvas.height - 96));

    corn.x = 32 + (Math.random() * (canvas.width - 96));
    corn.y = 32 + (Math.random() * (canvas.height - 96));


    egg.x = 32 + (Math.random() * (canvas.width - 96));
    egg.y = 32 + (Math.random() * (canvas.height - 96));

    salmon.x = 32 + (Math.random() * (canvas.width - 96));
    salmon.y = 32 + (Math.random() * (canvas.height - 96));
    //나무로 가지 못하게 32 and 96 
    // 32 케릭터 사이즈 만약 사이즈가 다르면 계산 다시해야함 45분에 설명
    CountPoint = 0
};





//==========================================main game loop========================================================



// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    //  Request to do this again ASAP
    requestAnimationFrame(main);
};


// Let's play this game!
var then = Date.now();
reset();
main();  // call the main game loop.

//====================================================================================================================


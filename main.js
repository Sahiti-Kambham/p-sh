var canvas = new fabric.Canvas('MyCanvas');

block_image_width=30;
block_image_height=30;

playerx=10;
playery=10;

var playero="";
var imgobject="";

function player_update() {

    fabric.Image.fromURL("player.png",function(Img) {

        playero=Img;

        playero.scaleToWidth(150);
        playero.scaleToHeight(150);

        playero.set({top:playery,
        left:playerx});

        canvas.add(playero);

    } );
}

function block_update(getimage) {

    fabric.Image.fromURL(getimage,function(Img) {

        imgobject=Img;

        imgobject.scaleToWidth(block_image_width);
        imgobject.scaleToHeight(block_image_height);

        imgobject.set({top:playery,
        left:playerx});

        canvas.add(imgobject);

    } );
}

window.addEventListener("keydown",okey);

function okey(e) {

    var opressed = e.keyCode;

    console.log(opressed);

    if(e.shiftkey==true && opressed=="80") {

        console.log("P and Shift");

        block_image_width=block_image_width+10;

        block_image_height=block_image_height+10;

        document.getElementById("cw").innerHTML=block_image_width;

        document.getElementById("ch").innerHTML=block_image_height;
    }

    if(e.shiftkey==true && opressed=="77") {

        console.log("m and Shift");

        block_image_width=block_image_width-10;

        block_image_height=block_image_height-10;

        document.getElementById("cw").innerHTML=block_image_width;

        document.getElementById("ch").innerHTML=block_image_height;
    }

    if(opressed=="38"){

        up();

        console.log("up");
    }

    if(opressed=="40"){

        down();

        console.log("down");
    }

    if(opressed=="39"){

        right();

        console.log("right");
    }

    if(opressed=="37"){

        left();

        console.log("left");
    }

    
    if(opressed=="70") {

        block_update("https://i.postimg.cc/hGnyTPLB/ironman-face.png");

        console.log("f");

    }

    if(opressed=="66") {

        block_update("https://i.postimg.cc/FscwL6M0/spiderman-body.png");

        console.log("b");

    }

    if(opressed=="76") {

        block_update("https://i.postimg.cc/KzF6GDqt/hulk-legs.png");

        console.log("l");

    }


    if(opressed=="82") {

        block_update("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png");

        console.log("r");

    }
    if(opressed=="72") {

        block_update("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png");

        console.log("h");

    }


}

function up() {

    if(playery>=0) {

        playery=playery-block_image_height;

        console.log("block image height="+block_image_height);

        console.log("when up arrow is pressed,x="+playerx+"y="+playery);

        canvas.remove(playero);

        player_update();
    }
}

function down() {

    if(playery<=500) {

        playery=playery+block_image_height;

        console.log("block image height="+block_image_height);

        console.log("when up arrow is pressed,x="+playerx+"y="+playery);

        canvas.remove(playero);

        player_update();
    }
}

function left() {

    if(playerx>0) {

        playerx=playerx-block_image_width;

        console.log("block image width="+block_image_width);

        console.log("when left arrow is pressed,x="+playerx+"y="+playery);

        canvas.remove(playero);

        player_update();
    }
}

function right() {

    if(playerx<=850) {

        playerx=playerx+block_image_width;

        console.log("block image width="+block_image_width);

        console.log("when left arrow is pressed,x="+playerx+"y="+playery);

        canvas.remove(playero);

        player_update();
    }
}
/*//////準備//////*/
/*キー設定開始*/
    const keyEnter = 13;
    const keyShift = 16;
    const keyCtrl = 17;
    const keyAlt = 18;
    const keyEsc = 27;
    const keySpace = 32;
    const key0 = 48;
    const key1 = 49;
    const key2 = 50;
    const key3 = 51;
    const key4 = 52;
    const key5 = 53;
    const key6 = 54;
    const key7 = 55;
    const key8 = 56;
    const key9 = 57;
    const keyA = 65;
    const keyB = 66;
    const keyC = 67;
    const keyD = 68;
    const keyE = 69;
    const keyF = 70;
    const keyG = 71;
    const keyH = 72;
    const keyI = 73;
    const keyJ = 74;
    const keyK = 75;
    const keyL = 76;
    const keyM = 77;
    const keyN = 78;
    const keyO = 79;
    const keyP = 80;
    const keyQ = 81;
    const keyR = 82;
    const keyS = 83;
    const keyT = 84;
    const keyU = 85;
    const keyV = 86;
    const keyW = 87;
    const keyX = 88;
    const keyY = 89;
    const keyZ = 90;
    const keyLeft = 37;
    const keyUp = 38;
    const keyRight = 39;
    const keyDown = 40;
/*キー設定終了*/

window.addEventListener("load", update);
let scene = 1;
let updatecnt = 1;                      //再描画回数
const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");    //キャンバス指定
let playerX;
let playerY;
let playerSpeed;
var enemyX;
var enemyY;

//描画関数
function render(src, x, y){
    var image = new Image();
    image.src = src;
    ctx.drawImage(image, x, y);
}
//キー入力確認
var input_key = new Array(90);
for(let i = 0;i > 90;i++){
    input_key.push(false)
}
window.addEventListener("keydown", handlekeydown);
function handlekeydown(e){
    input_key[e.keyCode] = true;
}
window.addEventListener("keyup", handlekeyup);
function handlekeyup(e){
    input_key[e.keyCode] = false;
}

function wait(条件式,timeout){
    if(timeout == undefined){
        var time = 1000000;
    }
    else{
        var time = timeout * 1000;
    }
    let roop = 0;
    while(条件式 = true || roop > time){
    setTimeout(1)
    roop++;
    }
    if(roop > time){
        return undefined;
    }
    else{
        return (roop / 1000);   //かかった秒数
    }
}

//ここからmain
function update(){
    ctx.clearRect(0, 0, 1024, 768);
    updatecnt++;
    //描画
    objectupdate();
    forerender();

    window.requestAnimationFrame(update);   //60fps
}
function forerender(){
    switch(scene){
        case 1:
            var image = new Image();
            image.src = "./images/title.png";
            ctx.drawImage(image, 0, 0);
            break;
        case 2:
            var image = new Image();
            image.src = "./images/stage.png";
            ctx.drawImage(image, 0, 0);
            break;
    }
}
function objectupdate(){
    switch(scene){
        case 1:
            if(input_key[keyX]){
            playerX = 300;
            playerY = 660;
            playerSpeed = 5;
            enemyX = 300;
            enemyY = 110;

            scene = 2;
            break;
            }
        case 2:
            //低速か
                if(input_key[keyShift]){
                    playerSpeed = 2;
                }
                else{
                    playerSpeed = 5;    
                }
            //移動
                if(input_key[keyUp]){
                    playerY -= playerSpeed;
                    if(playerY < 20){playerY = 20;}
                }
                if(input_key[keyDown]){
                    playerY += playerSpeed;
                    if(playerY > 686){playerY = 686;}
                }
                if(input_key[keyRight]){
                    playerX += playerSpeed;
                    if(playerX > 591){playerX = 591;}
                }
                if(input_key[keyLeft]){
                    playerX -= playerSpeed;
                    if(playerX < 21){playerX = 21;}
                }
            //敵描画
                var image = new Image();
                image.src = "./images/chara/Enemy.png";
                ctx.drawImage(image, enemyX, enemyY);
            //弾幕描画
            //プレイヤー描画
                var image = new Image();
                image.src = "./images/chara/Player.png";
                ctx.drawImage(image, playerX, playerY);
            break;
    }
}
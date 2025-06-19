let bullet = [];
let bullettype = [];
let bulletX = [];
let bulletY = [];
let bulletdir = [];
let bulletspeed = [];
let bulletdraw = [];
const straight = 1;
function newbullet(type,x,y,dir,speed){
        bullettype.push(type);
        bulletX.push(x);
        bulletY.push(y);
        bulletdir.push(dir);
        bulletspeed.push(speed);
        bulletdraw.push(true);
        return bulletdraw.length;
}
function bulletupdate(){
        for (let i = 0; i < bulletdraw.length + 1; i++) {
                switch(bullettype[i]){
                    case 1:
                        let n = bulletdir / 180 * Math.PI;
                        bulletX[i] += Math.cos(n * bulletspeed[i]);
                        bulletY[i] += Math.sin(n * bulletspeed[i]);
                        break;
                }
        }
}
function bulletrender(){
        for(let i = 0; i < bulletdraw.length + 1; i++){
                switch(bullettype[i]){
                        case 1:
                                render("./images/bullet/b1.png", bulletX[i], bulletY[i]);
                                break;
                }
        }
}
function bulletprocess(){
        bulletupdate();
        bulletrender();
}
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
for (let i = 0; i < bulletdraw.length; i++) {
        switch(bullettype[i]){
            case 1:
                
        }
        
}

}

let bullet = [];
let bullettype = [];
let bulletX = [];
let bulletY = [];
let bulletdir = [];
let bulletspeed = [];
class bullet {
    constructor(type,x,y,dir,speed) {
        bullettype.push(type);
        bulletX.push(x);
        bulletY.push(y);
        bulletdir.push(dir);
        bulletspeed.push(speed);
        this.bulletnumber = bulletspeed.length;
    }
}
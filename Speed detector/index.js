function checkspeed(speed) {
const speedlimit=70;
const kmperPoint=5;

    if ( speed < speedlimit+kmperPoint){
        console.log("Ok")
        return ;
    }
    const points=Math.floor((speed - speedlimit)/kmperPoint);
    if (points >= 12) {
        console.log("License Suspended")
        
    } else {
        console.log("Points", points);
        
    }
        
    }
    console.log(checkspeed());
function checkspeed(speed) {
    // the speed limit is 70km/h
const speedlimit=70;
const kmperPoint=5;

    if ( speed < speedlimit+kmperPoint){
        // if the speed is not exceeding 70km/h return ok.
        console.log("Ok")
        return ;
    }
    // if the speed is exceeding 70km/h then then u give a determit point for every 5km/h exceeded
    // it should print "License suspended" when the points exceed 12 points
    // should display the points
    const points=Math.floor((speed - speedlimit)/kmperPoint);
    if (points >= 12) {
        console.log("License Suspended")
        
    } else {
        console.log("Points", points);
        
    }
        
    }
checkspeed();
function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation =42;
    const distance = Math.abs(pickupLocation - headquartersLocation);
    return distance;
    

}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock =264;
    const distance= blocks * feetPerBlock;
    return distance;

}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled =Math.abs(endBlock - startBlock);
    const feetPerBlock =264;
    const distance =blocksTravelled * feetPerBlock;
    return distance;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    } if (2000 > distance && 400 < distance) {
        let fare = (distance - 400) * 0.02;
         return fare;
    } if (distance > 2000 && distance < 2500 ) {
        return 25;
    }if (distance > 2500) {
        return "cannot travel that far";
    }
     


}
    
  
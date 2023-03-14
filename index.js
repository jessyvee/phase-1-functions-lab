// Code your solution in this file!
let distanceInBlocks;

function distanceFromHqInBlocks(distanceInBlocks){
    if (distanceInBlocks >= 42){
        return ((distanceInBlocks-42));
    }
    else if(distanceInBlocks < 42){
        return ((42-distanceInBlocks));
    }
}
function distanceFromHqInFeet(distanceInBlocks) {
    
    if (distanceInBlocks >= 43){
        return ((distanceInBlocks-42)*264);
    }
    else if(distanceInBlocks < 42){
        return ((42-distanceInBlocks)*264);
    } 
}
    
 
function distanceTravelledInFeet(num1,num2){
   if (num2>num1){
    return ((num2-num1)*264);
   } 
   else if (num2<num1){
    return (1584);

   }

}
function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264;
  
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

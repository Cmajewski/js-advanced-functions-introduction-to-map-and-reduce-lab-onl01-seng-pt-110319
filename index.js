// Your code here
function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i])
    }
    return r
  }
  
  function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i])
    }
    return r
  }
  
  function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i])
    }
    return r
  }
  
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i])
    }
    return r
  }
  
  function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }











// function mapToNegativize(sourceArray){
//     return sourceArray.map(x => x*=-1);
// };

// function mapToNoChange(sourceArray){
//     return sourceArray.map(x=>x);
// }

// function mapToDouble(sourceArray){
//     return sourceArray.map(x=>x*2);
// }
// function mapToSquare(sourceArray){
//     return sourceArray.map(x=>x**2);
// }

// function reduceToTotal(sourceArray, startingPoint=0){
//     function reducer(accumulater,currentValue){return accumulater+currentValue}
//     return sourceArray.reduce(reducer,startingPoint);
// }

// function  reduceToAllTrue(sourceArray){
//     function reducer(accumulater,currentValue){
//         if(!!currentValue==true){
//             return true;}
//         else{
//             return false;}
//     }
//     return sourceArray.reduce(reducer,0);
// }
// function  reduceToAnyTrue(sourceArray){
//     function reducer(accumulater,currentValue){
//         if(!!accumulater==true || !!currentValue==true){
//             return true;}
//         else{
//             return false;}
//     }
//     return sourceArray.reduce(reducer,0);
// }





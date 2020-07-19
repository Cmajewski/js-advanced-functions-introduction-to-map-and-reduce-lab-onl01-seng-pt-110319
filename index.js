// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x*=-1);
};

function mapToNoChange(sourceArray){
    return sourceArray.map(x=>x);
}

function mapToDouble(sourceArray){
    return sourceArray.map(x=>x*2);
}
function mapToSquare(sourceArray){
    return sourceArray.map(x=>x**2);
}

function reduceToTotal(sourceArray, startingPoint=0){
    function reducer(accumulater,currentValue){return accumulater+currentValue}
    return sourceArray.reduce(reducer,startingPoint);
}

function  reduceToAllTrue(sourceArray){
    function reducer(accumulater,currentValue){
        if(!!currentValue==true){
            return true;}
        else{
            return false;}
    }
    return sourceArray.reduce(reducer,0);
}
function  reduceToAnyTrue(sourceArray){
    function reducer(accumulater,currentValue){
        if(!!accumulater==true || !!currentValue==true){
            return true;}
        else{
            return false;}
    }
    return sourceArray.reduce(reducer,0);
}





//SCORE: 75%
// CATEGORY: Array
//TITLE: CyclicRotation
function solution(A, K){
    if(!Array.isArray(A)){
        throw new Error("First argument must be an array");
    }
    if(A.length > 100){
        throw new Error("Length of array of first argument must not be greater than 100");
    }
    if(typeof K != "number"){
        throw new Error("Second argument must be an integer");
    }
    if(K < 0){
        throw new Error("Second argument must be of a postive integer");
    }
    if(K > 100){
        throw new Error("Second argument must not be greater than 100");
    }
    if(A.some(e=> e< -1000 || e > 1000)){
        throw new Error("First argument must only have elements within [-1000..1000]");
    }
   if(K < 2){
       return A;
   }else{
       for(i=0; i<A.length; i++){
           A.unshift(A.pop());
       }
     return A;
   }
}

//SCORE: 33%
// CATEGORY: TEST
//TITLE: minimumMissingPositiveInteger in array
/* Needs improvement*/

let solution2=(A)=>{
  let B = A.map(e=> e<0?1:e+1);
//   console.log(B);
  let min = B.filter((e)=> e > 0 && !A.includes(e));
//   console.log(min);
  return min.length< 1 ?1: Math.min(...min);
}


//SCORE: 100%
// CATEGORY: TEST
//TITLE: Longest binary zeros
function solution3(num) {
    let str = num.toString(2);
    let  len = 0;
    let patt = /10+1/;
   while(patt.test(str)){
       let part = patt.exec(str).toString();
       var lent = part.slice(1, part.length-1).length;
       len = lent> len? lent:len;
       str = str.replace(part.slice(1, part.length-1), '');
       
  }
  return len;
}

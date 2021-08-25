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

//SCORE: 66%
// CATEGORY: Array
//TITLE: OddOccurrencesInArray
/*Find value that occurs in odd number of elements*/
function solution(A){
    // if(A.length < 1 || A.length >1000000 || A.length % 2 === 0 ){
    //     throw new Error ("Argument must be an array of odd length between [1..1,000,000]")
    // }
    // if(A.find(e=>e<1 || e > 1000000000 || e % 2 === 0)){
    //     throw new Error ("Argument must be an array containing odd elements between [1..1,000,000]")
    // }

    let res = Array.from( new Set(A)).filter(v=> A.filter(e=> v === e).length % 2 != 0);
    if(res.length != 1){
        throw new Error ("Argument must have a unique element of odd occurence number")
    }
    
    return res[0];
}

//SCORE: 100%
// CATEGORY: TEST
//TITLE: minimumMissingPositiveInteger in array
/* Needs improvement*/

function solution(A) {
    let missingInteger = 1;
    A = A.sort((a, b) => a - b);
    for(let i = 0; i < A.length; i++){
        if(A[i] == missingInteger ) missingInteger++;
        if(A[i] > missingInteger) return missingInteger;
    }
    return missingInteger;
}


//SCORE: 100%
// CATEGORY: Iteration
//TITLE: BinaryGap (Longest binary zeros)
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

//SCORE: Unofficial
//CATEGORY: Iteration
//TITLE: Power object filter. Recursion.
const format=(data)=>{
  let copy = Array.isArray(data)?[]:{};
  for (let item in data) {
	if(data[item] == 'n' )continue;
	// console.log(data[item]);
	let temp;
	switch (typeof data[item]) {
	  case ('string'):
           temp = {[item]:data[item]}
	   break;
          case ('number'):
	    temp = {[item]:data[item]}
	    break;
	  default:
	    if(Array.isArray(data[item])){
	      temp = {[item]: [...(data[item].filter(d=> d != 'n').map(e=>{
		if(typeof e == 'object'){
	           if(Array.isArray(e)){
	              return e.filter(n=> n !='n');
		   }
		   return format(e);
		}
		return e;
	 }))]};
	}else {
	  console.log('\n is obj \n ');
	  temp = {[item]:format(data[item])};
	}
	break;
      }
      copy = Object.assign({},copy, temp);
  }
  return copy;
  };

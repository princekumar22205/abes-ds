function myFunction(){
    console.log("starting a task...");

    let sum  = 0;
    for(let i=0; i<100000000000; i++){
        sum += 1;
    }
    console.log("Task finished");
    return sum;
}

console.log("Before the function call");
let result = myFunction();
console.log("after the function call");
console.log("result:",result);
function myFunction(){
    console.log("starting a task...");
    setTimeout(()=>{
         let sum  = 0;
    for(let i=0; i<100000000000; i++){
        sum += 1;
    }
    console.log("Task finished");
    console.log("result:",sum);
    },0);
   
}

console.log("Before the function call");
myFunction();
console.log("after the function call");

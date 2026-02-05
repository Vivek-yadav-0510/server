function myfunction(){
    console.log("Starting a task...");
    //Simulate a long-running task
    setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++){
            sum += i;
        }
        console.log("Task finished!");
        console.log("Result:", sum);
    }, 0);
}

console.log("Before the function call");
myfunction();
console.log("After the function call");
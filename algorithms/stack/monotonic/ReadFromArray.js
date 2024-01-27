export function readFromArrayByValue(nums) {
    let monoStack = [];
    for (const value of nums) {
        while(monoStack.length > 0 && monoStack[monoStack.length - 1] <= value) {
            console.log("Out from mono stack: " + monoStack.pop());
        }
        monoStack.push(value);
    }

    console.log("Rest in mono stack: ");
    while(monoStack.length > 0) {
        console.log(monoStack.pop());
    }
}



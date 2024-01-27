export function findTheFirstTrue(arr) {
    let left = 0;
    let right = arr.length - 1;

    let trueIndex = -1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) /2);
        if (arr[mid]) {
            trueIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return trueIndex;
}

export function findTheFirstTrue_v2_broken(arr) {
    let L = arr.length;
    let counter = 0;
    let left = 0;
    let right = arr.length - 1;

    let trueIndex = -1;
    while(left < right && counter < L) {  //a while loop without equality will miss the single-element edge case
        let mid = left + Math.floor((right - left) /2);
        console.log("mid = " + mid + " left = " + left + " right = " + right );
        if (arr[mid]) {
            trueIndex = mid;
            right = mid; // not doing mid - 1
        } else {
            left = mid;  // not doing mid + 1
        }
        // we will use this counter to get out from incorrect loop condition
        counter++;
    }

    return trueIndex;
}

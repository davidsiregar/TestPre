let a = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];

function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);


}

bblSort(a);

console.log("odd Number");
function oddNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(` ${arr[i]}`);
        }
    }
}

oddNumber(a);


console.log("Even Number");
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        console.log(` ${a[i]}`);
    }
}
console.log(a);

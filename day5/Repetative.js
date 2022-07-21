let arr = [1, 2, 3, 4, 5,1,5]
for (let i = 0; i <= arr.length - 1; i++){
    let count = 0;
    for (let j = 0; j < i; j++) {
        if (arr[i] == arr[j]) {
            count++
            console.log(count);
        }
    }
}
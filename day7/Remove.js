function pushMethod(arr,n) {
    let NewArr = []
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] != n) {
            NewArr.push(arr[i])
        }
    }
    return NewArr
}
console.log(pushMethod([1, 2, 3, 4, 5], 2));






function splice(arr1,n1) {
    let index = arr1.indexOf(n1)
    if (index > -1) {
        arr1.splice(index, 1)
    }
    return arr1
}
console.log(splice([1, 2, 3, 4, 5], 2));




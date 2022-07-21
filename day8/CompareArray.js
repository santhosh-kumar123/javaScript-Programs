function x() {
    let arr1 = [1, 2, 3, 4, 5]
    let arr2 = [1, 2, 3, 4, 5]
    let result = JSON.stringify(arr1) === JSON.stringify(arr2)
    
    if (result == true) {
        console.log("the array have same element");
    }
    else {
        console.log("the array have different element");
    }
}
x()
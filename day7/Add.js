let x = (a,b)=>{
    let arr = [1, 2, 3, 4, 5]
   arr.splice(a,0,b)
    console.log(arr);
}
x(3, 7)


let x1 = () => {
    let arr1 = [1, 2, 3, 4, 5]
    arr1.unshift(10)
    console.log(arr1);
}
x1()



// concat()
let x2 = () => {
    let arr2 = [1, 2, 3, 4, 5]
    arr2=[10].concat(arr2)
    console.log(arr2);
}
x2()



//spread operator
let x3 = () => {
    let arr3 = [1, 2, 3, 4, 5]
    arr2 = [10, ...arr3]
        console.log(arr2);
}
x3()



//splice
let x4 = () => {
    let arr4 = [1, 2, 3, 4, 5]
    arr5 = arr4.splice(0, 0, 10)
    console.log(arr4);
}
x4()


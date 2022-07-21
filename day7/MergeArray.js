let x = () => {
    let arr1=[1,2,3,4]
    let arr2 = [1, 2, 3, 4, 5]
    let arr3 = [...arr1, ...arr2]
    let arr4=[]
    for (let i = 0; i > arr1.length; i++){
        if (arr3[i].indexOf(i) === -1) {
            console.log(arr3);
        }
    }
    console.log(arr3);
}
x()

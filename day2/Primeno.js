let small = Number(prompt("enter small no"))
let large = Number(prompt("enter larger no"))
for (let i = small; i < large; i++){
    flag = 0;
    for (let j = 2; j < i; j++){
        if (i%j == 0) {               //3%2==0
            flag = 1
            break;
        }  
    }
    console.log(count);
    if (flag == 0 && i > 1) {
      // console.log(`the prime no in the range of ${small}to${large} are ${i}`);
      console.log(i);
    }
}
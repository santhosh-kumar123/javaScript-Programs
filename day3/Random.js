function guess() {
    let n1 = parseInt(prompt("enter the no"))
    let random = Math.floor(Math.random() * 10)+1
    while (n1!==random) {
        let n1 = parseInt(prompt("enter the no"));
        // console.log(`you not choose correct no ${n1}`);
    }
    if (n1 == random) {
        console.log(`you choose correct no ${n1}`);
    }
    else {
    console.log(`guess a correct number from 1 To 10 ${n1}`);
    }
}
guess()
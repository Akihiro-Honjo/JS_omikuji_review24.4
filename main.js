// while分
// 初期化処理;
// while(繰り返し処理){
    // 処理
    // 更新処理;
// }
let x = 0;

while(x < 5){
    console.log(`値は${x}です。`); //${x}変数を入れる場合はバッククォート
    x++;
}

// for分
// for(初期化処理; 繰り返し処理; 更新処理;){
//     処理
// }

// 九九
for(let y = 0; y < 5; y++){
    console.log(`値は${y}です。`);
}

for(let a =1; a < 10; a++){
    let row = "";
    for(let b = 1; b < 10; b++){
        row += `${a*b} `;
    }
    console.log(row);
}

// FizzBuzz
for(let number = 1; number < 101; number++){
    if(number % 15 === 0){
        console.log('FizzBuzz');
    } else if(number % 3 === 0){
        console.log('Fizz');
    } else if(number % 5 === 0){
        console.log('Buzz')
    } else{
        console.log(number);
    }
}
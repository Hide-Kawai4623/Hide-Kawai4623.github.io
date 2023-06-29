'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// const input = document.getElementById("input");
// let blueBox = document.getElementById('blueBox');

// const gatorbutton = document.getElementById("button");
// gatorbutton.addEventListener("click", button);

// function button(input){

//   // const result = [];
//   for (let i = 0; i < input; i++) {
    
//     let emoji = document.createElement("span");
//     emoji.id ="new";
//     emoji.innerHTML = "🐊";
//     bluebox.appendChild(emoji);
//   }
// }

    // var waniEmoji = document.createElement('span');
    // waniEmoji.innerHTML = '🐊';
    // blueBox.appendChild(waniEmoji);

//    result.push("🐊");
//   }
//   return result;
// }

// blueBox.appendChild(result);
// result.innerHTML = '🐊';

// const gatorbutton = document.getElementById("button");
// gatorbutton.addEventListener("click", button);


//⇒動かず

// const input = document.getElementById("input");
// let blueBox = document.getElementById('bluebox');

// const gatorbutton = document.getElementById("button");
// gatorbutton.addEventListener("click", button);

// function button(event) {
//   const count = input.value; // input要素の値を取得
//   for (let i = 0; i < count; i++) {
//     let emoji = document.createElement("span");
//     emoji.id = "new";
//     emoji.innerHTML = "🐊";
//     blueBox.appendChild(emoji);
//   }
// }

// ⇒連打すると残った。


const input = document.getElementById("input");
let blueBox = document.getElementById('bluebox');

const gatorbutton = document.getElementById("button");
gatorbutton.addEventListener("click", button);

function button(event) {
  const count = input.value; // input要素の値を取得
  blueBox.innerHTML = '';

  for (let i = 0; i < count; i++) {
    let emoji = document.createElement("span");
    emoji.id = "new";
    emoji.innerHTML = "🐊";
    blueBox.appendChild(emoji);
  }
}

//最終　動いた。

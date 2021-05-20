//変数の宣言
const dog_result = document.getElementById("dog_result");
const dog_btn = document.getElementById("dog_btn");

const dog_result2 = document.getElementById("dog_result2");
const dog_btn2 = document.getElementById("dog_btn2");

const dog_result3 = document.getElementById("dog_result3");
const dog_btn3 = document.getElementById("dog_btn3");

dog_btn.addEventListener('click', getRandomDog)
dog_btn2.addEventListener('click', getRandomDog2)
dog_btn3.addEventListener('click', getRandomDog3)

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        //ネットワーク越しにJSONファイルを取得する
        .then(res => res.json())
        .then(data => {
            //ランダムデータの中に動画拡張子が混じっているため、表示したくない拡張子ファイルを除く処理を行う
            if (data.url.includes('.mp4') || data.url.includes('.webm') || data.url.includes('.gif')) {
                getRandomDog()
            } else {
                //fetchで取得したいリソースへのパスのみをとり、レスポンスオブジェクトを含むpromiseを返す
                //dog_resultのdivボックス内にinnerHTMLを使ってimgに書き換える
                dog_result.innerHTML = `<img src="${data.url}"/>`
            }
        })
}

//fetch apiを別の書き方で書いてみる
async function getRandomDog2() {
    const res2 = await fetch('https://random.dog/woof.json')
    const data = await res2.json();
    if (data.url.includes('.mp4') || data.url.includes('.webm') || data.url.includes('.gif')) {
        getRandomDog2()
    } else {
        dog_result2.innerHTML = `<img src="${data.url}"/>`
    }
}

async function getRandomDog3() {
    const res3 = await fetch('https://random.dog/woof.json')
    const data = await res3.json();
    if (data.url.includes('.mp4') || data.url.includes('.webm') || data.url.includes('.gif')) {
        getRandomDog3()
    } else {
        dog_result3.innerHTML = `<img src="${data.url}"/>`
    }
}

//ドッグボタン１を押したときに音がなる
const button = document.getElementById('dog_btn'),
    audioArr = [
        'audio/1.mp3',
        'audio/2.mp3',
        // 'audio/3.mp3',  //長い
        'audio/4.mp3',
        'audio/5.mp3',
        'audio/6.mp3',
        'audio/7.mp3',
        'audio/8.mp3',
    ];

const playAudio = function () {
    var audio = new Audio(),
        num = Math.floor(Math.random() * audioArr.length);

    if (num == audioArr.length) {
        num = audioArr.length - 1;
    }
    audio.src = audioArr[num];
    audio.play();
}

button.addEventListener('click', function () {
    setTimeout(timer1, 1500); //1.5秒後に実行
    function timer1() {
        playAudio();
    }
}, false);

//ドッグボタン2を押したときに音がなる
const button2 = document.getElementById('dog_btn2'),
    audioArr2 = [
        'audio/2.mp3',
        'audio/4.mp3',
        'audio/6.mp3',
        'audio/9.mp3',
        'audio/10.m4a'
    ];

const playAudio2 = function () {
    var audio = new Audio(),
        num = Math.floor(Math.random() * audioArr2.length);

    if (num == audioArr2.length) {
        num = audioArr2.length - 1;
    }
    audio.src = audioArr2[num];
    audio.play();
}

button2.addEventListener('click', function () {
    setTimeout(timer1, 1500); //1.5秒後に実行
    function timer1() {
        playAudio2();
    }
}, false);

//ドッグボタン3を押したときに音がなる
const button3 = document.getElementById('dog_btn3'),
    audioArr3 = [
        'audio/13.mp3',
        'audio/14.mp3',
        'audio/15.mp3',
        'audio/16.mp3',
        'audio/17.mp3',
    ];

const playAudio3 = function () {
    var audio = new Audio(),
        num = Math.floor(Math.random() * audioArr3.length);

    if (num == audioArr3.length) {
        num = audioArr3.length - 1;
    }
    audio.src = audioArr3[num];
    audio.play();
}

button3.addEventListener('click', function () {
    setTimeout(timer1, 1500); //1.5秒後に実行
    function timer1() {
        playAudio3();
    }
}, false);



//犬のキーボード群
//Aキー

document.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
window.document.onkeyup = function (event) {
    ringLL();
}






// const button = document.getElementById('A'),
//     audio = 'audio/2.mp3',

// const playAudioA = function () {
//     var audio = new Audio(),

// button.addEventListener('click', function () {
//         playAudio();
// }
    
// const dog_result3 = document.getElementById("dog_result3");
//     const dog_btn3 = document.getElementById("dog_btn3");

//     dog_btn.addEventListener('click', getRandomDog)

//柴犬ランダムは挙動してくれない
// async function getRandomDog2() {
//     const res2 = await fetch('http://shibe.online/api/shibes?count=1')
//     console.log(res2);
//     const fox = await res2.json();
//     dog_result2.innerHTML = `<img src="${fox}"/>`
//     console.log(fox);
// }
//狐ランダムは挙動した
// async function getRandomDog2() {
//     const res2 = await fetch('https://randomfox.ca/floof/')
//     console.log(res2);
//     const fox = await res2.json();
//     dog_result2.innerHTML = `<img src="${fox.image}"/>`
//     console.log(fox);
// }

//何故か挙動しない
// async function getRandomDog2() {
//     const res2 = await fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
//     const shibe = await res2.json();
//     console.log(shibe);
// }

//何故か挙動しない
// function getRandomDog_2() {
//     fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
//         .then(res => res.json())
//         .then(data => {
//             dog_result2.innerHTML = `<img src="${data.url}"/>`
//         })
// }

// function getRandomDog_2() {
//     fetch('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false')
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (shibe) {
//             console.log(shibe);
//         })
// }
// axiosライブラリを呼び出す
// const axios = require('axios');

// // 実際にデータを取得する getRequest 関数
// async function getRequest() {
//     let response;
//     try {
//         response = await axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getRequest を呼び出してデータを読み込む
// getRequest();

    // function getRandomDog_2() {
    //     let mes = '';
    //     const resp = await axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
    //     const item = resp.data;
    //     mes = item[0];
    //     console.log(item[0]);
    //     console.log(item[1]);
    //     console.log(item[2]);
    // }
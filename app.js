let meme = document.querySelector(".meme");
let para = document.querySelector(".para");
let btn = document.querySelector(".btn");

let url = " https://meme-api.com/gimme";

btn.addEventListener("click", getMemes);

 async function getMemes() {
    let response = await fetch(url);
    let data = await response.json();
    

    meme.src = data.url;
    para.innerHTML = data.title

    
 } 


// let meme = document.querySelector(".meme");
// let para = document.querySelector(".para");
// let btn = document.querySelector(".btn");

// let url = "https://meme-api.com/gimme";

// btn.addEventListener("click", getMemes);

// async function getMemes() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();

//         // set meme image
//         meme.src = data.url;

//         // set meme title
//         para.innerHTML = data.title;

//     } catch (error) {
//         para.innerHTML = "Failed to load meme 😢";
//     }
// }
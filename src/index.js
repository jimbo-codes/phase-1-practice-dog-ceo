// let arr3 = [];
let doglist;
let testingarr;
let finalarr = [];
let initialinfo;
console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => { 
    render(data);
    })
fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(data => {
    addBreed(data);
    initialinfo = data;
    let doglist = document.getElementById('dog-breeds')
    // console.log(doglist.childNodes)
    testingarr = Array.from(doglist.childNodes)
})    

function checkin(){

}

})

let ulsec = document.getElementById('dog-breeds');
function addBreed(dogs){
    let list = Object.keys(dogs.message);
    list.forEach(dog => {
    let breed = document.createElement('ul')
    breed.textContent = dog;
    breed.id = dog;
    ulsec.append(breed);
    })
    // console.log(dogs.message)
for(dog in dogs.message){
    if(dogs.message[dog].length >1){
       for(diffs of dogs.message[dog]){
        let small = document.createElement('li')
        small.textContent = diffs
        small.className = 'red'
        let node = document.getElementById(dog);
        node.appendChild(small);
       }
    }
    else if(dogs.message[dog].length >0) {
        // this should be if 1 case, also make if greater than 1 case.
let small = document.createElement('li')
small.textContent = dogs.message[dog]
small.className = 'red'
let node = document.getElementById(dog);
node.appendChild(small);
    }
else {
}  
}
let html = document.getElementsByClassName('red');
// console.log(document.getElementsByClassName('red'));
let arr2 = Array.from(html);
// console.log(arr2);
for(element of html){
    element.addEventListener('click', color);
}
}

document.getElementById('breed-dropdown').addEventListener('change', () => {
//     fetch('https://dog.ceo/api/breeds/list/all')
finalarr = [];
// .then(resp => resp.json())
// .then(data => {
//     addBreed(data);
//     console.log(doglist.childNodes)
//     console.log(doglist)
//     testingarr = Array.from(doglist.childNodes)

// })
    let dropdown = document.getElementById('breed-dropdown')
    console.log(testingarr)
    testingarr.shift();
    console.log(testingarr)
    testingarr.filter(match)
    console.log(finalarr);
})
function match(word){
    // console.log(word.textContent.charAt(0));
    if(word.textContent.charAt(0) == document.getElementById('breed-dropdown').value){
        finalarr.push(word);
        word.style.display = 'block'
        // if you remove all and then rendered the ones that are correct this will work.
    }
    else {
console.log(word);
word.style.display = 'none'
        // word.remove();
    }
// console.log(finalarr)
// for(word of finalarr){
    
// console.log(finalarr[word.textContent]);
// }
// then push in your array and render those elements.
}
function color(e){
    e.target.style.color = 'red'
    // you could change the class to make that class styled as red always.
}
let container = document.querySelector('#dog-image-container');
function render(images) {
    images.message.forEach(image => {
        let element = document.createElement('img');
        element.src = image;
        container.append(element);    
    })
}



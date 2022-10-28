let all = ["images/air.jpg", "images/air2.jpg", "images/air3.jpg"]

const btnEl1 = document.querySelector("#btn1")
const btnEl2 = document.querySelector("#btn2")
const arrayEl = document.getElementById("array")

btnEl1.addEventListener("click", function(){
    for (let i =0; i < all.length; i++){
        let random = Math.floor( Math.random()*3 )
        console.log(all[random])
        arrayEl.innerHTML = `<img class="sneak" src="${all[random]}">`
    }
})

btnEl2.addEventListener("click", function(){
    for (let i =0; i < all.length; i++){
        let random = Math.floor( Math.random()*3 )
        console.log(all[random])
        arrayEl.innerHTML = `<img class="sneak" src="${all[random]}">`
    }
})
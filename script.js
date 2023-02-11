let car1 = document.querySelector(".car1")
let car2 = document.querySelector(".car2")
let score_html = document.getElementById("score")
let bet_html = document.getElementById("bet")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let white = document.getElementById("white")
let black = document.getElementById("black")
let winer = false
let score = 100
let bet = 0
let car_color = ""

// car1.style.marginLeft = "20%"

// let margin = 0
// let int = setInterval(() => {
//     let speed = Math.random()*0.1
//     margin += speed
//     car1.style.marginLeft = margin+"%"
//     margin>100?clearInterval(int):console.log("")
// }, 10);


// let margin2 = 0
// let int2 = setInterval(() => {
//     let speed = Math.random()*0.1
//     margin2 += speed
//     car2.style.marginLeft = margin2+"%"
//     margin2>100?clearInterval(int2):console.log("")
// }, 10);

score_html.innerHTML = score
bet_html.innerHTML = bet
plus.onclick = () => {
    if (score > bet){
        bet += 10
        bet_html.innerHTML = bet
    }
    
}

minus.onclick = () => {
    if (bet > 0){
        bet -= 10
        bet_html.innerHTML = bet
    }
}

let car_sp = (car,color) => {
    let margin = 0
    let int = setInterval(() => {
        let speed = Math.random()*0.1
        margin += speed
        car.style.marginLeft = margin+"%"
        if (margin > 100){
            winer = true
            if (color == car_color){
                score += bet*2
                score_html.innerHTML = score
            }
        }
        winer == true?clearInterval(int):console.log("")
        
    }, 10);

}
let start = (color) => {
    winer = false
    car_color = color
    score -= bet
    score_html.innerHTML = score
    car_sp(car1,"white")
    car_sp(car2,"black")
}




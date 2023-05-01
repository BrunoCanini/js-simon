function numberRandom (){
    return Math.round(Math.random() * 100);
}

let contenitore = document.getElementById("container")

const btnStart = document.getElementById("btnHtml")
btnStart.addEventListener("click" , function(){

    let box;

    let listaBox = []

    for (let i = 0; i < 5; i++) {
    
        let number = numberRandom()
        listaBox.push(number)
        console.log(number)

        box = document.createElement("div");
        box.classList.add("square");
        box.innerText = number
        contenitore.append(box)

    }

    let secondi = 3
    let timer = setInterval( function(){
        
        if(secondi === 0){
            clearInterval(timer)
            box.classList.add("invisible");
        } else{
            console.log(secondi)
            secondi--
        }

    }, 1 * 1000)


})
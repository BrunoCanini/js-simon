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

    let secondForInvisible = 3
    let secondToPrompt = 4

    let timer = setInterval( function(){
        
        if(secondForInvisible === 0){
            clearInterval(timer)
            contenitore.classList.add("invisible");
        } else{
            console.log(secondForInvisible)
            secondForInvisible--
        }

    }, 1 * 1000)

    let timer2 = setInterval( function(){
        
        if(secondToPrompt === 0){
            clearInterval(timer2)
            let prom = prompt("inserisci i numeri ")
        } else{
            console.log(secondToPrompt)
            secondToPrompt--
        }

    }, 1 * 1000)


})
// Make h1 autotext
const text = "Hallo, ich bin Nico Faßbender.";
let index = 0;

function headlineAutoTxt(){
    document.getElementById("autotext").innerHTML = text.slice(0, index);

    index++;

    /*if(index > text.length){
        index = 0;
    }*/
    
}

setInterval(headlineAutoTxt, 50);


// popup skills

/*const open = document.getElementById("skill-icon");
const close = document.getElementById("skill-icon");
const container = document.getElementById("skill-icon");

open.addEventListener("click", () => {
    container.classList.add("active");
})*/

/*document.getElementById("skill-icon").addEventListener("click", skillFunc);

function skillFunc() {
  /*alert ("Hello World!");
  container.classList.add("active");
}*/

const revealBtn = document.querySelector('.fa-code');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){

    if(hiddenContent.classList.contains('fa-code')
    ){
        hiddenContent.classList.remove('fa-code');
    } else {
        hiddenContent.classList.add('fa-code');
    }

}

revealBtn.addEventListener('click', revealContent);

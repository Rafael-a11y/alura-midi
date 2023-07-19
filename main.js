
function tocarSom(audio)
{
    const som = document.querySelector(`#som_${audio}`);
    if(som != null && som.localName === "audio") som.play();
    else console.log("Elemento não é um audio ou não existe");
    
}
function estilo()
{
    listaTeclas[8].style.backgroundColor = "red";
}


const listaTeclas = document.querySelectorAll('.tecla');
const listaAudios = document.querySelectorAll('#som_tecla_pom');
// const corpo = document.querySelector(".teclado").setAttribute("class", "numpad");

for(let i = 0; i < listaTeclas.length; i++)
{
    const audio = listaTeclas[i].classList[1];
    listaTeclas[i].onclick = function () {tocarSom(audio);};
    listaTeclas[i].onkeydown = function (evento) 
    {
        console.log("keyCode: " + evento.keyCode + "\ncode: " + evento.code);
        if(evento.code === 'Space' || evento.code === 'Enter')
        {
            listaTeclas[i].classList.add('ativa');
        }
    }
    listaTeclas[i].onkeyup = function () {listaTeclas[i].classList.remove('ativa');} 
}




  



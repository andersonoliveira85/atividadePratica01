
const iframe = document.querySelector('iframe');
document.querySelector(".novo").style.visibility = "hidden";

//fechar
document.querySelector('.fechar').addEventListener('click', function(){
    iframe.src= "about:blank";
    document.querySelector(".fechar").style.visibility = "hidden";
    document.querySelector(".novo").style.visibility = "visible";

})

//novo
document.querySelector('.novo').addEventListener('click', function(){
    document.querySelector(".novo").style.visibility = "hidden";
    document.querySelector(".fechar").style.visibility = "visible";
    iframe.src = "./paginainicial.html";
    document.querySelector('.url_text').innerHTML = "https://";

})

//detalhes
document.querySelector('#barras').addEventListener('click', function(){
    iframe.src = "detalhes.html";
    
})

//botao navegar
document.querySelector('.ir').addEventListener('click', function(){
    
    iframe.src = document.querySelector('#url input').value;
    document.querySelector(".novo").style.visibility = "hidden";
    document.querySelector(".fechar").style.visibility = "visible";
})


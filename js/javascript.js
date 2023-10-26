document.getElementById('btnFactorial').addEventListener('click', function(){
    let num=parseInt(document.getElementById('numero').value);
    let factorial=1;
    let resultadoElement=document.getElementById('resultado');

    for (let index = 2; index <= num; index++) {
        factorial= factorial*index;
       
    }
    resultadoElement.textContent=(factorial)

    if(isNaN(num)|| num===''){
        document.getElementById('invalido').style.display='block';
        setTimeout(function(){
            document.getElementById('invalido').style.display='none';
        }, 3500);
    }

});

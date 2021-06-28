import cipher from './cipher.js';

document.getElementById('enter').addEventListener('click', enterBotton);

function enterBotton () {
    const usuario = document.getElementById('user').value;
    if (usuario.length==0){
        alert('ingrese usuario')}
        else if (usuario.length>=13) {
            alert('ingrese nuevamente su usuario')}
            else if (usuario.length>=3 || usuario.length<=12){
                document.getElementById('welcomeText').innerHTML = 'Hola, '+ usuario +'.Estamos felices de tenerte con nosotros. No tienes mensajes nuevos.'
                document.getElementById('register').style.display = 'none';
                document.getElementById('exit').style.display = 'block';
                document.getElementById('root').style.display ='block';
                }
}

document.getElementById('exit1').addEventListener('click', exitBotton );

function exitBotton () {
    document.getElementById('register').style.display = 'block';
    document.getElementById('exit').style.display = 'none';
    document.getElementById('root').style.display = 'none';
    document.getElementById('returnPage').style.display = 'none';
    document.getElementById('encrypt').style.display = 'none';
    document.getElementById('encrypt2').style.display = 'none';
}

document.getElementById('cipher1').addEventListener('click', cipher1Botton );

function cipher1Botton () {
    document.getElementById('encrypt').style.display = 'block';
    document.getElementById('root').style.display = 'none';
    document.getElementById('returnPage').style.display = 'block';
    document.getElementById('copy').style.display = 'none';
}

document.getElementById('cipher2').addEventListener('click', cipher2Botton );

function cipher2Botton () {
    document.getElementById('encrypt2').style.display = 'block';
    document.getElementById('root').style.display = 'none';
    document.getElementById('returnPage').style.display = 'block';
    document.getElementById('encrypt').style.display = 'none';
}



function returnBotton () {
    document.getElementById('root').style.display = 'block';
    document.getElementById('encrypt2').style.display = 'none';
}
document.getElementById('return').addEventListener('click', returnBotton );

function returnBotton2 () {
    document.getElementById('root').style.display = 'block';
    document.getElementById('encrypt').style.display = 'none';
}

document.getElementById('return2').addEventListener('click', returnBotton2);

document.getElementById('cipher').addEventListener('click', cifrar);

function cifrar() {
    const myText1 = document.getElementById('cipherText').value;
    const offset = document.getElementById('offset').value;
    cipher.encode( myText1, offset);
 }

 document.getElementById('decipher').addEventListener('click', decifrar);

 function decifrar() {
    const myText2= document.getElementById('decipherText').value;
    const offset = document.getElementById('offset').value;
    cipher.decode( myText2, offset);
 }
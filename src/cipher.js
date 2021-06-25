const cipher = {
    encode: function ( myText1 , offset ) {
        let cesarText = '';
        for ( let i = 0; i <myText1.length; i++ ) {
            const text = myText1[i];
            const letter = text.toUpperCase();
            const numberLetter = letter.charCodeAt(0);
            if (numberLetter>= 65 && numberLetter<=90){              
                const cesar = (parseInt(numberLetter-65)+parseInt(offset))%26+65;
                const ascii = String.fromCharCode(cesar);
                cesarText += ascii;             
                }                           
            }
            document.getElementById('textEncrypted').innerHTML = cesarText;
        }
    }

        

    // decode: function (offset, text ) {
    //     console.log( 'decode', offset , text );


export default cipher;
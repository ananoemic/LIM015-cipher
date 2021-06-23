const cipher = {
    encode: function ( encodeText ) {
        // console.log('encode', offset, text);
        // const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let finalString = "";

        for (let i = 0; i <encodeText.length; i++) {
            const letterPosition = encodeText.charCodeAt[i];
            if (letterPosition>=65 && letterPosition<= 90) {
                // let asciiNumber = ((upperText.charCodeAt(0)-65+offset)%26)+65;
                finalString += String.fromCharCode((letterPosition-65+2)%26+65);
            }
        
        }   return finalString;
    }

};

    // decode: function (offset, text ) {
    //     console.log( 'decode', offset , text );
   

export default cipher;
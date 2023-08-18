const plaintext = 'jafferson oliveira';
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const k = 2

function encrypt(p_text: string, k: number): string{
    let c_text = ''
    for (let i = 0; i < p_text.length; i++){
        let p_char = p_text[i];
        let index_alphabeth = alphabet.search(p_char);
        let c_char = (index_alphabeth === -1) ? p_char : alphabet[index_alphabeth+k];
        c_text+=c_char;
    }
    return c_text;
}

const ciphertext = encrypt(plaintext, 2);
console.log(plaintext);
console.log(ciphertext);





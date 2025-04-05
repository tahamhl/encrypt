/**
 * Temel Şifreleme Algoritmaları
 * @author Taha Mehel
 */

// Caesar Şifreleme
function encryptCaesar(text, shift) {
    return text
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                const isUpperCase = code >= 65 && code <= 90;
                const base = isUpperCase ? 65 : 97;
                return String.fromCharCode(((code - base + shift) % 26) + base);
            }
            return char;
        })
        .join('');
}

// Caesar Şifre Çözme
function decryptCaesar(text, shift) {
    return encryptCaesar(text, 26 - (shift % 26));
}

// Vigenère Şifreleme
function encryptVigenere(text, key) {
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char.match(/[a-z]/i)) {
            const isUpperCase = char === char.toUpperCase();
            const base = isUpperCase ? 65 : 97;
            const keyChar = key[keyIndex % key.length].toUpperCase();
            const shift = keyChar.charCodeAt(0) - 65;
            
            result += String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

// Vigenère Şifre Çözme
function decryptVigenere(text, key) {
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char.match(/[a-z]/i)) {
            const isUpperCase = char === char.toUpperCase();
            const base = isUpperCase ? 65 : 97;
            const keyChar = key[keyIndex % key.length].toUpperCase();
            const shift = keyChar.charCodeAt(0) - 65;
            
            result += String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

// ROT13 Şifreleme (Caesar şifrelemenin özel bir hali)
function rot13(text) {
    return encryptCaesar(text, 13);
}

// Base64 Kodlama
function base64Encode(text) {
    return btoa(text);
}

// Base64 Çözme
function base64Decode(text) {
    return atob(text);
}

// Dışa aktarma
module.exports = {
    encryptCaesar,
    decryptCaesar,
    encryptVigenere,
    decryptVigenere,
    rot13,
    base64Encode,
    base64Decode
}; 
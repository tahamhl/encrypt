const {
    encryptCaesar,
    decryptCaesar,
    encryptVigenere,
    decryptVigenere,
    rot13,
    base64Encode,
    base64Decode
} = require('./encryption');

// Test metni
const testText = "Merhaba Dünya!";
const vigenereKey = "ANAHTAR";

console.log("Orijinal Metin:", testText);

// Caesar Şifreleme Testi
const caesarEncrypted = encryptCaesar(testText, 3);
console.log("\nCaesar Şifreleme (shift=3):");
console.log("Şifreli:", caesarEncrypted);
console.log("Çözülmüş:", decryptCaesar(caesarEncrypted, 3));

// Vigenère Şifreleme Testi
const vigenereEncrypted = encryptVigenere(testText, vigenereKey);
console.log("\nVigenère Şifreleme (key=ANAHTAR):");
console.log("Şifreli:", vigenereEncrypted);
console.log("Çözülmüş:", decryptVigenere(vigenereEncrypted, vigenereKey));

// ROT13 Testi
const rot13Encrypted = rot13(testText);
console.log("\nROT13 Şifreleme:");
console.log("Şifreli:", rot13Encrypted);
console.log("Çözülmüş:", rot13(rot13Encrypted)); // ROT13 kendisinin tersidir

// Base64 Testi
const base64Encrypted = base64Encode(testText);
console.log("\nBase64 Kodlama:");
console.log("Kodlanmış:", base64Encrypted);
console.log("Çözülmüş:", base64Decode(base64Encrypted)); 
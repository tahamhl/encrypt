# Şifreleme Algoritmaları

Bu repo, çeşitli şifreleme algoritmalarının JavaScript implementasyonlarını içermektedir. Bu algoritmalar, metin şifreleme ve şifre çözme işlemleri için kullanılmaktadır.

## Canlı Demo

Bu algoritmaların çalışan bir demosunu görmek ve test etmek için [tahamehel.tr/encrypt](https://tahamehel.tr/encrypt) adresini ziyaret edebilirsiniz.

## Kullanılan Algoritmalar

- Sezar Şifreleme
- Vigenère Şifreleme
- Base64 Kodlama/Çözme

## Kurulum

```bash
# Repoyu klonlayın
git clone https://github.com/[kullanıcı-adınız]/encrypt

# Proje dizinine gidin
cd encrypt

# Test kodunu çalıştırın
npm test
```

## Kullanım Örnekleri

### Caesar Şifreleme
```javascript
const { encryptCaesar, decryptCaesar } = require('./encryption');

const metin = "Merhaba";
const kaydirmaMiktari = 3;

const sifreliMetin = encryptCaesar(metin, kaydirmaMiktari);
console.log(sifreliMetin); // "Phukded"

const cozulmusMetin = decryptCaesar(sifreliMetin, kaydirmaMiktari);
console.log(cozulmusMetin); // "Merhaba"
```

### Vigenère Şifreleme
```javascript
const { encryptVigenere, decryptVigenere } = require('./encryption');

const metin = "Merhaba";
const anahtar = "ANAHTAR";

const sifreliMetin = encryptVigenere(metin, anahtar);
const cozulmusMetin = decryptVigenere(sifreliMetin, anahtar);
```

### Base64 Kodlama
```javascript
const { base64Encode, base64Decode } = require('./encryption');

const metin = "Merhaba";
const kodlanmisMetin = base64Encode(metin);
const cozulmusMetin = base64Decode(kodlanmisMetin);
```

## Lisans

MIT

## İletişim

Daha fazla bilgi ve iletişim için [tahamehel.tr](https://tahamehel.tr) adresini ziyaret edebilirsiniz. 
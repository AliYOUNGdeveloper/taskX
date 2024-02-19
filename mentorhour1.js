const PhoneNumber = '+994558921966';
const NationalPhoneIndexReplacer = PhoneNumber.replaceAll('+994','AZE - ');
const CharacterReplacer = NationalPhoneIndexReplacer.replaceAll('1966','xxxx')
console.log(CharacterReplacer);
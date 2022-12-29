// EXO : NO BAD


let sentences = 'This platform is not so bad, I like it'

console.log('------- Le contenu de ma variable sentences ------------')
console.log(sentences)
console.log('--------------------------------------------------------')


let wordNot = sentences.indexOf('not')
console.log('---- la valeur de worNot est ---------------------------')
console.log(wordNot)
console.log('--------------------------------------------------------')


let wordBad = sentences.indexOf('bad')
console.log('---- la valeur de wordBad est --------------------------')
console.log(wordBad)
console.log('--------------------------------------------------------')


if(wordNot < wordBad){
var good_sentences = sentences.replace('not so bad' , 'good')
}

console.log('--- Lorsque bad vient après not on a ------------------')
console.log(good_sentences)
console.log('-------------------------------------------------------')

if(wordBad<wordNot || (wordBad == -1 && wordNot ==-1)){
console.log('-------- lorsque bad ne vient pas après not -----------')
console.log(sentences)
console.log('-------------------------------------------------------')
}
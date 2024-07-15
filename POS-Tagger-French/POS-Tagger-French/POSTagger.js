//required libraries for POS tagging in french
const nlp = require('compromise') //=> nlp here stands for natural language processing

//function to perform POS Tagging in french
const tagPOS = (sentence) => {

    const doc = nlp(sentence);
    
    const taggedWords = doc.out('tags');
    return taggedWords;
}

//example usage

const sentence = "Je suis Indien"
const taggedSentence = tagPOS(sentence);
console.log(taggedSentence);

//testing of bulk data
const bulkData = [
   'Mon nom est Pranavi',
   'Je Suis Indien',
   'Je habite en Nizampet',
   'My name is pranavi',
   'Nous avons indiens'

]

for (const individualData of bulkData) {
    const taggedSentence = tagPOS(individualData);
    console.log (`POS tagging in ${individualData}`, taggedSentence)
}
//importing the library required for performing NER
const natural = require('natural');

// used for collecting the entire sentence and breaking it down into the individual details
const tokenizer = new natural.WordTokenizer();

//this is a default instance of the natural javascript library wich is used for training and classification
const classifier = new natural.BayesClassifier();

//training data to be defined for NER
classifier.addDocument('John Doe','person');
classifier.addDocument('XYZ Corporation is a leading tech company','organization');
classifier.addDocument('ABC','company');

//training the classifier info
classifier.train();

//writing a function for performing the required NER for a given text
const performNER = (text) => {
    const namedToken = tokenizer.tokenize(text);
    const entities = [];
    for (const token of namedToken) {
        const label = classifier.classify(token);
        if(label !== 'none') {
            const entity = {
                start: text.indexOf(token),
                end: text.indexOf(token) + token.length,
                type: label,
                text: token
            };
            entities.push(entity)
        }
        return entities
    }
}

//sample usage
const sample = 'Tom Holland a.k.a Spiderman is a supeHero in Marvel Cinematic Universe.';
const entities = performNER(sample);
console.log(`Entities in ${sample}`);

//for a bulk data we can perform the following by declaring an array

const bulkData = [
    'Bruce Wayne a.k.a Batman is a software engineer at ABC Corporation.',
    'ABC corporation is a leading Tech Company',
    'RamCharan nex movie is Game Changer directed by Shankar'
]

for (const individualData of bulkData) {
  const entities = performNER(individualData);
  console.log(`Entities in ${individualData}`,entities) 
}
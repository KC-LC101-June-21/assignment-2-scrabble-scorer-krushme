// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	oldWord = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < oldWord.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(oldWord[i])) {
			letterPoints += `Points for '${oldWord}': ${pointValue}`;
		 }
 
	  }
	}
  console.log(`finalScore:${letterPoints}`);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
scrabbleInput = ""
function initialPrompt() {
  scrabbleInput = input.question(`Let's play some scrabble!
  \n
Enter a word to score: `);

return scrabbleInput;

}

function simpleScore(word){
let letterPoints = word.length;

console.log(`Score for '${scrabbleInput}': ${letterPoints}`);
return letterPoints;
 
}


function vowelBonusScore(word){
wordArray = word.toLowerCase().split("");
let vowels = ["a", "e", "i", "o", "u"];
let vowelPoint = 3;
let consonantPoint = 1;
let finalScore = 0;

wordArray.forEach(letter => {
   if (vowels.includes(letter)) {
    finalScore += vowelPoint;
  } else {
    finalScore += consonantPoint;
  }
}); 
  console.log(`Score for '${scrabbleInput}': ${finalScore}`);
return finalScore;
}


function scrabbleScore(word) {
	simpleWord = word.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
   letterPoints += newPointStructure[simpleWord[i]] 

  }

  console.log(`Score for '${simpleWord}': ${letterPoints}`);
	return letterPoints;
  }

let simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
};

let vowelBonusScoreObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction:vowelBonusScore
};

let scrabbleScoring = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction:scrabbleScore
};

const scoringAlgorithms = [simpleScoreObject, vowelBonusScoreObject, scrabbleScoring];

function scorerPrompt() {
  let selectedAlgorithm = input.question(`Which scoring algorithm would you like to use?
  \n
  0 - Simple: ${scoringAlgorithms[0].description}\n
  1 - Vowel Bonus: ${scoringAlgorithms[1].description}\n
  2 - Scrabble: ${scoringAlgorithms[2].description}\n
  Enter 0, 1, or 2: `);
  while(selectedAlgorithm > 2 || selectedAlgorithm < 0 || isNaN(selectedAlgorithm)) {
  selectedAlgorithm = input.question('INCORRECT!, please select 0, 1, or 2:');
}

//  if (Number(selectedAlgorithm) === 0) {
//    return simpleScrabbleScorer(scrabbleInput);
//  } else if (Number(selectedAlgorithm) === 1){
//    return vowelBonusScorer(scrabbleInput);
//  } else if (Number(selectedAlgorithm) === 2) {
//    return scrabbleScorer(scrabbleInput);
//  } else {
//    console.log(`try again`)
//  }


  return scoringAlgorithms[Number(selectedAlgorithm)];
}




function transform(oldPointStructure) {
  const newPointStructure = {};
  
  Object.keys(oldPointStructure).forEach(score => { oldPointStructure[score].forEach(letter => {
    newPointStructure[letter.toLowerCase()] = Number(score);
   });
  });
  // console.log(newPointStructure)
return newPointStructure;
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
  //  scorerPrompt();
   let scoringObject = scorerPrompt();
   scoringObject.scoringFunction(scrabbleInput);
  // console.log(scoringObject);
}
// simpleScore.scoringFunction(scrabbleInput)
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


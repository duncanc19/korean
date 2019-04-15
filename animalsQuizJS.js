
var score = 0;
var maxScore = 0;

var translation;
function prompting(word) {
	translation = prompt("Write the Korean word in English: " + word);
	return translation;
}

function wordCheck(word, englishWord, englishWord2) {
	if (prompting(word) === englishWord || translation === englishWord2) {
		score += 1;
		maxScore += 1;
		alert("That's correct! Well done!\nScore: " + score + "/" + maxScore);
		
	} else {
		maxScore += 1;
		alert("Unlucky, it was " + englishWord + "\nScore: " + score  + "/" + maxScore)
	}
}

wordCheck("동물", 'animal', 'animals')
wordCheck("개", 'dog', 'dogs')
wordCheck("고양이", 'cat', 'cats')
wordCheck("새", 'bird', 'birds')
wordCheck("말", 'horse', 'horses')
wordCheck("소", 'cow', 'cows')
wordCheck("쥐", 'mouse', 'mice')
wordCheck("원숭이", 'monkey', 'monkeys')
wordCheck("돼지", 'pig', 'pigs')
wordCheck("코끼리", 'elephant', 'elephants')
wordCheck("기린", 'giraffe', 'giraffes')
wordCheck("염소", 'goat', 'goats')
wordCheck("사슴", 'deer')

function result(comment) {
	alert("You got " + score + "! " + comment + "!")
}

if (score === 13) {
	result("You're incredible")
} else if (score >= 10) {
	result("Nice work")
} else if (score >= 6) {
	result("Not bad")
} else if (score < 6) {
	result("You need to work harder")
}

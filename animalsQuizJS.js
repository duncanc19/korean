
var score = 0;

function prompting(word) {
	return prompt("Write the Korean word in English: " + word);
}

function wordCheck(word, englishWord) {
	if (prompting(word) === englishWord) {
		score += 1;
	};
}

wordCheck("동물", 'animal' || 'animals')
wordCheck("개", 'dog' || 'dogs')
wordCheck("고양이", 'cat' || 'cats')
wordCheck("새", 'bird' || 'birds')
wordCheck("말", 'horse' || 'horses')
wordCheck("소", 'cow' || 'cows')
wordCheck("쥐", 'mouse' || 'mice')
wordCheck("원숭이", 'monkey' || 'monkeys')
wordCheck("돼지", 'pig' || 'pigs')
wordCheck("코끼리", 'elephant' || 'elephants')
wordCheck("기린", 'giraffe' || 'giraffes')
wordCheck("염소", 'goat' || 'goats')
wordCheck("사슴", 'deer')


alert(score); 
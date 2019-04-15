
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

wordCheck("가족", 'family')
wordCheck("부모님", 'parents', 'parent')
wordCheck("아버지", 'father', 'dad')
wordCheck("어머니", 'mother', 'mum')
wordCheck("조부모님 ", 'grandparents', 'grandparent')
wordCheck("할머니", 'grandmother', 'grandma')
wordCheck("할아버지", 'grandfather', 'grandad')
wordCheck("older sister (for girls)", '언니')
wordCheck("older brother (for girls)", '오빠')
wordCheck("older sister (for boys)", '누나')
wordCheck("older brother (for boys)", '형')
wordCheck("남동생", 'younger brother')
wordCheck("여동생", 'younger sister')
wordCheck("부인", 'wife')
wordCheck("남편", 'husband')
wordCheck("친척", 'relatives')
wordCheck("사촌", 'cousin', 'cousins')

function result(comment) {
	alert("You got " + score + "! " + comment + "!")
}

if (score === maxScore) {
	result("You're incredible")
} else if (score >= 10) {
	result("Nice work")
} else if (score >= 6) {
	result("Not bad")
} else if (score < 6) {
	result("You need to work harder")
}

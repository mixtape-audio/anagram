var anagram = require ('../lib/anagram');

// initialize the dictionary and find anagrams
anagram.init('../dict/twl06.js', function(err) {
    if (err) console.log(err);
    anagram.findAnagrams('dog', function(err, anagrams) {
    	console.log('`%s`: found %d anagrams', 'dog', anagrams.count);
    	console.log(anagrams);
    });
	anagram.findAnagrams('anagram', function(err, anagrams) {
		console.log('`%s`: found %d anagrams', 'anagram', anagrams.count);
	});
	anagram.findAnagrams('retina??', function(err, anagrams) {
		console.log('`%s`: found %d anagrams', 'retina??', anagrams.count);
	});
});
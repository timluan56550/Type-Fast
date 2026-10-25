//helps load in the images so it doesnt lag
const images = [
'images/buttons/hovered/easyHovered.png',
  'images/buttons/hovered/mediumHovered.png',
  'images/buttons/hovered/hardHovered.png',
  'images/buttons/hovered/phraseHovered.png',
  'images/buttons/hovered/wordsHovered.png',
  'images/buttons/hovered/darkHovered.png',
  'images/buttons/hovered/lightHovered.png',
  'images/buttons/hovered/terraHovered.png',
  'images/buttons/hovered/outsideHovered.png',
  'images/arrow.png'
]
images.forEach((src) => {
  const img = new Image();
  img.src = src;
})



//gives a random item in the bank
function randomBank(){
//Picks a random number based on the length of the list
const randomBankIndex=Math.floor(Math.random()*bank.length)
console.log(randomBankIndex)
return bank[randomBankIndex]
}
function randomWordBank(){
    const wordCount=10;
    let wordPhrase=[];
    for(let x=0; x<wordCount; x++){
        const randomWordIndex=Math.floor(Math.random()*wordBank.length)
        wordPhrase.push(wordBank[randomWordIndex])
    }
    //combines them into a single sentence seperated by a space
return wordPhrase.join(" ")
}


const bank=[
"The quick brown fox jumps over the lazy dog.",
"Real green grass grows gigantically against giant, glistening, greenhouses.",
"terra terra terra terra TERRA terra terra.",
"Here is a challenge: jEweLrY 659182 -_=^#* IllIliIlil PZpPKpZPkP.",
"`1234567890-= ~!@#$%^&*()_+ qwertyuiop[]\\ QWERTYUIOP{}| asdfghjkl;' ASDFGHJKL:\" zxcvbnm,./ ZXCVBNM<>?",
"Six sleek swans swam swiftly southwards.",
"Peter Piper picked a peck of pickled peppers.",
"Rubber baby buggy bumpers bounce brightly.",
"Fresh fried fish, fish fresh fried, fried fish fresh.",
"The only way to do great work is to love what you do.",
"In the middle of difficulty lies opportunity.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"To be, or not to be, that is the question.",
"Do what you can, with what you have, where you are.",
"Franz jagt im komplett verwahrlosten Taxi quer durch Bayern",
"Minimum aluminum fulfillment columns usually manipulate multi-million municipal minimums.",
"\"Wait!\" she shouted, \"Did you actually say, 'The project is 99.9% complete'?\"",
"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
"We saw eight smart cats swim swiftly across a vast, rough, western sea surface.",
"(o_o) (x_x) (>_<) (^_^) (:-P) [-_-] <O_o>",
"(-_-;)~* (='.'=) /(-_-)\\ (T_T) (..;)~!",
"\\o/ \\o/ *~=>(:::) d(-_-)b (>_>)",
"( ? _ ? ) (=^._.^=) \\('0')/ <(*_*<)",
"Learning to type fast requires consistent practice every single day.",
"Keep your fingers relaxed on the home row keys for optimal speed.",
"Consistency is much more important than raw speed when building accuracy.",
"The library was quiet, except for the soft sound of rain outside."


]
//top 500 most common english words got it from https://www.smart-words.org/500-most-commonly-used-english-words.html
const wordBank=[
    "the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they",
  "be", "at", "one", "have", "this", "from", "or", "had", "by", "hot", "but", "some", "what", "there", "we", "can", "out", "other", "were", "all",
  "your", "when", "up", "use", "word", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then",
  "them", "would", "write", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come",
  "did", "my", "sound", "no", "most", "number", "who", "over", "know", "water", "than", "call", "first", "people", "may", "down", "side", "been", "now", "find",
  "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every",
  "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "much", "great", "think", "say", "help", "low", "line", "before", "turn", "cause",
  "same", "mean", "differ", "move", "right", "boy", "old", "too", "does", "tell", "sentence", "set", "three", "want", "air", "well", "also", "play", "small", "end",
  "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men",
  "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth",
  "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four",
  "thought", "let", "keep", "eye", "never", "last", "door", "between", "city", "tree", "cross", "since", "hard", "start", "might", "story", "saw", "far", "sea", "draw",
  "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "stop", "open", "seem", "together", "next", "white", "children", "begin",
  "got", "walk", "example", "ease", "paper", "often", "always", "music", "those", "both", "mark", "book", "letter", "until", "mile", "river", "car", "feet", "care",
  "second", "group", "carry", "took", "rain", "eat", "room", "friend", "began", "idea", "fish", "mountain", "north", "once", "base", "hear", "horse", "cut", "sure",
  "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird",
  "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "state", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete",
  "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "farm", "top", "whole", "king", "size", "heard", "best",
  "hour", "better", "true", "during", "hundred", "am", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "five", "sing", "listen", "six",
  "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve",
  "appear", "road", "map", "science", "rule", "govern", "pull", "cold", "notice", "voice", "fall", "power", "town", "fine", "certain", "fly", "unit", "lead", "cry",
  "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain",
  "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "sleep", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail",
  "produce", "fact", "street", "inch", "lot", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island",
  "foot", "yet", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "age", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game",
  "shape", "yes", "hot", "miss", "brought", "heat", "snow", "bed", "bring", "sit", "perhaps", "fill", "east", "weight", "language", "among"
]

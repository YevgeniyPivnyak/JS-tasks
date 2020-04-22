var mainText = prompt("Please, enter text.");
var keyWords = prompt("Please, enter words to find.");

// transforms original strings into array
var wordsArray = mainText.split(" ");
var keyWordsArray = keyWords.split(",");

/**
 * calculates how many times words are found in a string
 * @param {array of word} wordsArray 
 * @param {array of word to find} keyWordsArray 
 * @returns {object} key: amount
 */
function counter (wordsArray,keyWordsArray){
    
    var amount1 = "";
    var amount2 = "";
    
    for(var word of wordsArray){
        if(keyWordsArray[0]===word){
            amount1++;
        } else if(keyWordsArray[1]===word){
            amount2++;
        }
    }
   return {
       firstWord: amount1,
       secondWord: amount2,
   }
}

var rez = counter (wordsArray,keyWordsArray);

var elem = document.getElementById("container");
elem.innerHTML = `<p>${keyWordsArray[0]}: ${rez.firstWord}</p>
                  <p>${keyWordsArray[1]}: ${rez.secondWord}</p>`;
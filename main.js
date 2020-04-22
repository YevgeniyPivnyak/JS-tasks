var ferstStep = "Text text 12 text text text. Text text text text text text text text. Text text text text 32 text text text.";
// transforms original string into array
var mainArray = ferstStep.split(" ");
/**
 *  create HTML from array of string
 * @param {array of string} textArray 
 * @returns {string + tags} 
 */
function createHTML(textArray){
    var myHTML = "";
    for(item of textArray){
        if(item^0 === item){
            myHTML += `<b>${item}</b> `;
        }else if(item[0].toUpperCase() === item.slice(0,1)){
            myHTML += `<p>${item} `;
        } else if(item[item.length-1] === "."){
            myHTML += `${item}</p>`;
        } else {
            myHTML += `${item} `;
        }
      }
    return myHTML;
}

var html = createHTML(mainArray);
var elem = document.getElementById('container');
elem.innerHTML = html;


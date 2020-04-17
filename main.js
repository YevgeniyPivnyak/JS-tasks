var firstStep = prompt("Please enter Names, then / and pattern. Without using space!");

var mainArray = firstStep.split(',');

var names = mainArray.slice(0,mainArray.length-1);

var Pattern1 = mainArray.slice(mainArray.length-1);
var Pattern2 = Pattern1[0];
var Pattern3 = Pattern2.split('/');

names.push(Pattern3[0]);

var Pattern4 = "";
for (var i in Pattern2){
   
    if(Pattern2[i] != "$" && 
    Pattern2[i] != "<" &&
    Pattern2[i] != ">" &&
    Pattern2[i] != "p" &&
    Pattern2[i] != "b" &&
    Pattern2[i] != "/" 
    ) continue;
    Pattern4 += Pattern2[i];
}

var pattern = Pattern4.slice(1);

function getPattern(pa){
var myPattern5 = pa.split('$')
return myPattern5;
}

var Pattern = getPattern(pattern);

var startTag = Pattern[0];
var lastTag = Pattern[1];

function creatorHTML (data,st,lt){
    var stringHTML = "";
    for (var items of data){
        stringHTML +=`${st}${items}${lt}`
    }
    return stringHTML;
}

var html = creatorHTML(names,startTag,lastTag);
var elem = document.getElementById('names-container');

elem.innerHTML = html;
var firstStep = prompt("Please enter Names, then / and pattern. Without using space!");

var mainArray = firstStep.split(',');

var names = mainArray.slice(0, mainArray.length-1);;

function getPattern(mA){
var myPattern1 = mA.slice(mainArray.length-1);
var myPattern2 = myPattern1[0];
var myPattern3 = myPattern2.split('')
var rez = "";
for(var i of myPattern3){
    if(i==="/"){
    continue
    }
    rez += i;
}
var myPattern4 = rez.split('$')
return myPattern4;
}
var Pattern = getPattern(mainArray);

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
console.log(html);
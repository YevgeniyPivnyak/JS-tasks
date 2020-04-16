//var firstStep = prompt("Please enter Names, then / and pattern");

var firstStep = "Roma,Anna,Sveta,Valera,/<p><b>$<b><p>";



var mainArray = firstStep.split(',');

var names = mainArray.slice(0, mainArray.length-1);;
console.log(names);

var myPattern1 = mainArray.slice(mainArray.length-1);


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

var startTag = myPattern4[0];
var lastTag = myPattern4[1];

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

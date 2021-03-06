
var charIndex = -1;
var stringLength = 0;
var inputText;

function writeContent(init) {
    if (init) {
        inputText = document.getElementById('contentToWrite').innerHTML;
    }
    if (charIndex == -1) {
        charIndex = 0;
        stringLength = inputText.length;
    }
    var initString = document.getElementById('myContent').innerHTML;
    initString = initString.replace(/<SPAN.*$/gi, "");

    var theChar = inputText.charAt(charIndex);
    var nextFourChars = inputText.substr(charIndex, 4);
    if (nextFourChars == '<BR>' || nextFourChars == '<br>') {
        theChar = '<BR>';
        charIndex += 3;
    }
    initString = initString + theChar + "<SPAN id='blink'>|</SPAN>";
    document.getElementById('myContent').innerHTML = initString;
    charIndex = charIndex / 1 + 1;
    if (charIndex % 2 == 1) {
        document.getElementById('blink').style.display = 'none';
    } else {
        document.getElementById('blink').style.display = 'inline';
    }

    if (charIndex <= stringLength) {
        setTimeout('writeContent(false)', 100);

    } else {
        initString = initString.replace("|", "");
        document.getElementById('myContent').innerHTML = initString;
    }
}

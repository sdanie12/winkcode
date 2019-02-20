<SCRIPT LANGUAGE="JAVASCRIPT">
<!--

var charCodes=new Array(36); 
charCodes["a"]="wink wiiink";
charCodes["b"]="wiiink wink wink wink";
charCodes["c"]="wiiink wink wiiink wink";
charCodes["d"]="wiiink wink wink";
charCodes["e"]="wink";
charCodes["f"]="wink wink wiiink .";
charCodes["g"]="wiiink wiiink wink";
charCodes["h"]="wink wink wink wink";
charCodes["i"]="wink wink";
charCodes["j"]="wink wiiink wiiink wiiink";
charCodes["k"]="wiiink wink wiiink";
charCodes["l"]="wink wiiink wink wink";
charCodes["m"]="wiiink wiiink";
charCodes["n"]="wiiink wink";
charCodes["o"]="wiiink wiiink wiiink";
charCodes["p"]="wink wiiink wiiink .";
charCodes["q"]="wiiink wiiink wink wiiink";
charCodes["r"]="wink wiiink wink";
charCodes["s"]="wink wink wink";
charCodes["t"]="wiiink";
charCodes["u"]="wink wink wiiink";
charCodes["v"]="wink wink wink wiiink";
charCodes["w"]="wink wiiink wiiink";
charCodes["x"]="wiiink wink wink wiiink";
charCodes["y"]="wiiink wink wiiink wiiink";
charCodes["z"]="wiiink wiiink wink wink";
charCodes["1"]="wink wiiink wiiink wiiink wiiink";
charCodes["2"]="wink wink wiiink wiiink wiiink";
charCodes["3"]="wink wink wink wiiink wiiink";
charCodes["4"]="wink wink wink wink wiiink";
charCodes["5"]="wink wink wink wink wink";
charCodes["6"]="wiiink wink wink wink wink";
charCodes["7"]="wiiink wiiink wink wink wink";
charCodes["8"]="wiiink wiiink wiiink wink wink";
charCodes["9"]="wiiink wiiink wiiink wiiink wink";
charCodes["0"]="wiiink wiiink wiiink wiiink wiiink";
var temp=''

function encode() {
document.winkcode.chars.value=document.winkcode.chars.value.toLowerCase();
document.winkcode.codebox.value="";
temp=''
var chars=document.winkcode.chars.value.split("");

for (a=0; a<chars.length; a++) {
if (chars[a]!=" ") {
if (window.charCodes[chars[a]]) {
document.winkcode.codebox.value+=charCodes[chars[a]]+"    ";
temp+=chars[a]+"="+charCodes[chars[a]]+"\n";
}
else
temp+=chars[a]+"=(None)\n";
}
else temp+="\n";
}
document.winkcode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
}
// -->
</SCRIPT>

<FORM NAME="winkcode">
Type in a word or phrase: <INPUT TYPE="TEXT" NAME="chars" size="28" value="Help"> <INPUT TYPE="BUTTON" VALUE="Translate" onClick="encode()"><BR><BR>
<TEXTAREA NAME="codebox" cols="50" rows="11" style="width:70%" wrap="virtual"> </TEXTAREA><br /><INPUT TYPE="BUTTON" VALUE="Copy To Clipboard" onClick="document.winkcode.codebox.select(); document.execCommand('Copy');">
</FORM>

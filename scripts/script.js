/*Create Password start*/

function createPassword() {
    var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()[]{};':\",.<>/?";
    var password = "";
    var length = document.getElementById("length").value;
    if(length>=4 && length<=30) {
    if(document.getElementById("numbers").checked == true && document.getElementById("symbols").checked == true) {
        for (var i = 0, n = char.length; i < length; i++) {
            password += char[Math.floor(Math.random() * n)];
        }
        document.getElementById("password-output").innerHTML = password;
        document.getElementById("copy-button").style.display = "inline";
        document.getElementsByTagName("INPUT")[3].setAttribute("value", "Generate new password");
    } else if (document.getElementById("numbers").checked == true && document.getElementById("symbols").checked == false) {
        var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        for (var i = 0, n = char.length; i < length; i++) {
            password += char[Math.floor(Math.random() * n)];
        }
        document.getElementById("password-output").innerHTML = password;
        document.getElementById("copy-button").style.display = "inline";
        document.getElementsByTagName("INPUT")[3].setAttribute("value", "Generate new password");
    } else if(document.getElementById("numbers").checked == false && document.getElementById("symbols").checked == true) {
        var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()[]{};':\",.<>/?";
        for (var i = 0, n = char.length; i < length; i++) {
            password += char[Math.floor(Math.random() * n)];
        }
        document.getElementById("password-output").innerHTML = password;
        document.getElementById("copy-button").style.display = "inline";
        document.getElementsByTagName("INPUT")[3].setAttribute("value", "Generate new password");
    } else {
        var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0, n = char.length; i < length; i++) {
            password += char[Math.floor(Math.random() * n)];
        }
        document.getElementById("password-output").innerHTML = password;
        document.getElementById("copy-button").style.display = "inline";
        document.getElementsByTagName("INPUT")[3].setAttribute("value", "Generate new password");
    }
    
    } else {
        document.getElementById("password-output").innerHTML = "Select length between 4 to 30";
        document.getElementById("copy-button").style.display = "none";
    }
    
}

/*Create Password end*/

/*Copy Password start*/

// Method 1

// function copyPassword() {
//     const body = document.querySelector('body');
//     const span = document.querySelector('span');
//     const area = document.createElement('textarea');
//     body.appendChild(area);
  
//     area.value = span.innerText;
//     area.select();
//     document.execCommand('copy');
  
//     body.removeChild(area);
// }

// Method 2

function copyPassword() {
    const userClipboard = navigator.clipboard;
    const span = document.querySelector('span');
    userClipboard.writeText(span.innerText).then(() => alert('Password copied'));
}

/*Copy Password end*/
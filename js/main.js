/*global prompt, document, output, switchScreen,
season, eventScreen, click, dblclick,
keydown, keypress, keyup, mouseover, mouseout, change, window */

var output = document.getElementById("output"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    btn4 = document.getElementById("btn4"),
    btn5 = document.getElementById("btn5"),
    
    switchScreen = document.getElementById("switchScreen"),
    season = document.getElementById("season"),
    
    eventScreen = document.getElementById("eventScreen"),
    click = document.getElementById("click"),
    dblclick = document.getElementById("dblclick"),
    keydown = document.getElementById("keydown"),
    keypress = document.getElementById("keypress"),
    keyup = document.getElementById("keyup"),
    change = document.getElementById("change"),
    
    mouseover = document.getElementById("mouseover"),
    mouseout = document.getElementById("mouseout");
    




//-------------calc---------------------//
btn1.onclick = function () {
    "use strict";
    
     
    var val1   = document.getElementById("val1").value,
        val2   = document.getElementById("val2").value;
    
    output.innerHTML = "value one is " + val1 + "<br>" +
                        "value two is " + val2;
};
    
btn2.onclick = function () {
    
    "use strict";
    
    var val1         = parseInt(document.getElementById("val1").value, 10),
        val2         = parseInt(document.getElementById("val2").value, 10),
        addResult    = val1 + val2;

    if (isNaN(val1) === true || isNaN(val2) === true) {
        
        output.innerHTML =  "those are not numbers";
       
    } else {
        output.innerHTML =  val1 + " + " + val2 + " = " + addResult;
    }
    
};

btn3.onclick = function () {
    "use strict";
    
    var
        val1   = parseInt(document.getElementById("val1").value, 10),
        val2   = parseInt(document.getElementById("val2").value, 10),
        addResult = val1 - val2;
    
    if (isNaN(val1) === true && isNaN(val2) === true) {
        
        output.innerHTML = "those are not numbers";
        
    } else {
        
        output.innerHTML =  val1 + " - " + val2 + " = " + addResult;
        
    }
     
};
    
btn4.onclick = function () {
    "use strict";
    
    var
        val1   = parseInt(document.getElementById("val1").value, 10),
        val2   = parseInt(document.getElementById("val2").value, 10),
        addResult = val1 * val2;
    
    if (isNaN(val1) === true && isNaN(val2) === true) {
        
        output.innerHTML = "those are not numbers";
        
    } else {
        
        output.innerHTML =  val1 + " * " + val2 + " = " + addResult;
        
    }
     
};
    
btn5.onclick = function () {
    "use strict";
    
    var
        val1   = parseInt(document.getElementById("val1").value, 10),
        val2   = parseInt(document.getElementById("val2").value, 10),
        addResult = val1 / val2;
    
    if (isNaN(val1) === true && isNaN(val2) === true) {
        
        output.innerHTML = "those are not numbers";
        
    } else {
        
        output.innerHTML =  val1 + " / " + val2 + " = " + addResult;
        
    }
     
};
//----------------------------------------//
//------------switch----------------------//    
season.onclick =  function () {
    "use strict";
    switch (prompt("write a season please")) {
            
    case "summer":
        switchScreen.innerHTML = "summer is hot :)";
        break;
    case "winter":
        switchScreen.innerHTML = "winter is cold :)";
        break;
    case "autumn":
        switchScreen.innerHTML = "autumn is windy :)";
        break;
    case "spring":
        switchScreen.innerHTML = "spring is fun :)";
        break;
    default:
        switchScreen.innerHTML = "sorry that wasn't a season name";
    }
};
//----------------------------------------//
//--------------events--------------------//
click.onclick = function () {
    "use strict";
    eventScreen.innerHTML = "you clicked on the (click) button ";
};
dblclick.ondblclick = function () {
    "use strict";
    eventScreen.innerHTML = "you double clicked on the (double click) button ";
};

change.onchange = function () {
    "use strict";
    eventScreen.innerHTML = "your box selection was " + change.value;
};
keydown.onkeydown = function () {
    "use strict";
    eventScreen.innerHTML = "you wrote on keydown input " + keydown.value;
};
keypress.onkeypress = function () {
    "use strict";
    eventScreen.innerHTML = "you wrote on keypress input " + keypress.value;
};
keyup.onkeyup = function () {
    "use strict";
    eventScreen.innerHTML = "you wrote on keyup input " + keyup.value;
};

mouseover.onmouseover = function () {
    "use strict";
    eventScreen.innerHTML = "you just hovered over (mouseover) button";
};
mouseout.onmouseout = function () {
    "use strict";
    eventScreen.innerHTML = "your mouse just left (mouseout) button";
};


 //--------------------------------------//   
//------------Arrays---------------------//

    
var arraySelect = document.getElementById("arraySelect"),
    array1 = ["var1", "var2", "var3", "var4"],
    array2 = ["var1", "var2", "var3", "var4"],
    array3 = ["var1", "var2", "var3", "var4"],
    newArray = [],
    arraySelected = document.getElementById("arraySelected"),
    
    variable = document.getElementById("var"),
    addVarLength = document.getElementById("addVarLength"),
    
    addVarPush = document.getElementById("addVarPush"),
    removeVarPop = document.getElementById("removeVarPop"),
    addVarUnshift = document.getElementById("addVarUnshift"),
    removeVarShift = document.getElementById("removeVarShift"),
    
    varNo = document.getElementById("varNo"),
    addVarNo = document.getElementById("addVarNo"),
    removeVarNo = document.getElementById("removeVarNo"),
    
    
    varNoSelected = document.getElementById("varNoSelected"),
    varSelected = document.getElementById("varSelected"),
    
    getArrayLength = document.getElementById("getArrayLength"),
    arrayLength = document.getElementById("arrayLength"),
    setLength = document.getElementById("setLength"),
    SetArrayLength = document.getElementById("SetArrayLength"),
    
    arrayCheck = document.getElementById("arrayCheck"),
    arrayChecked = document.getElementById("arrayChecked"),
    
    arraySort = document.getElementById("arraySort"),
    arrayReverse = document.getElementById("arrayReverse"),
    
    ar1 = document.getElementById("ar1").nextElementSibling.innerHTML,
    ar2 = document.getElementById("ar2").nextElementSibling.innerHTML,
    ar3 = document.getElementById("ar3").nextElementSibling.innerHTML,
    check1 = document.getElementById("ar1"),
    check2 = document.getElementById("ar2"),
    check3 = document.getElementById("ar3"),
    arrayConcat = document.getElementById("arrayConcat"),
    
    arrayScreen = document.getElementById("arrayScreen");

window.onload = function () {
    "use strict";
    arraySelected.innerHTML = arraySelect.value;
    arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
};

arraySelect.onchange = function () {
    "use strict";
    // display selected array
    arraySelected.innerHTML = arraySelect.value;
    
    // act based on selected array
    if (arraySelect.value === "array 1") {
        // display array 1
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        // display array 2
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        // display array 3
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

addVarLength.onclick = function () {
    "use strict";
    // display selected variable
    varSelected.innerHTML = variable.value;
    
    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array1[array1.length] = variable.value;
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array2[array2.length] = variable.value;
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array3[array3.length] = variable.value;
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

addVarPush.onclick = function () {
    "use strict";
    // display selected variable
    varSelected.innerHTML = variable.value;
    
    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array1.push(variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array2.push(variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array3.push(variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

addVarUnshift.onclick = function () {
    "use strict";
    // display selected variable
    varSelected.innerHTML = variable.value;
    
    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "first";
        
        // add the new variable to selected array
        array1.unshift(variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "first";
        
        // add the new variable to selected array
        array2.unshift(variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "first";
        
        // add the new variable to selected array
        array3.unshift(variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

removeVarPop.onclick = function () {
    "use strict";
    
    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array1.pop();
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array2.pop();
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "last";
        
        // add the new variable to selected array
        array3.pop();
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

removeVarShift.onclick = function () {
    "use strict";
    
    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "First";
        
        // add the new variable to selected array
        array1.shift();
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "First";
        
        // add the new variable to selected array
        array2.shift();
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        // show current length on selected array
        varNoSelected.innerHTML = "First";
        
        // add the new variable to selected array
        array3.shift();
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

addVarNo.onclick = function () {
    "use strict";
    // display selected variable
    varSelected.innerHTML = variable.value;
    
    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        // show current length on selected array
        varNoSelected.innerHTML = varNo.value;
        
        // add the new variable to selected array
        array1.splice(varNo.value - 1, 0, variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        // show current length on selected array
        varNoSelected.innerHTML = varNo.value;
        
        // add the new variable to selected array
        array2.splice(varNo.value - 1, 0, variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        // show current length on selected array
        varNoSelected.innerHTML = varNo.value;
        
        // add the new variable to selected array
        array3.splice(varNo.value - 1, 0, variable.value);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

removeVarNo.onclick = function () {
    "use strict";

    // act based on selected array 
    if (arraySelect.value === "array 1") {
        
        varSelected.innerHTML = array1[varNo.value - 1];
        
        // show current length on selected array
        varNoSelected.innerHTML = varNo.value;
        
        // add the new variable to selected array
        array1.splice(varNo.value - 1, 1);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        
        varSelected.innerHTML = array2[varNo.value - 1];
        
        // show current length on selected array
        varNoSelected.innerHTML = varNo.value;
        
        // add the new variable to selected array
        array2.splice(varNo.value - 1, 1);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        
        varSelected.innerHTML = array3[varNo.value - 1];
        
        // show current length on selected array
        varNoSelected.innerHTML = varNo.value;
        
        // add the new variable to selected array
        array3.splice(varNo.value - 1, 1);
        
        // display selected array with the new variable
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

arrayCheck.onclick = function () {
    "use strict";
    
    if (arraySelect.value === "array 1") {
        // display array 1
        arrayChecked.innerHTML = Array.isArray(array1);
        
    } else if (arraySelect.value === "array 2") {
        // display array 2
        arrayChecked.innerHTML = Array.isArray(array2);
        
    } else if (arraySelect.value === "array 3") {
        // display array 3
        arrayChecked.innerHTML = Array.isArray(array3);
        
    } else {
        // no selected array
        arrayChecked.innerHTML = Array.isArray(10);
    }
};

getArrayLength.onclick = function () {
    "use strict";
    
    if (arraySelect.value === "array 1") {
        // display array 1
        arrayLength.innerHTML = array1.length;
        
    } else if (arraySelect.value === "array 2") {
        // display array 2
        arrayLength.innerHTML = array2.length;
        
    } else if (arraySelect.value === "array 3") {
        // display array 3
        arrayLength.innerHTML = array3.length;
        
    } else {
        // no selected array
        arrayLength.innerHTML = "None";
    }
};

SetArrayLength.onclick = function () {
    "use strict";
    
    if (arraySelect.value === "array 1") {
        // display array 1
        if (array1.length > setLength.value) {
            
            array1.length = setLength.value;
            arrayLength.innerHTML = array1.length;
            arrayScreen.innerHTML =
                    arraySelect.value + " :<br>-" +
                    array1.join("<br>-");
        } else {
            arrayLength.innerHTML = "select lower length";
            arrayScreen.innerHTML =
                    arraySelect.value + " :<br>-" +
                    array1.join("<br>-");
        }
        
        
    } else if (arraySelect.value === "array 2") {
        // display array 2
        if (array2.length > setLength.value) {
            
            array2.length = setLength.value;
            arrayLength.innerHTML = array2.length;
            arrayScreen.innerHTML =
                    arraySelect.value + " :<br>-" +
                    array2.join("<br>-");
        } else {
            arrayLength.innerHTML = "select lower length";
            arrayScreen.innerHTML =
                    arraySelect.value + " :<br>-" +
                    array2.join("<br>-");
        }
        
    } else if (arraySelect.value === "array 3") {
        // display array 3
        if (array3.length > setLength.value) {
            
            array3.length = setLength.value;
            arrayLength.innerHTML = array3.length;
            arrayScreen.innerHTML =
                    arraySelect.value + " :<br>-" +
                    array3.join("<br>-");
        } else {
            arrayLength.innerHTML = "select lower length";
            arrayScreen.innerHTML =
                    arraySelect.value + " :<br>-" +
                    array3.join("<br>-");
        }
        
    } else {
        // no selected array
        arrayLength.innerHTML = "Not Array";
    }
};

arraySort.onclick = function () {
    "use strict";
    // display selected array
    arraySelected.innerHTML = arraySelect.value;
    
    // act based on selected array
    if (arraySelect.value === "array 1") {
        
        
        array1.sort();
        // display array 1
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        array2.sort();
        // display array 2
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        array3.sort();
        // display array 3
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

arrayReverse.onclick = function () {
    "use strict";
    // display selected array
    arraySelected.innerHTML = arraySelect.value;
    
    // act based on selected array
    if (arraySelect.value === "array 1") {
        
        array1.reverse();
        // display array 1
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array1.join("<br>-");
        
    } else if (arraySelect.value === "array 2") {
        array2.reverse();
        // display array 2
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array2.join("<br>-");
        
    } else if (arraySelect.value === "array 3") {
        array3.reverse();
        // display array 3
        arrayScreen.innerHTML =
            arraySelect.value + " :<br>-" + array3.join("<br>-");
        
    } else {
        // no selected array
        arrayScreen.innerHTML = "Choose an Array";
    }
};

arrayConcat.onclick = function () {
    
    
    "use strict";
    
    var concat1, concat2, concat3, newAr;
    if (ar1 === "array1") {
        ar1 = array1;
    }
    if (ar2 === "array2") {
        ar2 = array2;
    }
    if (ar3 === "array3") {
        ar3 = array3;
    }

    
    if (check1.checked === true) {
        concat1 = array1;
    }
    if (check2.checked === true) {
        concat2 = array2;
    }
    if (check3.checked === true) {
        concat3 = array3;
    }

    
    if (concat1 === undefined) {
        concat1 = [];
    }
    if (concat2 === undefined) {
        concat2 = [];
    }
    if (concat3 === undefined) {
        concat3 = [];
    }

    newAr = newArray.concat(concat1, concat2, concat3);

    arrayScreen.innerHTML = "Combined Arrays in New Array :<br>-" +
               newAr.join("<br>-");
};












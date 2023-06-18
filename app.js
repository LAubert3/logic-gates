var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

var value1 = input1.value;
var value2 = input2.value;
var gateVal1 = "none";
var gateVal2 = "none";
var output = "Enter a value";

input1.addEventListener("input", function () {
    gateVal1 = input1.value;
    value1 = gateVal1;
});

input2.addEventListener("input", function () {
    var gateVal2 = input2.value;
    value2 = gateVal2;
});

var select = document.getElementById("logic_gate");
var chosenGate = select.value;

select.addEventListener("change", function () {
    chosenGate = select.value;
});

function changeText() {

    // for NOT gate
    if (value1 == 1 && chosenGate == "NOT") {
        output = "0";
    } else if (value1 == 0 && chosenGate == "NOT") {
        output = "1";
    }

    // for OR gate
    else if (value1 == 1 && value2 == 1 && chosenGate == "OR") {
        output = "1";
    } else if (value1 == 0 && value2 == 0 && chosenGate == "OR") {
        output = "0";
    } else if (value1 == 1 && value2 == 0 && chosenGate == "OR") {
        output = "1";
    } else if (value1 == 0 && value2 == 1 && chosenGate == "OR") {
        output = "1";
    }

    // for NOR gate
    else if (value1 == 1 && value2 == 1 && chosenGate == "NOR") {
        output = "0";
    } else if (value1 == 0 && value2 == 0 && chosenGate == "NOR") {
        output = "1";
    } else if (value1 == 1 && value2 == 0 && chosenGate == "NOR") {
        output = "0";
    } else if (value1 == 0 && value2 == 1 && chosenGate == "NOR") {
        output = "0";
    }

    // for AND gate
    else if (value1 == 1 && value2 == 1 && chosenGate == "AND") {
        output = "1";
    } else if (value1 == 0 && value2 == 0 && chosenGate == "AND") {
        output = "0";
    } else if (value1 == 1 && value2 == 0 && chosenGate == "AND") {
        output = "0";
    } else if (value1 == 0 && value2 == 1 && chosenGate == "AND") {
        output = "0";
    }

    // for NAND gate
    else if (value1 == 1 && value2 == 1 && chosenGate == "NAND") {
        output = "0";
    } else if (value1 == 0 && value2 == 0 && chosenGate == "NAND") {
        output = "1";
    } else if (value1 == 1 && value2 == 0 && chosenGate == "NAND") {
        output = "1";
    } else if (value1 == 0 && value2 == 1 && chosenGate == "NAND") {
        output = "1";
    }

    // for XOR gate
    else if (value1 == 1 && value2 == 1 && chosenGate == "XOR") {
        output = "0";
    } else if (value1 == 0 && value2 == 0 && chosenGate == "XOR") {
        output = "0";
    } else if (value1 == 1 && value2 == 0 && chosenGate == "XOR") {
        output = "1";
    } else if (value1 == 0 && value2 == 1 && chosenGate == "XOR") {
        output = "1";
    }

    // for XNOR gate
    else if (value1 == 1 && value2 == 1 && chosenGate == "XNOR") {
        output = "1";
    } else if (value1 == 0 && value2 == 0 && chosenGate == "XNOR") {
        output = "1";
    } else if (value1 == 1 && value2 == 0 && chosenGate == "XNOR") {
        output = "0";
    } else if (value1 == 0 && value2 == 1 && chosenGate == "XNOR") {
        output = "0";
    }

    var mytext = document.getElementsByClassName('mytext');

    mytext[0].children[0].innerHTML = `Output: ${output}`;
}

//***show NO input boxes when dropdown is on defauls (as soon as page loads because of scope)***
var theImg = document.getElementById('logic_gate').value;
var image = document.getElementById('gate_image');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var label1 = document.getElementById('label_input1');
var label2 = document.getElementById('label_input2');

if (theImg == "Select a logic gate") {
    image.src = "./img/transistor.png";
    input1.style.display = "none";
    input2.style.display = "none";
    label1.style.display = "none";
    label2.style.display = "none";
}



function showImg() {
    var theImg = document.getElementById('logic_gate').value;
    var image = document.getElementById('gate_image');
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var label1 = document.getElementById('label_input1');
    var label2 = document.getElementById('label_input2');

    var vOne = 1;
    var vZero = 0;
    var tableHead1 = document.getElementsByClassName('inA1');
    var tableHead2 = document.getElementsByClassName('inA2');
    var tableHead3 = document.getElementsByClassName('inA3');
    var tableHead4 = document.getElementsByClassName('inA4');

    var tableHeadB = document.getElementsByClassName('inB');
    var tableHeadB1 = document.getElementsByClassName('inB1');
    var tableHeadB2 = document.getElementsByClassName('inB2');
    var tableHeadB3 = document.getElementsByClassName('inB3');
    var tableHeadB4 = document.getElementsByClassName('inB4');

    var tableText1 = document.getElementsByClassName('out1');
    var tableText2 = document.getElementsByClassName('out2');
    var tableText3 = document.getElementsByClassName('out3');
    var tableText4 = document.getElementsByClassName('out4');

    if (theImg == "Select a logic gate") {
        image.src = "./img/transistor.png";
        input1.style.display = "none";
        input2.style.display = "none";
        label1.style.display = "none";
        label2.style.display = "none";
    } else if (theImg == "NOT") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vOne}`;
        tableHead3[0].innerHTML = `${""}`;
        tableHead4[0].innerHTML = `${""}`;
        //b column
        tableHeadB[0].innerHTML = `${""}`;
        tableHeadB1[0].innerHTML = `${""}`;
        tableHeadB2[0].innerHTML = `${""}`;
        tableHeadB3[0].innerHTML = `${""}`;
        tableHeadB4[0].innerHTML = `${""}`;
        //output column
        tableText1[0].innerHTML = `${vOne}`;
        tableText2[0].innerHTML = `${vZero}`;
        tableText3[0].innerHTML = `${""}`;
        tableText4[0].innerHTML = `${""}`;
        //image code
        image.src = "./img/not_gate.png";
        input1.style.display = "block";
        input2.style.display = "none";
        label1.style.display = "block";
        label2.style.display = "none";
    } else if (theImg == "OR") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vZero}`;
        tableHead3[0].innerHTML = `${vOne}`;
        tableHead4[0].innerHTML = `${vOne}`;
        //b column
        tableHeadB[0].innerHTML = `${"b"}`;
        tableHeadB1[0].innerHTML = `${vZero}`;
        tableHeadB2[0].innerHTML = `${vOne}`;
        tableHeadB3[0].innerHTML = `${vZero}`;
        tableHeadB4[0].innerHTML = `${vOne}`;
        //output column
        tableText1[0].innerHTML = `${vZero}`;
        tableText2[0].innerHTML = `${vOne}`;
        tableText3[0].innerHTML = `${vOne}`;
        tableText4[0].innerHTML = `${vOne}`;
        //image code
        image.src = "./img/or_gate.png";
        input1.style.display = "block";
        input2.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    } else if (theImg == "NOR") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vZero}`;
        tableHead3[0].innerHTML = `${vOne}`;
        tableHead4[0].innerHTML = `${vOne}`;
        //b column
        tableHeadB[0].innerHTML = `${"b"}`;
        tableHeadB1[0].innerHTML = `${vZero}`;
        tableHeadB2[0].innerHTML = `${vOne}`;
        tableHeadB3[0].innerHTML = `${vZero}`;
        tableHeadB4[0].innerHTML = `${vOne}`;
        //output column
        tableText1[0].innerHTML = `${vOne}`;
        tableText2[0].innerHTML = `${vZero}`;
        tableText3[0].innerHTML = `${vZero}`;
        tableText4[0].innerHTML = `${vZero}`;
        //image code
        image.src = "./img/nor_gate.png";
        input1.style.display = "block";
        input2.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    } else if (theImg == "AND") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vZero}`;
        tableHead3[0].innerHTML = `${vOne}`;
        tableHead4[0].innerHTML = `${vOne}`;
        //b column
        tableHeadB[0].innerHTML = `${"b"}`;
        tableHeadB1[0].innerHTML = `${vZero}`;
        tableHeadB2[0].innerHTML = `${vOne}`;
        tableHeadB3[0].innerHTML = `${vZero}`;
        tableHeadB4[0].innerHTML = `${vOne}`;
        //output column
        tableText1[0].innerHTML = `${vZero}`;
        tableText2[0].innerHTML = `${vZero}`;
        tableText3[0].innerHTML = `${vZero}`;
        tableText4[0].innerHTML = `${vOne}`;
        //image code
        image.src = "./img/and_gate.png";
        input1.style.display = "block";
        input2.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    } else if (theImg == "NAND") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vZero}`;
        tableHead3[0].innerHTML = `${vOne}`;
        tableHead4[0].innerHTML = `${vOne}`;
        //b column
        tableHeadB[0].innerHTML = `${"b"}`;
        tableHeadB1[0].innerHTML = `${vZero}`;
        tableHeadB2[0].innerHTML = `${vOne}`;
        tableHeadB3[0].innerHTML = `${vZero}`;
        tableHeadB4[0].innerHTML = `${vOne}`;
        //output column
        tableText1[0].innerHTML = `${vOne}`;
        tableText2[0].innerHTML = `${vOne}`;
        tableText3[0].innerHTML = `${vOne}`;
        tableText4[0].innerHTML = `${vZero}`;
        //image code
        image.src = "./img/nand_gate.png";
        input1.style.display = "block";
        input2.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    } else if (theImg == "XOR") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vZero}`;
        tableHead3[0].innerHTML = `${vOne}`;
        tableHead4[0].innerHTML = `${vOne}`;
        //b column
        tableHeadB[0].innerHTML = `${"b"}`;
        tableHeadB1[0].innerHTML = `${vZero}`;
        tableHeadB2[0].innerHTML = `${vOne}`;
        tableHeadB3[0].innerHTML = `${vZero}`;
        tableHeadB4[0].innerHTML = `${vOne}`;
        //output column
        tableText1[0].innerHTML = `${vZero}`;
        tableText2[0].innerHTML = `${vOne}`;
        tableText3[0].innerHTML = `${vOne}`;
        tableText4[0].innerHTML = `${vZero}`;
        //image code
        image.src = "./img/xor_gate.png";
        input1.style.display = "block";
        input2.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    } else if (theImg == "XNOR") {
        //a column
        tableHead1[0].innerHTML = `${vZero}`;
        tableHead2[0].innerHTML = `${vZero}`;
        tableHead3[0].innerHTML = `${vOne}`;
        tableHead4[0].innerHTML = `${vOne}`;
        //b column
        tableHeadB[0].innerHTML = `${"b"}`;
        tableHeadB1[0].innerHTML = `${vZero}`;
        tableHeadB2[0].innerHTML = `${vOne}`;
        tableHeadB3[0].innerHTML = `${vZero}`;
        tableHeadB4[0].innerHTML = `${vOne}`;
        //output column
        tableText1[0].innerHTML = `${vOne}`;
        tableText2[0].innerHTML = `${vZero}`;
        tableText3[0].innerHTML = `${vZero}`;
        tableText4[0].innerHTML = `${vOne}`;
        //image code
        image.src = "./img/xnor_gate.png";
        input1.style.display = "block";
        input2.style.display = "block";
        label1.style.display = "block";
        label2.style.display = "block";
    }
}
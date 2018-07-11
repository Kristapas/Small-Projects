const triangle = document.querySelector(".triangle");
const pyramid = document.querySelector(".pyramid");
const revPyramid = document.querySelector(".revpyramid");
const diamond = document.querySelector(".diamond");
const clear = document.querySelector(".clear");
const output = document.getElementById("output");

function draw(figure) {
    output.innerHTML = figure;
}

const triangleConstruction = () => {
    const number = getNumber();
    let i=1;
    let result="";
    for (i=1;i<=number;i++) {
        for (let j=1;j<=i; j++) {
            result +="*";
        } 
        result +="<br />";
    }

    draw(result);
};

const pyramidConstruction = () => {
    const number = getNumber();
    let i=1;
    let result="";
    for (i=1;i<=number;i++) {
        for (let k=number; k>i; k--) {
            result += "&nbsp;";
            }
        for (let j=1;j<=i; j++) {
            result +="*";
            result += "&nbsp;";
        } 
        result +="<br />";
    }

    draw(result);

};

const revPyramidConstruction = () => {
    const number = getNumber();

    let i=1;
    let result="";
    for (i=1;i<=number;i++) {
        for (let k=number-i+1; k<number; k++) {
            result += "&nbsp;";
            }
        for (let j=number;j>=i; j--) {
            result +="*";
            result += "&nbsp;";
        } 
        result +="<br />";
    }

    draw(result);

};

const diamondConstruction = () => {
    const number = getNumber();
    const halfNumber = Math.trunc(number/2);
    let i=1;
    let result="";
    for (i=1;i<=halfNumber+1;i++) {
        for (let k=halfNumber+1; k>i; k--) {
            result += "&nbsp;";
            }
        for (let j=1;j<=i; j++) {
            result +="*";
            result += "&nbsp;";
        } 
        result +="<br />";
    }
    for (i=1;i<=halfNumber;i++) {
        for (let k=halfNumber-i; k<halfNumber; k++) {
            result += "&nbsp;";
            }
        for (let j=halfNumber;j>=i; j--) {
            result +="*";
            result += "&nbsp;";
        } 
        result +="<br />";
    }

    draw(result);

}

const clearConstruction = () => {
    draw('');
    document.getElementById("number").value = '';   
}

const getNumber = () => Number(document.getElementById("number").value) || 7;


window.addEventListener("load", e => {

    triangle.addEventListener("click", triangleConstruction);
    pyramid.addEventListener("click", pyramidConstruction);
    revPyramid.addEventListener("click", revPyramidConstruction);
    diamond.addEventListener("click", diamondConstruction);
    clear.addEventListener("click",  clearConstruction);
});
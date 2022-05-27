

let inputMax = document.getElementById('Max');
inputMax.oninput = changeGrade;

function changeGrade(e) {
    console.log(e.data);
    alert("you enetered " + e.data);
}


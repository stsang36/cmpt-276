
const inputGradesID = ['Max', 'a-plus', 'a', 'a-minus', 'b-plus', 'b', 'b-minus', 'c-plus', 'c', 'c-minus', 'd', 'f'];

inputGradesID.forEach((element) => {
    aGradeChange(element);
});

function aGradeChange(id) {
    let aInput = document.getElementById(id);
    
    aInput.onchange = (e) => {
        let myNumber = e.target.value;
        if (isNaN(myNumber) || myNumber < 0 || myNumber > 100) {
            alert("Please enter a valid number!");
            aInput.value = "";
        } else {
            alert("you enetered " + myNumber);
            myNumber = parseFloat(myNumber);
            aInput.value = myNumber.toFixed(2);
        }
    };
}


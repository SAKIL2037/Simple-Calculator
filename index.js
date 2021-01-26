
var resultField = $('#result');

function insertNumber(number){

    var exitNumber =  resultField.val();
    resultField.val(exitNumber+number);

}

function clearScren(){

    resultField.val("");
}


function calculate(){
   var result = eval(resultField.val());
   resultField.val(result);
}

function deleteValue(){
    var exitNumber =  resultField.val();
    if(exitNumber != ''){
        resultField.val(exitNumber.slice(0,-1));
    }
}
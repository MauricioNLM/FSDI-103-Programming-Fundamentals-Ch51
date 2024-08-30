function convertTemperature(){
    let inTemperature = document.getElementById('inputTemperature').value;
    let inIndication = document.getElementById('inIndicator').value;
    let result = '';
    if(inIndication == 'C'){
        result = (inTemperature - 32) * 5/9 + " F";
    }
    else {
        result = (inTemperature * 9/5) + 32 + " C";
    }
    let outResult = document.getElementById('outResult');
    outResult.innerHTML = `<label>Result = `+result+`<\label>`;

}
function convertTemperature(){
    let startTemperature = document.getElementById('inputStartTemperature').value;
    let endTemperature = document.getElementById('inputEndTemperature').value;
    let inIndication = document.getElementById('inIndicator').value;
    let outResult = document.getElementById('outResult');
    outResult.innerHTML = '';
    let result = '';
    let startVal;
    let endVal;

    if(startTemperature < endTemperature){
        startVal = startTemperature;
        endVal = endTemperature;
    }
    else {
        startVal = endTemperature ;
        endVal = startTemperature;
    }
    for(let i = startVal; i<=endVal ; i++){

        if(inIndication == 'C'){
            result = i+" "+inIndication+" = "+ (i - 32) * 5/9 + " F";
        }
        else {
            result = i+" "+inIndication+" = "+(i * 9/5) + 32 + " C";
        }
        outResult.innerHTML = outResult.innerHTML + `<label>Result = `+result+`<\label></br>`;
    }

    // if(inIndication == 'C'){
    //     result = (inTemperature - 32) * 5/9 + " F";
    // }
    // else {
    //     result = (inTemperature * 9/5) + 32 + " C";
    // }



    // let outResult = document.getElementById('outResult');
    // outResult.innerHTML = `<label>Result = `+result+`<\label>`;

}
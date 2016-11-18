var minA, minB, minC;
        
        minA = 492; minB = 420; minC = 365;

function clearit() {
    document.getElementById('cScore').value = "";
    document.getElementById('absenceNumber').value = "";
    
    document.getElementById('aResult').innerHTML = " ";
    document.getElementById('bResult').innerHTML = " ";
    document.getElementById('cResult').innerHTML = " ";
}

function compute() {
    ansOne = parseInt(document.getElementById('cScore').value);
    ansTwo = 20 - (parseInt(document.getElementById('absenceNumber').value) * 3.85);
    ansThree = parseInt(document.getElementById('remHW').value);
    
    total = (ansOne + ansTwo) + ansThree;
    
    if (!ansOne || !ansTwo) {
        clearit();
        window.alert("One or more of the fields below are left blank. Please complete the form to continue.");
    } else {
        document.getElementById('aResult').innerHTML = Math.round(minA - total)/2 + "%";
        document.getElementById('bResult').innerHTML = Math.round(minB - total)/2 + "%";
        document.getElementById('cResult').innerHTML = Math.round(minC - total)/2 + "%";
    }
    
}


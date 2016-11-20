var minA, minB, minC, or, clearPass;
        
    minA = 492; minB = 420; minC = 365;

or = $('.or');
clearPass = false;


function clearit() {
    if (clearPass == true) {
        return;
    } else {
         document.getElementById('cScore').value = "";
        document.getElementById('absenceNumber').value = "";
    
        document.getElementById('aResult').innerHTML = " ";
        document.getElementById('bResult').innerHTML = " ";
        document.getElementById('cResult').innerHTML = " ";
        document.getElementById('aResultP').innerHTML = " ";
        document.getElementById('bResultP').innerHTML = " ";
        document.getElementById('cResultP').innerHTML = " ";
        $('.or').css("visibility", "hidden");
        clearPass = false;
    }
    
   
}

function compute() {
    ansOne = parseInt(document.getElementById('cScore').value);
    ansTwo = 20 - (parseInt(document.getElementById('absenceNumber').value) * 3.85);
    ansThree = parseInt(document.getElementById('remHW').value);
    
    total = (ansOne + ansTwo) + ansThree;
    
    clearPass = "true";
    
    if (!ansOne || !ansTwo) {
        clearit();
        window.alert("One or more of the fields below are left blank. Please complete the form to continue.");
    } else {
        or.css("visibility", "visible");
        document.getElementById('aResult').innerHTML = Math.round(minA - total)/2 + "%";
        document.getElementById('bResult').innerHTML = Math.round(minB - total)/2 + "%";
        document.getElementById('cResult').innerHTML = Math.round(minC - total)/2 + "%";
        document.getElementById('aResultP').innerHTML = Math.round(minA - total) + " Points";
        document.getElementById('bResultP').innerHTML = Math.round(minB - total) + " Points";
        document.getElementById('cResultP').innerHTML = Math.round(minC - total) + " Points";
    }
    
}


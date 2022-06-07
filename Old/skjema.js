function sjekkInput(){
    /*
    Finner gitt input i form-elementet "skjema"
    Bruker jquery for å hente navn på label (vil variere mellom sidene)
    */
    var input1 = document.forms["skjema"]["input1"];
    var input1Label = $("#input1Label").text();
    var input2 = document.forms["skjema"]["input2"];
    var input2Label = $("#input2Label").text();
    var input3 = document.forms["skjema"]["input3"];
    var input3Label = $("#input3Label").text();
    var input4 = document.forms["skjema"]["input4"];
    var input4Label = $("#input4Label").text();
    var input5 = document.forms["skjema"]["input5"];
    var input5Label = $("#input5Label").text();
    var input6 = document.forms["skjema"]["input6"];
    var input6Label = $("#input6Label").text();
    var input7 = document.forms["skjema"]["input7"];
    var input7Label = $("#input7Label").text();
    var input8 = document.forms["skjema"]["input8"];
    var input8Label = $("#input8Label").text();

    /*
    Sjekker om gitt input stemmer med label. 
    Hvis feil, returneres false, og bruker får feilmelding. 
    Eneste måten jeg kunne få siden til å ikke hoppe videre (selv om det var feil), 
    var å fokusere på en av feltene ved feil. Ettersom poenget
    er at man skal navigere seg tilbake, fokuseres det på siste inputfelt.
    */
   
    if (input1.value !== input1Label) {
        $("#input1Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    if (input2.value !== input2Label){
        $("#input2Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    if (input3.value !== input3Label){
        $("#input3Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false;
    }

    if (input4.value !== input4Label){
        $("#input4Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    if (input5.value !== input5Label){
        $("#input5Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    if (input6.value !== input6Label){
        $("#input6Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    if (input7.value !== input7Label){
        $("#input7Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    if (input8.value !== input8Label){
        $("#input8Feil").html("Feil input");
        $("#feil").html("Det er feil i ett eller flere av feltene")
        input8.focus();
        return false; 
    }

    /*
    returnerer true hvis alt stemmer. Skjemaet kan sendes inn
    */
    $("#feil").html("Riktig i alle felt. Gå videre.")
    return true; 
    
}
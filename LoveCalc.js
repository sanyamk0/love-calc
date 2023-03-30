function generator() {
    var You = document.getElementById('You').value
    var Crush = document.getElementById('Crush').value
    if (You == "") {
        alert("Please Enter Your Name")
    }
    else if (You.length <= 2) {
        alert("Min Required Length is 3")
    }
    else if (!isNaN(You)) {
        alert("Digits are not allowed")
    }
    else if (Crush == "") {
        alert("Please Enter Your  Crush Name")
    }
    else if (Crush.length <= 2) {
        alert("Min Required Length is 3")
    }
    else if (!isNaN(Crush)) {
        alert("Digits are not allowed")
    }
    else {
        var Love = Math.random() * 100;
        Love = Math.floor(Love)
        document.getElementById('Love%').value = Love + "%"
    }
    // Quotes
    if (Love >= 0 && Love <= 25) {
        document.getElementById('Quote').innerText = "Chances Kafi Kam Hain."
    }
    else if (Love > 25 && Love <= 50) {
        document.getElementById('Quote').innerText = "Try Krke Dekhle."
    }
    else if (Love > 50 && Love <= 75) {
        document.getElementById('Quote').innerText = "Date Krle Na."
    }
    else if (Love > 75 && Love <= 100) {
        document.getElementById('Quote').innerText = "Ekdum Chill."
    }
}
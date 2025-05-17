function mostrar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const soma = num1 + num2;

    if(soma >= 6000 && (num1 > 1000 && num2 > 1000)){
        alert("Contemplado!")
    } else{
        alert("Não pode participar!")
    }
}


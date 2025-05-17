function Acesso(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let user1 = [
        "user1@gmail.com",
        "user0101",
    ]
    if (email == user1[0] && senha == user1[1]) {
        window.location.href = "../CONT_login/cont.html"
    } else alert("Acesso negado.");
}
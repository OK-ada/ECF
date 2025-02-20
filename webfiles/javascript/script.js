/* Burger menu */
document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function () {
        menu.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });

    // Fermer le menu si on clique sur un lien
    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            burgerIcon.classList.remove("active");
        });
    });
});


/* Le Formulaire  */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const lastname = document.querySelector("#lastname").value.trim();
    const firstname = document.querySelector("#firstname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const object = document.querySelector("#object").value.trim();
    const message = document.querySelector("#message").value.trim();
    const agreement = document.querySelector("#agreed").value;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes
        let isValid = true;

        // Réinitialisation des erreurs visuelles
        document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));

        // Fonction pour ajouter une erreur
        function setError(input) {
            input.classList.add("error");
            isValid = false;
        }

        // Validation des champs nom et prénom
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/;
        if (!nameRegex.test(firstname.value)) {
            setError(firstname);
        }
        if (!nameRegex.test(lastname.value)) {
            setError(lastname);
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            setError(email);
        }

        // Validation de l'objet et du message
        if (object.value.trim().length < 3 || object.value.length > 250) {
            setError(object);
        }
        if (message.value.trim().length < 3 || message.value.length > 250) {
            setError(message);
        }

        // Vérification de l'accord
        if (!agreement.checked) {
            setError(agreement);
        }

        // Si tout est valide, afficher un message de succès et vider le formulaire
        if (isValid) {
            alert("Votre message a bien été envoyé !");
            form.reset();
        }
    });
});




/*  
const email = document.querySelector("#email").value;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  alert("L'adresse email est invalide !");
}
  */

/*
const form = document.querySelector("#form-contact");

form.addEventListener("submit", (event) => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  if (name === "" || email === "") {
    alert("Tous les champs sont obligatoires !");
    event.preventDefault(); // Bloque la soumission du formulaire
  }
});
*/
const emailInput = document.getElementById("email");
const avatarImage = document.getElementById("image");

document.getElementById("generate").addEventListener("click", () => {
    const email = emailInput.value;
    if (email) {
        const encryptString = encrypt(email);
        // Gravatar : service gratuit en ligne pour générer des avatars aléatoires
        const url = `https://www.gravatar.com/avatar/${encryptString}?d=identicon`;
        avatarImage.src = url;
    }
});

document.getElementById("form").addEventListener("submit", (event) => {
    const formElements = event.target.elements;
    const userProfile = {
        name: formElements['name'].value,
        email: formElements['email'].value,
        avatar: avatarImage.src
    };

    localStorage.setItem("profile", JSON.stringify(userProfile));
});


/* NOTE: cette fonction d'hashage est très simple et à des fins de démo seulement
    basé sur la fonction de hashage (Fowler–Noll–Vo)
*/
function encrypt(data) {
    // L'heure est ajoutée pour simulier un effet "aléatoire"
    data = data.concat(new Date().toLocaleString());
    return data.split('').map(
        v => v.charCodeAt(0)
    ).reduce(
        (a, v) => a + ((a << 7) + (a << 3)) ^ v
    ).toString(16);
};
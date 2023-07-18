(function () {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (!profile) {
        document.getElementById("error").style.setProperty("display", "block");
        document.getElementById("profile-card").style.setProperty("display", "none");
        return;
    }

    document.getElementById("profile-name").textContent = profile.name;
    document.getElementById("profile-email").textContent = profile.email;
    // Image par défaut de Gravatar
    document.getElementById("avatar").src = profile.avatar
        ? profile.avatar
        : `https://www.gravatar.com/avatar/default`;

    document.title = `Profil de ${profile.name}`;
})();
//Vitor Hugo Weber Barbosa RA: 235320

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("li a");
    const content = document.getElementById("content");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            fetch(this.href)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => {
                    console.error("Erro ao carregar a página:", error);
                });
        });
    });
});
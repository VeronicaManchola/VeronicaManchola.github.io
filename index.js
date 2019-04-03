window.onload = () => {
    skills.click();
}

projects.addEventListener("click", () => {
    projects.classList.add("active");
    skills.classList.remove("active");
    contact.classList.remove("active");
    root.innerHTML = "";
    root.innerHTML =`
    <div class="container spacing initial">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card spacing" style="max-width: 540px;">
                    <div class="fixedHeight">
                        <img src="./Imagenes/DataLovers.png" class="card-img" alt="DataLovers">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title title">Pokedex Kanto</h5>
                        <p class="card-text">Se consume la data de un JSON para mostrarla de una manera
                        dinamica incluyendo opciones de filtro, orden y busqueda.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card spacing" style="max-width: 540px;">
                    <div class="fixedHeight">
                        <img src="./Imagenes/FoodNTravel.png" class="card-img" alt="FoodNTravel">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title title">Food & Travel</h5>
                        <p class="card-text">Red social enfocada a viajeros que desean compartir su gusto
                        por la comida y los mejores restaurantes a visitar en una nueva ciudad.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card spacing" style="max-width: 540px;">
                    <div class="fixedHeight">
                        <img src="./Imagenes/md-links.png" class="card-img" alt="md-links">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title title">Md-Links</h5>
                        <p class="card-text">Framework que permite validar los links dentro de un archivo ".md"
                        y asi mismo saber cuantos de ellos no esta disponibles para usarse.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="card spacing" style="max-width: 540px;">
                    <div class="fixedHeight">
                        <img src="./Imagenes/BurguerQueen.png" class="card-img" alt="BurguerQueen">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title title">Burger Queen</h5>
                        <p class="card-text">App enfocada en el sistema de pedido de ordenes para los meseros y 
                        cocina de un restaurante de cadena que busca agilizar sus procesos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})

skills.addEventListener("click", () => {
    projects.classList.remove("active");
    skills.classList.add("active");
    contact.classList.remove("active");
    root.innerHTML = "";
    root.innerHTML =`
    <div class="container spacing skills">
        <div class="row centered middle">
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-html5-plain-wordmark colored"></i>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-css3-plain-wordmark colored"></i>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-javascript-plain colored"></i>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-github-plain-wordmark colored"></i>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-git-plain-wordmark colored"></i>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-nodejs-plain-wordmark colored"></i>
            </div>
        </div>
    </div>`    
});

contact.addEventListener("click", () => {
    projects.classList.remove("active");
    skills.classList.remove("active");
    contact.classList.add("active");
    root.innerHTML = "";
    root.innerHTML = `
    <div class="container spacing">
        <div class="row centered middle">
            <div class="col-5 col-sm-4 col-md-3 middle">
                <a href="https://github.com/VeronicaManchola"><img class="sizing spacing" src="./Imagenes/github-sign.png" alt="github"></a>    
                <p class="spacing">En GitHub</p>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <a href=""><img class="sizing spacing" src="./Imagenes/linkedin.png" alt="linkedin"></a>
                <p class="spacing">En LinkedIn</p>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle">
                <a href="mailto:veronica.manchola@gmail.com"><img class="sizing spacing" src="./Imagenes/close-envelope.png" alt="email"></a>
                <p class="spacing">Por email</p>
            </div>
        </div>
    </div>`
})
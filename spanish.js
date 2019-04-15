export const spanishPage = () => {

    summary.innerHTML = `Desarrolladora Front-End. </br> Inglés fluido.`;

    aboutMe.innerHTML = `Sobre mi`;
    projects.innerHTML = `Proyectos`;
    skills.innerHTML = `Habilidades`;
    contact.innerHTML = `Contactame!`;

    aboutMe.addEventListener("click", () => {
        aboutMe.classList.add("active");
        projects.classList.remove("active");
        skills.classList.remove("active");
        contact.classList.remove("active");
        root.innerHTML = "";
        root.innerHTML = `
        <div class="container spacing">
            <div class="row justCenter">
                <div class="col-12 col-sm-6 col-md-4 spacing">
                    <img src="./Imagenes/javascript_isnpmf.png" alt="logo" class="img-fluid"/>
                </div>
                <div class="col-12 col-sm-6 col-md-6 spacing">
                    <p>Desarrolladora Front-End con un alto sentido de la responsabilidad, trabajo en equipo, compromiso
                        y adaptabilidad. Tras 7 años de experiencia en areas altamente relacionadas a servicio
                        al cliente, liderazgo de equipos y auto-aprendizaje, he adquirido habilidades que me dan una base
                        fuerte para generar un impacto positivo en mi entorno.</p>
                </div>
            </div>
        </div>
        `;
    });

    projects.addEventListener("click", () => {
        aboutMe.classList.remove("active");
        projects.classList.add("active");
        skills.classList.remove("active");
        contact.classList.remove("active");
        root.innerHTML = "";
        root.innerHTML = `
    <div class="container spacing initial">
        <div class="row">
            <div class="col-12 col-md-6">
                <a href="https://github.com/VeronicaManchola/scl-2018-12-bc-core-data-lovers">
                    <div class="card spacing" style="max-width: 540px;">
                        <div class="fixedHeight">
                            <img src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/DataLovers.png" class="card-img" alt="DataLovers">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title title">Pokedex Kanto</h5>
                            <p class="card-text">Se consume la data de un JSON para mostrarla de una manera
                            dinamica incluyendo opciones de filtro, orden y busqueda.</p>
                        </div>
                    </div>
                <a>
            </div>
            <div class="col-12 col-md-6">
                <a href="https://github.com/VeronicaManchola/SCL007-Social-Network">
                    <div class="card spacing" style="max-width: 540px;">
                        <div class="fixedHeight">
                            <img src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/FoodNTravel.png" class="card-img" alt="FoodNTravel">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title title">Food & Travel</h5>
                            <p class="card-text">Red social para viajeros que desean compartir su gusto
                            por la comida y los mejores restaurantes a visitar en una nueva ciudad.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-6">
                <a href="https://github.com/VeronicaManchola/SCL007-md-links">
                    <div class="card spacing" style="max-width: 540px;">
                        <div class="fixedHeight">
                            <img src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/md-links.png" class="card-img" alt="md-links">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title title">Md-Links</h5>
                            <p class="card-text">Framework que permite validar los links dentro de un archivo ".md"
                            y asi mismo saber cuantos de ellos no esta disponibles para usarse.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-6">
                <a href="https://github.com/VeronicaManchola/SCL007-BurgerQueen">
                    <div class="card spacing" style="max-width: 540px;">
                        <div class="fixedHeight">
                            <img src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/BurguerQueen.png" class="card-img" alt="BurguerQueen">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title title">Burger Queen</h5>
                            <p class="card-text">App enfocada en el sistema de pedido de ordenes para los meseros y 
                            cocina de un restaurante de cadena que busca agilizar sus procesos.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>`
    })

    skills.addEventListener("click", () => {
        aboutMe.classList.remove("active");
        projects.classList.remove("active");
        skills.classList.add("active");
        contact.classList.remove("active");
        root.innerHTML = "";
        root.innerHTML = `
    <div class="container spacing skills">
        <div class="row text-center middle">
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
            <div class="col-5 col-sm-4 col-md-3 middle">
                <i class="devicon-react-original-wordmark colored"></i>
            </div>
        </div>
    </div>`
    });

    contact.addEventListener("click", () => {
        aboutMe.classList.remove("active");
        projects.classList.remove("active");
        skills.classList.remove("active");
        contact.classList.add("active");
        root.innerHTML = "";
        root.innerHTML = `
    <div class="container spacing">
        <div class="row text-center middle">
            <div class="col-5 col-sm-4 col-md-3 middle blink-2">
                <a href="https://github.com/VeronicaManchola"><img class="sizing spacing" src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/github-sign.png" alt="github"></a>    
                <p class="spacing">En GitHub</p>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle blink-2">
                <a href=""><img class="sizing spacing" src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/linkedin.png" alt="linkedin"></a>
                <p class="spacing">En LinkedIn</p>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle blink-2">
                <a href="mailto:veronica.manchola@gmail.com"><img class="sizing spacing" src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/close-envelope.png" alt="email"></a>
                <p class="spacing">Por email</p>
            </div>
        </div>
    </div>`
    })

}
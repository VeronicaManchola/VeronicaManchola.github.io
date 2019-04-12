export const englishPage = () => {

    summary.innerHTML = `Front-End Developer. Native spanish speaker.`;

    aboutMe.innerHTML = `About me`;
    projects.innerHTML = `Projects`;
    skills.innerHTML = `Skills`;
    contact.innerHTML = `Contact me!`;

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
                    <p>Front-End Developer with a high sense of responsibility, teamwork, commitment
                        and adaptability. After 7 years of experience in areas highly related to customer
                        service, leadership and self-learning, I have acquired skills that give me a strong
                        base to generate a positive impact in my surroundings.</p>
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
                            <p class="card-text">Usage of data from a JSON file to display it in a dynamic way
                            including options as filters, order and search.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-6">
                <a href="https://github.com/VeronicaManchola/SCL007-Social-Network">
                    <div class="card spacing" style="max-width: 540px;">
                        <div class="fixedHeight">
                            <img src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/FoodNTravel.png" class="card-img" alt="FoodNTravel">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title title">Food & Travel</h5>
                            <p class="card-text">Social Network for travelers that wish to share their love
                            for food and the best restaurants to visit in a new city.</p>
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
                            <p class="card-text">Framework that allows you to validate links within a ".md" file
                            and be able to identify which of them aren't available.</p>
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
                            <p class="card-text">Order producing app for waiters and 
                            kitchen in a franchise restaurant, focused on improving their experience.</p>
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
                <p class="spacing">On GitHub</p>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle blink-2">
                <a href=""><img class="sizing spacing" src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/linkedin.png" alt="linkedin"></a>
                <p class="spacing">On LinkedIn</p>
            </div>
            <div class="col-5 col-sm-4 col-md-3 middle blink-2">
                <a href="mailto:veronica.manchola@gmail.com"><img class="sizing spacing" src="https://raw.githubusercontent.com/VeronicaManchola/VeronicaManchola.github.io/master/Imagenes/close-envelope.png" alt="email"></a>
                <p class="spacing">By email</p>
            </div>
        </div>
    </div>`
    })

}
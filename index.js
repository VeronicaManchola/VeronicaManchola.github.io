import { spanishPage } from './spanish.js'
import { englishPage } from './english.js'

window.onload = () => {
    profileImgDiv.style.display = "block";
    loadingPage.style.display = "block";
};

engFrstBtn.addEventListener("click", () => {
    contentPage.style.display = "block";
    loadingPage.style.display = "none";
    englishPage();
    aboutMe.click();
})

spaFrstBtn.addEventListener("click", () => {
    contentPage.style.display = "block";
    loadingPage.style.display = "none";
    spanishPage();
    aboutMe.click();
})

englishBtn.addEventListener("click", () => {
    englishPage();
    aboutMe.click();
});

españolBtn.addEventListener("click", () => {
    spanishPage();
    aboutMe.click();
});
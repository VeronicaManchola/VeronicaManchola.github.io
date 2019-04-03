import { spanishPage } from './spanish.js'
import { englishPage } from './english.js'

window.onload = () => {
    englishPage();
    skills.click();
};

englishBtn.addEventListener("click", () => {
    englishPage();
    skills.click();
});

españolBtn.addEventListener("click", () => {
    spanishPage();
    skills.click();
});
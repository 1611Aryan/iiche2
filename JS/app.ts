const $ = (element) => {
    return document.querySelector(element);
}


const videoHero = $('#heroVideo');
const time = 58;
const videoScrollTill = window.innerHeight * 10;
window.addEventListener('scroll', (e) => {
    let position = ((scrollY / videoScrollTill) * 100);
    setTimeout(() => { videoHero.currentTime = position * 1.1 * time / 100; }, 100)
})
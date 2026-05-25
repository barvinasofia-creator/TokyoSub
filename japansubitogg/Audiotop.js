// Данные для виджета
const tracks = [
    {
        img: 'Rectangle 55.jpg',
        title: 'Fly Away - TeddyLoid',
        audio: 'audio/track1.mp3'
    },
    // ... остальные треки ...
];

let currentAudio = new Audio();
let isPlaying = false; 

function smartSwitch(index, element) {
    const img = document.getElementById('targetImg');
    const title = document.getElementById('targetTitle');
    const desc = document.getElementById('targetDesc');

    // Если музыка играла, мы запоминаем это состояние
    const wasPlaying = !currentAudio.paused;

    img.classList.add('fade-out');
    title.classList.add('fade-out');
    desc.classList.add('fade-out');

    setTimeout(() => {
        img.src = tracks[index].img;
        title.innerText = tracks[index].title;
        desc.innerHTML = tracks[index].desc;
        
        currentAudio.src = tracks[index].audio;

        // Если до смены карточки музыка играла — запускаем новый трек сразу
        if (wasPlaying) {
            currentAudio.play().catch(e => console.log("Нужен клик для запуска"));
        }

        img.classList.remove('fade-out');
        title.classList.remove('fade-out');
        desc.classList.remove('fade-out');
        
        document.querySelectorAll('.variant-item').forEach(v => v.style.borderColor = 'transparent');
        element.style.borderColor = '#cbff00';
    }, 300);
}

document.getElementById('targetImg').onclick = function() {
    if (!currentAudio.src) {
        currentAudio.src = tracks[0].audio; // Дефолтный трек
    }

    if (currentAudio.paused) {
        currentAudio.play();
        this.style.filter = "brightness(0.8) contrast(1.1)";
    } else {
        currentAudio.pause();
        this.style.filter = "brightness(1)";
    }
};
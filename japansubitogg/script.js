const albumLibrary = [
    { 
        img: 'Rectangle 55.jpg', 
        title: 'Fly Away - TeddyLoid', 
        desc: 'Энергичный бит, вдохновляющий представителей <b>гяру</b> и <b>декора</b> по всему миру. Музыкальное воплощение <b>дерзости</b> и неонового стиля современных субкультур.',
        audio: 'audio/track1.mp3' 
    },
    { 
        img: 'Rectangle 294.jpg', 
        title: 'Yahman Hard Bass - Bar Yahman', 
        desc: 'Быстрый трек в стиле <b>электро / хардбас</b> с клубным звучанием, близким танцевальной и яркой атмосфере, которая часто ассоциируется с эстетикой <b>гяру</b>.',
        audio: 'audio/track2.mp3'
    },
    { 
        img: 'Rectangle 298.jpg', 
        title: 'PALEHELL - Paledusk', 
        desc: 'Это сочетание <b>металкора, электроники и экспериментального J-рока</b> — звучание, близкое эстетике <b>визуал кей</b>, где ценятся экстремальный стиль.',
        audio: 'audio/track3.mp3'
    },
    { 
        img: 'Rectangle 297.jpg', 
        title: 'PALEDUSK - I ♡ YOU BABY!!', 
        desc: 'Новый энергичный <b>рок‑сингл</b> японской группы Paledusk с быстрыми гитарными рифами и мощным драйвом. Трек нравится слушателям субкультуры <b>визуал кей</b>.',
        audio: 'audio/track4.mp3'
    },
    { 
        img: 'Rectangle 296.jpg', 
        title: 'Tenohira de Odoru - Sokoninaru', 
        desc: 'Трек в стиле <b>альтернативного J-rock</b> с резкими ритмами и мощным вокалом; часто встречается в альтернативной музыке, которая пересекается с <b>визуал кей</b>.',
        audio: 'audio/track5.mp3'
    },
    { 
        img: 'Rectangle 295.jpg', 
        title: 'Gekka No Yasoukyoku - Malice Mizer', 
        desc: '<b>Эмоциональный рок</b> с готической эстетикой, идеально передающий атмосферу готической <b>лолиты</b> и аристократичного стиля японской субкультуры.',
        audio: 'audio/track6.mp3'
    }
];

let currentAudio = new Audio();
let currentIndex = 0; 

function smartSwitch(index, element) {
    if (element.classList.contains('active')) return;

    const img = document.getElementById('targetImg');
    const title = document.getElementById('targetTitle');
    const desc = document.getElementById('targetDesc');

    currentAudio.pause();
    currentAudio.currentTime = 0;

    // Плавное исчезновение контента
    [img, title, desc].forEach(el => el.classList.add('fade-out'));

    setTimeout(() => {
        // Смена контента 
        img.src = albumLibrary[index].img;
        title.innerHTML = albumLibrary[index].title;
        desc.innerHTML = albumLibrary[index].desc;
        if (!currentAudio.paused) {
            img.classList.add('playing'); 
        } else {
            img.classList.remove('playing');
        }

        currentIndex = index;
        currentAudio.src = albumLibrary[index].audio;

        // Обновление активной миниатюры
        document.querySelectorAll('.variant-item').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');

        // Плавное появление
        [img, title, desc].forEach(el => el.classList.remove('fade-out'));
        img.style.filter = "brightness(1)";
    }, 300);
}

const mainImg = document.getElementById('targetImg'); 

mainImg.onclick = function() {
    if (!currentAudio.src) {
        currentAudio.src = albumLibrary[currentIndex].audio;
    }

    if (currentAudio.paused) {
        currentAudio.play();
        mainImg.classList.add('playing'); 
    } else {
        currentAudio.pause();
        mainImg.classList.remove('playing'); 
    }
};

    if (currentAudio.paused) {
        currentAudio.play();
        this.style.filter = "brightness(0.8) contrast(1.2)"; 
    } else {
        currentAudio.pause();
        this.style.filter = "brightness(1)"; 
    }

document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyA') {
            let audioA = new Audio("music/A.mp3");
            audioA.play();
            shadowAddWhite('key-A');
        } else if (event.code == 'KeyS') {
            let audioS = new Audio("music/S.mp3");
            audioS.play();
            shadowAddWhite('key-S');
        } else if (event.code == 'KeyD') {
            let audioD = new Audio("music/D.mp3");
            audioD.play();
            shadowAddWhite('key-D');
        } else if (event.code == 'KeyF') {
            let audioF = new Audio("music/F.mp3");
            audioF.play();
            shadowAddWhite('key-F');
        } else if (event.code == 'KeyG') {
            let audioG = new Audio("music/G.mp3");
            audioG.play();
            shadowAddWhite('key-G');
        } else if (event.code == 'KeyH') {
            let audioH = new Audio("music/H.mp3");
            audioH.play();
            shadowAddWhite('key-H');
        } else if (event.code == 'KeyJ') {
            let audioJ = new Audio("music/J.mp3");
            audioJ.play();
            shadowAddWhite('key-J');
        }    else if (event.code == 'KeyW') {
            let audioW = new Audio("music/W.mp3");
            audioW.play();
            shadowAddBlack('key-W');
        } else if (event.code == 'KeyE') {
            let audioE = new Audio("music/E.mp3");
            audioE.play();
            shadowAddBlack('key-E');
        } else if (event.code == 'KeyT') {
            let audioT = new Audio("music/T.mp3");
            audioT.play();
            shadowAddBlack('key-T');
        } else if (event.code == 'KeyY') {
            let audioY = new Audio("music/Y.mp3");
            audioY.play();
            shadowAddBlack('key-Y');
        } else if (event.code == 'KeyU') {
            let audioU = new Audio("music/U.mp3");
            audioU.play();
            shadowAddBlack('key-U');
        } else {
            console.log('Warning!');
        }
    })

    function shadowAddWhite (element) {
        let idElement = document.getElementById(element);
        idElement.classList.add('shadow-white');
    }

    function shadowAddBlack (element) {
        let idElement = document.getElementById(element);
        idElement.classList.add('shadow-black');
    }

document.addEventListener('keyup', function() {
let elements = document.querySelectorAll('kbd');
for(let element of elements) {
    element.classList.remove('shadow-white');
    element.classList.remove('shadow-black');
} 
})
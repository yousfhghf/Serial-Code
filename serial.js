let serial = document.querySelector(".serial");
let NewSerial = document.querySelector(".next");

NewSerial.onclick = function () {
    let Characters = "1234567890ABCEFGHIGKLMNOPQRSDUVWXYZ";
    let CharacterCount = 10;
    let RandomNumber = "";
    for (let i = 0; i < CharacterCount; i++) {
        RandomNumber += Characters[Math.floor(Math.random() * Characters.length)]
    }
    serial.innerHTML = RandomNumber;
}
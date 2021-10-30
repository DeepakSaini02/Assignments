function textToAudio() {
    let msg = document.getElementById("ans").value;
    let speech = new SpeechSynthesisUtterance();
    let out = document.getElementById('langSpeakOut').value
    speech.lang = out;
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


function Speak() {
    let input = document.getElementById('langSpeak').value
    let recognition = new webkitSpeechRecognition()
    recognition.lang = input
    recognition.onresult = function (event) {
        console.log(event)
        document.getElementById('text').value = event.results[0][0].transcript;

    }
    recognition.start()
}


async function translatee() {
    x = document.getElementById('text').value
    let input = document.getElementById('langSpeak').value
    console.log(input)
    let out = document.getElementById('langSpeakOut').value
    console.log(x)
    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: x,
            source: input,
            target: out
        }),
        headers: { "Content-Type": "application/json" }
    });

    let details = await res.json()
    console.log(details);
    document.getElementById('ans').value = details.translatedText
}

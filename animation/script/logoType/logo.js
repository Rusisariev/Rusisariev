let audio, context, analyser, src, array, logo;

logo = document.getElementById("logo");

audio = document.getElementById("audio");

logo.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    logo.classList.add("animation");
  } else {
    audio.pause();
    logo.classList.remove("animation")
  }
  // loop();
});

// window.onclick = function(){
//     if(context){
//         preparation();
//     }
//     if(audio.paused){
//         audio.play();
//         loop();
//     }else {
//         audio.pause();
//     }
// }

function preparation() {
  context = new AudioContext();
  analyser = context.createAnalyser();
  src = context.createMediaElementSource(audio);
  src.connect(analyser);
  analyser.connect(context.destination);
  loop();
}

function loop() {
  if (!audio.paused) {
    window.requestAnimationFrame(loop);
  }
  array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(array);

  logo.Height = array[1] + "px";
  logo.width = array[1] + "px";
}

//var
//let
//const

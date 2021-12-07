const playSong = document.getElementsByClassName('play');
const stopSong = document.getElementsByClassName('stop');
const volume = document.querySelector('.volume');

let audio

for(element of playSong){
    element.addEventListener('click', function(){
        let song = this.getAttribute('id')
        audio = new Audio(`./song/${song}.mp3`)
        audio.play()
    })
}

for(element of stopSong){
    element.addEventListener('click', function(){
        audio.pause()
    })
}

volume.addEventListener('click', function(){
    let vol = this.value
    audio.volume = vol
})
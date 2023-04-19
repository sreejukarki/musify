console.log("Welcome to Spotify");


 
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
//let songItem= Array.from(document.getElementsByClassName('songItem'))

{/*let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "10.mp3", coverPath: "covers/10.jpg"},
]
songItem.forEach((element, i)=>{
   console.log(element, i)
element.getElementsByTagName('img')[0].src =i.coverPath;
element.getElementsByClassName('songName')[0].innerText =i.songName;
}) */}
 //handle play/pausebuttom
 masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity=1;
    }
    else {
    audioElement.pause();
   masterPlay.classList.remove('fa-pause-circle');
   masterPlay.classList.add('fa-circle-play');
   gif.style.opacity=0;
    } 
 })
 //listen to the event
 audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate')
  // update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
  console.log(progress);
  myProgressBar.value = progress;
    
 })
 myProgressBar.addEventListener('change' , () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })
 const makeAllPlay = () =>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.add('fa-circle-play');
      element.classList.remove('fa-pause-circle')
 })
}
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click', (e)=>{
         makeAllPlay();
   console.log(e.target);
   songIndex = parseInt(e.target.id);
   e.target.classList.remove('fa-circle-play');
   e.target.classList.add('fa-pause-circle');
   audioElement.src = `${songIndex + 1}.mp3`;
   audioElement.play();
   audioElement.currentTime = 0;
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-pause-circle');
      })
   })
    document.getElementById('next').addEventListener('click', ()=>{
      if(songIndex>9){
      songIndex = 0
      }
      else{
         songIndex += 1;
      }
      audioElement.src = `${songIndex}.mp3`;
      audioElement.play();
      audioElement.currentTime = 0;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause-circle');
    })
    document.getElementById('previous').addEventListener('click', ()=>{
      if(songIndex<=0){
      songIndex = 0
      }
      else{
         songIndex -= 1;
      }
      audioElement.src = `${songIndex}.mp3`;
      audioElement.play();
      audioElement.currentTime = 0;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause-circle');
    })
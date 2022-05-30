console.log("Welcome to spotify");

// Initialize the Valiables
let songindex = 0;
let audiosong = new Audio('songs/1.mp3');
let mainplay = document.getElementById('mainplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songItem'));
let mainplaysongname = document.getElementById('mainplaysongname');
let songitemplay = document.getElementById('songitemplay');


 

let songs = [
    {songname: "Aane Wala Kal - Kumar Sanu", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Aaj Zid - Arijit Singh", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "Baarish - Jubin Nautiyal", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "Baatein Ye Kabhi Na - Arijit Singh", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Baaton Ko Teri - Arijit Singh", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "Chal Ghar Chalein - Arijit Singh", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname: "Dua Karo - Arijit Singh", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname: "Ek Siwa Tere - Mohammad Ifran", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songname: "Ijazat - Arijit Singh", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songname: "Jaana Ve - Arijit Singh", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"},
    ]

    songitem.forEach((song, i) => {
        song.getElementsByTagName("img")[0].src= songs[i].coverpath;
        song.getElementsByClassName("songname")[0].innerText = songs[i].songname;

    })


    let fromIndex = songs.indexOf('Aane Wala Kal - Kumar Sanu'); // 👉️ 0
    let toIndex = 0;
    let element = songs.splice(songindex, 0)[1];
    songs.splice(toIndex, 0, element);


// audiosong.play();


// Song play pause Handle in progress bar

mainplay.addEventListener('click', ()=>{

    if(audiosong.paused || audiosong.currentTime<=0)

    {
        audiosong.play();
        mainplay.classList.remove('fa-circle-play');
        mainplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else {
        audiosong.pause();
        mainplay.classList.add('fa-circle-play');
        mainplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
    
})
  

// listen events 
audiosong.addEventListener('timeupdate', ()=>{
    
    //update seekbar 
    progress = parseInt((audiosong.currentTime/audiosong.duration)*100);
    myprogressbar.value = progress;

})
   //update audio of seekbar
myprogressbar.addEventListener('change', ()=>{
    audiosong.currentTime = myprogressbar.value * audiosong.duration/100;
})




let letallplays =()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((song)=>{
        song.classList.remove('fa-circle-pause');
        song.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((song)=>{
    song.addEventListener('click',(e)=>{

      //play songs by clicking on small play buttons 
      letallplays();
        songindex = (e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        mainplaysongname.innerText = songs[songindex].songname;
        audiosong.currentTime=0;
        audiosong.src = `songs/${songindex}.mp3`;
        audiosong.play();
        mainplay.classList.remove('fa-circle-play');
        mainplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;



    })

})




document.getElementById('nextplay').addEventListener('click', ()=>{
    if (songindex >= 9){
        songindex = 0
    }
    else {
    songindex += 1;
    }
    mainplaysongname.innerText = songs[songindex].songname;
    audiosong.currentTime=0;
    audiosong.src = `songs/${songindex}.mp3`;
        audiosong.play();
        mainplay.classList.remove('fa-circle-play');
        mainplay.classList.add('fa-circle-pause');
        gif.style.opacity=1; 
})

document.getElementById('previousplay').addEventListener('click', ()=>{
    if (songindex <= 0 ) {
        songindex = 9;
    }
    else {
    songindex -= 1;
    }
    mainplaysongname.innerText = songs[songindex].songname;
    audiosong.currentTime=0;
    audiosong.src = `songs/${songindex}.mp3`;
        audiosong.play();
        mainplay.classList.remove('fa-circle-play');
        mainplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
})


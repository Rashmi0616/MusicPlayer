 let ms=new Audio('Audio/1.mp3');
 let PlayButton = document.getElementById('PlayButton');
 let wave = document.getElementById('wave');
 let poster_play_side = document.getElementById('poster_play_side');
 let title = document.getElementById('title');
 PlayButton.addEventListener('click', ()=>{
       if (ms.paused || ms.currentTime<=0 ) {
           ms.play();
           wave.classList.add('active1');
           PlayButton.classList.remove('bi-play-fill');
           PlayButton.classList.add('bi-pause-fill');
         } 
         else {
             ms.pause();
             wave.classList.remove('active1');
             PlayButton.classList.add('bi-play-fill');
             PlayButton.classList.remove('bi-pause-fill');
             
            
         }
   });
   
    function playl(){
        var element=document.body;
        element.classList.toggle("dark-mode");
    // document.getElementById("playl").value="Dark mode";

    }
    // function playd(){
    //     var e=document.body;
    //     e.classList.toggle("dark-mode");
    // }




    const songs=[
    
        {
            id: '1',
            songName: `Maiya Teri Jai Jaikar <br>
            <div class="subtitle"i> Arijit Singh</div>`,
            poster: "img/Maiya teri Jai Jaikar.jpg"
        },
    
        {
        
            id: '2',
            songName: ` On My Way<br>
            <div class="subtitle">Alan Walker</div>`,
            poster: "img/On My way.jpg"
        },
        {
            id: '3',
            songName: `Let Me Love You<br>
            <div class="subtitle">Justin Bieber</div>`,
            poster: "img/img11 let me love you.jpg",
        },
        {
            id: '4',
            songName: `Nacho Nacho <br>
            <div class="subtitle">Mohit chauhan</div>`,
            poster: "img/nacho nacho.jpg",
        },
        {
            id: '5',
            songName: `Matargasti <br>
            <div class="subtitle">Mohit chauhan</div>`,
            poster: "img/img1 matargasti.jpg",
        },
        {
            id: '6',
            songName: `Agar Tum Sath Ho <br>
            <div class="subtitle">Arijit Singh&Tulsi Kumar</div>`,
            poster: "img/Agar tum Sath Ho.jpg",
        },
        {
            id: '7',
            songName: `Lamborghini<br>
            <div class="subtitle">The Doorbeen</div>`,
            poster: "img/Lamborghini.jpg",
        },
        {
            id: '8',
            songName: `Namo Namo <br>
            <div class="subtitle">Amit Trivedi</div>`,
            poster: "img/Namo namo.jpg",
        },
        {
            id: '9',
            songName: `Scars To Your Beautiful<br>
            <div class="subtitle">Alessia Cara</div>`,
            poster: "img/Scars to your beautiful.png",
        },
        {
            id: '10',
            songName: `Teri Mitti<br>
            <div class="subtitle">B Praak</div>`,
            poster: "img/Teri Mitti.jpg",
        },
        {
            id: '11',
            songName: `Faded <br>
            <div class="subtitle">Alan Walker</div>`,
            poster: "img/Faded.png",
        },
        {
            id: '12',
            songName: `Phir Bhi Dil Hai Hindustani <br>
            <div class="subtitle">Udit Narayan</div>`,
            poster: "img/Phir Bhi Dil Hai Hindustani.jpg",
        },
        {
            id: "13",
            songName: `Dekha Hazaro Dafa <br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "img/img4   Rustom-Hindi-.jpg",
        },
        {
            id: "14",
            songName: `Dilbaro <br>
            <div class="subtitle">Harshdeep Kaur, Shankar</div>`,
            poster: "img/Dilbaro.jpg",
        },
        {
            id: "15",
            songName: `Jo Bheji Thi Dua <br>
            <div class="subtitle">Arijit Singh</div>`,
            poster: "img/img6 jo bheji thi duaa.jpg",
        },
        {
            id: "16",
            songName: `High Rated Gabru <br>
            <div class="subtitle">Guru Randhawa</div>`,
            poster: "img/High Rated Gabru.jpg",
        },
        {
            id: "17",
            songName: `Coke Studio(Afreen Afreen) <br>
            <div class="subtitle">Rahat Fateh Ali Khan, Momina Mustehsan</div>`,
            poster: "img/coke studio 17.jpg",
        },
        {
            id: "18",
            songName: `O Saaki Saaki <br>
            <div class="subtitle">Neha Kakkar</div>`,
            poster: "img/O saaki saaki.jpg",
        },
        {
            id: "19",
            songName: `Jagga Jiteya <br>
            <div class="subtitle">Daler Mehndi</div>`,
            poster: "img/img5 jagga jiteya.jpg",
        },
        {
            id: "20",
            songName: `Nainowalon Ne <br>
            <div class="subtitle">Neeti Mohan</div>`,
            poster: "img/Nainowale Ne.jpg",
        }        
    ]
    
    Array.from(document.getElementsByClassName('songItems')).forEach((e,i)  =>{

        e.getElementsByTagName('img')[0].src= songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
    });

    

    let pop_s_Left = document.getElementById('pop_s_left');
    let pop_s_Right = document.getElementById('pop_s_right');
    let pop_song = document.getElementsByClassName('pop_song')[0];

    pop_s_Right.addEventListener('click', ()=>{
        pop_song.scrollLeft += 330;
    });
    pop_s_Left.addEventListener('click', ()=>{
        pop_song.scrollLeft -= 330;
    });



    let pop_artist_left = document.getElementById('pop_artist_left');
    let pop_artist_right = document.getElementById('pop_artist_right');
    let Artists_s = document.getElementsByClassName('Artists_s')[0];

    pop_artist_right.addEventListener('click', ()=>{
        Artists_s.scrollLeft += 330;
    });
    pop_artist_left.addEventListener('click', ()=>{
        Artists_s.scrollLeft -= 330;
    });


    const makeAllBackground =() =>{
        Array.from(document.getElementsByClassName('songItems')).forEach((el)=>{
            el.style.background='none';
        });
    }

    const makeAllPlay =() =>{
        Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
            el.classList.add('bi-play-circle');
            el.classList.remove('bi-pause-circle');
        });
    }


    let index=0;
     
    Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
        e.addEventListener('click',(el)=>{
            index =el.target.id;
            console.log(index);
            ms.src = `Audio/${index}.mp3`;
            poster_play_side.src=songs[index-1].poster;
            ms.play();
            wave.classList.add('active1');
            PlayButton.classList.remove('bi-play-fill');
            PlayButton.classList.add('bi-pause-fill');
            title.innerHTML=songs[index-1].songName;
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItems'))[index-1].style.background= 'gray' ;
            makeAllPlay();
            el.target.classList.remove('bi-play-circle');
            el.target.classList.add('bi-pause-circle');
        });
    
    });


    let currentStart = document.getElementById('currentStart');
    let currentEnd = document.getElementById('currentEnd');
    let seek =document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot = document.getElementsByClassName('dot');

    ms.addEventListener('timeupdate', ()=>{
        let ms_curr = ms.currentTime;// check current time of music
        let ms_dur = ms.duration;//check current duration of music
        // console.log(ms_curr);

        let min1 = Math.floor(ms_dur / 60);
        let sec1 = Math.floor(ms_dur % 60);
      // console.log(min1);
        if(sec1 < 10){
         sec1=`0${sec1}`;
      }
      
        currentEnd.innerText = `${min1}:${sec1}`;
       
        let min2 = Math.floor(ms_curr / 60)
        let sec2 =Math.floor(ms_curr % 60)
        
        if(sec2 < 10){
            sec2=`0${sec2}`;
         }
         
        currentStart.innerHTML =  `${min2}:${sec2}`;
        let progressBar =parseInt((ms_curr / ms_dur ) * 100)         //because we dont want floot  value
         seek.value = progressBar;
        //  console.log(seek.value);
        let seekbar =seek.value;
        bar2.style.width =`${seekbar}%`;
        dot.style.left = `${seekbar}%`;

    });
    seek.addEventListener('change',()=>{
        ms.currentTime = seek.value * ms.duration /100;

    });

    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change',()=>{

        if(vol.value ==0){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
        }
        if(vol.value > 0)
        {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }
        if(vol.value >50)
        {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        }
        let vol_a =vol.value;
        vol_bar.style.width =`${vol_a}%`;
        vol_dot.style.left=`${vol_a}%`;
        ms.volume =vol_a / 100;
    });
     

    let back = document.getElementById( 'back');
    let next = document.getElementById( 'next');
  

    back.addEventListener('click',()=>{
        index -=1;

        if(index <1)
        {
            index =Array.from(document.getElementsByClassName('songItems')).length;

        }
        ms.src = `Audio/${index}.mp3`;
        poster_play_side.src=songs[index-1].poster;
        ms.play();
        wave.classList.add('active1');
        PlayButton.classList.remove('bi-play-fill');
        PlayButton.classList.add('bi-pause-fill');
        title.innerHTML=songs[index-1].songName;
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index-1].style.background= 'gray' ;
        makeAllPlay();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');


    });
    

    next.addEventListener('click', ()=>{
        index++;
    
        if(index>Array.from(document.getElementsByClassName('songItems')).length)
          {
            index =1;
          }

        ms.src = `Audio/${index}.mp3`;
        poster_play_side.src=songs[index-1].poster;
        ms.play();
        wave.classList.add('active1');
        PlayButton.classList.remove('bi-play-fill');
        PlayButton.classList.add('bi-pause-fill');
        title.innerHTML=songs[index-1].songName;
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index-1].style.background= 'gray' ;
        makeAllPlay();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');

    })

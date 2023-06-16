
//displaying alarm
let disp_time = document.getElementById('disp_time'); 

setInterval(()=> {
   

   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();
   let d = new Date().getDay()
   let am = h >= 12 ? 'PM' : 'AM';

   // convert 24hr clock to 12hr clock
   if(h > 12){
       h = h-12;
   }
   // add zero before single digit time
   h = (h<10) ? '0' + h : h;
   m = (m<10) ? '0' + m : m;
   s = (s<10) ? '0' + s : s;


  disp_time.innerHTML = `${h} : ${m} : ${s} ${am}`;


},1000);

// accessing alarmData and checking with current time and manipulating dom

var alarmData = JSON.parse(localStorage.getItem('alarmData'));
console.log(alarmData);

let display = document.querySelector('#display');

let list = document.createElement('ul');
list.className = 'alarm-lists'

alarmData.map((e)=>{
   let lists = document.createElement('li');
   let para = document.createElement('p');
   para.className = 'para';

   let button = document.createElement('button');
   button.innerHTML = 'Delete' ;
   button.className = 'del-button' ;

   para.innerHTML = ` ${e['hours']} : ${e['minutes']} : ${e['seconds']} ${e['ampm']} `;

   lists.append(para, button);
   list.appendChild(lists);

});

display.appendChild(list);


// accessing alarmData and checking with current time and manipulating dom
var audio = new Audio('./audio/ringtone.mp3');

setInterval(() => {
    let currentTime = ` ${disp_time.innerHTML} `;
  
    for (let i of alarmData) {
        let alarmTime = ` ${i['hours']} : ${i['minutes']} : ${i['seconds']} ${i['ampm']} `;
        console.log(currentTime === alarmTime);
    }
  
    alarmData.forEach((e) => {
        let alarmTime = ` ${e['hours']} : ${e['minutes']} : ${e['seconds']} ${e['ampm']} `;
      
        if (currentTime === alarmTime) {
            audio.play();
            alert('alarm playing');
        }
    });
}, 1000);


// Pause button functionality

//    let isPaused = true;
    const pauseButton = document.querySelector('.pause-button').addEventListener('click',()=>{
        audio.pause();
    });
    


setInterval(()=> {
    let disp_time = document.getElementById('disp_time');
    let disp_date = document.getElementById('disp_date');
    

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDay()
    let am = h >= 12 ? 'PM' : 'AM';

    let dy =  new Date().getDate();
    var mn=new Date().getMonth()+1;  
    var yr=new Date().getFullYear();  

    // convert 24hr clock to 12hr clock
    if(h > 12){
        h = h-12;
    }
    // add zero before single digit time
    h = (h<10) ? '0' + h : h;
    m = (m<10) ? '0' + m : m;
    s = (s<10) ? '0' + s : s;

    dy = (dy<10) ? '0' + dy : dy;
    mn = (mn<10) ? '0' + mn : mn;


   disp_time.innerHTML = `${h} : ${m} : ${s} ${am}`;

   disp_date.innerHTML = `${dy} - ${mn} - ${yr%100}`;
 

},1000);


// creating select options for alarm

let add_hr=document.getElementById('add-hr');

for(let i=1 ; i<=12 ; i++){
    let opt = document.createElement('option');
    opt.value = i;
    opt.value = (opt.value <10) ? '0' + opt.value  : opt.value ;
    opt.innerHTML = opt.value;
    add_hr.appendChild(opt);
}

let add_mn=document.getElementById('add-mn');

for(let i=0 ; i<60 ; i++){
    let opt = document.createElement('option');
    opt.value = i;
    opt.value = (opt.value <10) ? '0' + opt.value  : opt.value ;
    opt.innerHTML = opt.value;
    add_mn.appendChild(opt);
}

let add_sc=document.getElementById('add-sc');

for(let i=0 ; i<60 ; i++){
    let opt = document.createElement('option');
    opt.value = i;
    opt.value = (opt.value <10) ? '0' + opt.value  : opt.value ;
    opt.innerHTML = opt.value;
    add_sc.appendChild(opt);
}

// storing and displaying alarm time

document.querySelector('form').addEventListener('submit',myAlarm);
var alarmArr = JSON.parse(localStorage.getItem('alarmData')) || [];

function myAlarm(){
    event.preventDefault();
    var add_hr = document.querySelector('#add-hr').value;
    var add_mn = document.querySelector('#add-mn').value;
    var add_sc = document.querySelector('#add-sc').value;
    var am_pm = document.querySelector('#am-pm').value;

    var alarmObj = {
        hours : add_hr,
        minutes : add_mn,
        seconds : add_sc,
        ampm : am_pm
    };

    alarmArr.push(alarmObj);
    
    // storing into localStorage

    localStorage.setItem('alarmData',JSON.stringify(alarmArr))
}

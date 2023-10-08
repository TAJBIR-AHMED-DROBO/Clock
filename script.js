
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");





setInterval(()=>{
   
let d = new Date();

  let hou = d.getHours();
  let minut = d.getMinutes();
  let secon = d.getSeconds();
   let hrota = 30*hou + minut/2 + secon/120;
   let mrota = 6*minut + secon/10;
   let srota = 6*secon;

    hour.style.transform =`rotate(${hrota}deg)`;
    minute.style.transform = `rotate(${mrota}deg)`;
    second.style.transform = `rotate(${srota}deg)`;



},1000)
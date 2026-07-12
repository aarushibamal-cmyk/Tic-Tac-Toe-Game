const second = document.querySelector('#seconds')
let minutes = document.querySelector('#minutes')
 let hour = document.querySelector('#hours')
setInterval(function(){
    let date = new Date()
second.innerHTML = String(date.getSeconds()).padStart(2,'0');
 hour.innerHTML = String(date.getHours()).padStart(2,'0');
minutes.innerHTML = String(date.getMinutes()).padStart(2,'0');
}, 1000)

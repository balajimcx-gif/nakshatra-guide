
const nakshatras = [
"Anusham",
"Ashwini",
"Avittam",
"Ayilyam",
"Bharani",
"Chithirai",
"Hastham",
"Karthigai",
"Kettai",
"Magham",
"Mirugasirisham",
"Moolam",
"Poosam",
"Pooradam",
"Pooram",
"Poorattadhi",
"Punarpoosam",
"Revathi",
"Rohini",
"Sadayam",
"Swathi",
"Thiruvathirai",
"Thiruvonam",
"Uthiradam",
"Uthiram",
"Uthirattadhi",
"Visakam"
];
const grid=document.getElementById('grid');

nakshatras.forEach(n=>{
 let d=document.createElement('div');
 d.className='card';
 d.innerText=n;
 d.onclick=()=>loadForecast(n);
 grid.appendChild(d);
});

function loadForecast(n){
 fetch('forecasts.json')
 .then(r=>r.json())
 .then(data=>{
   document.getElementById('forecast').innerHTML='<h3>'+n+'</h3><p>'+data[n].forecast+'</p>';
   document.getElementById('attention').innerHTML='<h3>'+n+'</h3><p>'+data[n].attention+'</p>';
 });
}

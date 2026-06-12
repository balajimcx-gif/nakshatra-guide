const forecasts = {

"Anusham":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Ashwini":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Avittam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Ayilyam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Bharani":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Chithirai":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Hastham":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Karthigai":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Kettai":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Magham":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Mirugasirisham":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Moolam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Poosam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Pooradam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Pooram":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Poorattadhi":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Punarpoosam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Revathi":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Rohini":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Sadayam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Swathi":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Thiruvathirai":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Thiruvonam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Uthiradam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Uthiram":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Uthirattadhi":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
},

"Visakam":{
forecast:"Today's influences support steady progress and thoughtful action.",
attention:"Avoid rushing decisions and review important matters carefully."
}
};

const nakshatras = Object.keys(forecasts);

const grid = document.getElementById("grid");

nakshatras.forEach(n => {
    const d = document.createElement("div");
    d.className = "card";
    d.innerText = n;

    d.onclick = () => {
        document.getElementById("forecast").innerHTML =
            "<h3>"+n+"</h3><p>"+forecasts[n].forecast+"</p>";

        document.getElementById("attention").innerHTML =
            "<h3>"+n+"</h3><p>"+forecasts[n].attention+"</p>";
    };

    grid.appendChild(d);
});
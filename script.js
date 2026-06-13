const grid = document.getElementById("grid");

fetch("forecasts.json")
  .then(response => response.json())
  .then(forecasts => {

    const nakshatras = Object.keys(forecasts);

    nakshatras.forEach(n => {

      const card = document.createElement("div");
      card.className = "card";
      card.innerText = n;

      card.onclick = () => {

        document.getElementById("forecast").innerHTML =
          "<h3>" + n + "</h3><p>" +
          forecasts[n].forecast +
          "</p>";

        document.getElementById("attention").innerHTML =
          "<h3>" + n + "</h3><p>" +
          forecasts[n].attention +
          "</p>";
      };

      grid.appendChild(card);

    });

  })
  .catch(error => {

    console.error(error);

    document.getElementById("forecast").innerHTML =
      "<p>Unable to load forecasts.</p>";

  });
let acsend = document.getElementById("acsending");
acsend.addEventListener("click", acsendFunction);//när man klickar på sorterings knapparna så aktiverar den en funktion i detta fall acsendFunction

function acsendFunction() {
    renderGamesSteam();//kallar på renderGamesSteam
    async function renderGamesSteam() {
        let games = await fetchjsonSteamPriceA();//hämtar fetchjsonSteamPriceA som är min funktion för price:ascending
        let html = '';

        games.forEach(game => {//för varje spel så kör den denhär koden
          matte = Math.round(game.savings)//får fram procenten i heltal
            let htmlSegment = `<button type="button" class="list-group-item-steam">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-steam">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-steam');//skickar in till html dokumentet
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-steam");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på steam-sidan
        coll[i].addEventListener("click", function() {//öppna/gömma
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
      }
}
//repetativ kod :)
let decsend = document.getElementById("decsending");
decsend.addEventListener("click", descendFunction);

function descendFunction() {
    renderGamesSteam();
    async function renderGamesSteam() {
        let games = await fetchjsonSteamPriceD();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-steam">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-steam">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-steam');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-steam");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på steam-sidan
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
      }
}
let save = document.getElementById("saving");
save.addEventListener("click", saveFunction);

function saveFunction() {
    renderGamesSteam();
    async function renderGamesSteam() {
        let games = await fetchjsonSteamSaving();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-steam">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-steam">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-steam');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-steam");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på steam-sidan
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
      }
}
let dealR = document.getElementById("deal");
dealR.addEventListener("click", dealFunction);

function dealFunction() {
    renderGamesSteam();
    async function renderGamesSteam() {
        let games = await fetchjsonSteamDRate();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-steam">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-steam">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-steam');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-steam");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på steam-sidan
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
      }
}

async function fetchjsonSteam() {//fetchar "grund" sorteringen (den som syns när man öppnar sidan)
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonSteamPriceA() {//fetchar ascending sortering
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonSteamPriceD() {//fetchar descending sortering
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Price&desc=1';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonSteamSaving() {//fetchar störst % off
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonSteamDRate() {//fetchar Cheapsharks API egna "deal rating" + % off för bästa deals
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function renderGamesSteam() {
    let games = await fetchjsonSteam();
    let html = '';

    games.forEach(game => {
      matte = Math.round(game.savings)
        let htmlSegment = `<button type="button" class="list-group-item-steam">
                            <img src="${game.thumb}"
                            <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                            </button>
                            <div class="content-steam">
                            <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.list-group-steam');
    container.innerHTML = html;

    let coll = document.getElementsByClassName("list-group-item-steam");

  for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på steam-sidan
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  }

  renderGamesSteam();

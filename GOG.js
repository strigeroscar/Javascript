let acsend = document.getElementById("acsending");
acsend.addEventListener("click", acsendFunction);

function acsendFunction() {
    renderGamesGOG();
    async function renderGamesGOG() {
        let games = await fetchjsonGOGPriceA();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-GOG">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-GOG">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;

            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-GOG');
        container.innerHTML = html;
        let coll = document.getElementsByClassName("list-group-item-GOG");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på GOG-sidan
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
let decsend = document.getElementById("decsending");
decsend.addEventListener("click", descendFunction);

function descendFunction() {
    renderGamesGOG();
    async function renderGamesGOG() {
        let games = await fetchjsonGOGPriceD();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-GOG">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-GOG">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-GOG');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-GOG");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på GOG-sidan
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
    renderGamesGOG();
    async function renderGamesGOG() {
        let games = await fetchjsonGOGSaving();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-GOG">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-GOG">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-GOG');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-GOG");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på GOG-sidan
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
    renderGamesGOG();
    async function renderGamesGOG() {
        let games = await fetchjsonGOGDRate();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-GOG">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-GOG">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-GOG');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-GOG");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på GOG-sidan
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
async function fetchjsonGOG() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=7&upperPrice=15';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonGOGPriceA() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=7&sortBy=Price';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonGOGPriceD() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=7&sortBy=Price&desc=1';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonGOGSaving() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=7&sortBy=Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonGOGDRate() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=7&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function renderGamesGOG() {
    let games = await fetchjsonGOG();
    let html = '';

    games.forEach(game => {
      matte = Math.round(game.savings)
        let htmlSegment = `<button type="button" class="list-group-item-GOG">
                            <img src="${game.thumb}"
                            <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                            </button>
                            <div class="content-GOG">
                            <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                            </div>`;


        html += htmlSegment;
    });

    let container = document.querySelector('.list-group-GOG');
    container.innerHTML = html;

    let coll = document.getElementsByClassName("list-group-item-GOG");

  for (let i = 0; i < coll.length; i++) {
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

  renderGamesGOG();

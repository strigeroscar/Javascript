let acsend = document.getElementById("acsending");
acsend.addEventListener("click", acsendFunction);

function acsendFunction() {
    renderGamesHumble();
    async function renderGamesHumble() {
        let games = await fetchjsonHumblePriceA();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-humble">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-humble">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });
        let container = document.querySelector('.list-group-humble');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-humble");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Humble-sidan
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
    renderGamesHumble();
    async function renderGamesHumble() {
        let games = await fetchjsonHumblePriceD();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-humble">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-humble">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });
        let container = document.querySelector('.list-group-humble');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-humble");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Humble-sidan
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
    renderGamesHumble();
    async function renderGamesHumble() {
        let games = await fetchjsonHumbleSaving();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-humble">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-humble">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });
        let container = document.querySelector('.list-group-humble');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-humble");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Humble-sidan
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
    renderGamesHumble();
    async function renderGamesHumble() {
        let games = await fetchjsonHumbleDRate();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-humble">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-humble">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-humble');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-humble");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Humble-sidan
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
async function fetchjsonHumble() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=11&upperPrice=15';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonHumblePriceA() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Price';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonHumblePriceD() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Price&desc=1';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonHumbleSaving() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonHumbleDRate() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }

  async function renderGamesHumble() {
    let games = await fetchjsonHumble();
    let html = '';

    games.forEach(game => {
      matte = Math.round(game.savings)
        let htmlSegment = `<button type="button" class="list-group-item-humble">
                            <img src="${game.thumb}"
                            <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                            </button>
                            <div class="content-humble">
                            <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                            </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.list-group-humble');
    container.innerHTML = html;

    let coll = document.getElementsByClassName("list-group-item-humble");

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

  renderGamesHumble();

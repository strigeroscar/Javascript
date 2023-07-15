let acsend = document.getElementById("acsending");
acsend.addEventListener("click", acsendFunction);

function acsendFunction() {
    renderGamesEpic();
    async function renderGamesEpic() {
        let games = await fetchjsonEpicPriceA();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-epic">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-epic">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;


            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-epic');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-epic");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Epic-sidan
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
    renderGamesEpic();
    async function renderGamesEpic() {
        let games = await fetchjsonEpicPriceD();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-epic">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-epic">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-epic');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-epic");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Epic-sidan
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
    renderGamesEpic();
    async function renderGamesEpic() {
        let games = await fetchjsonEpicSaving();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-epic">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-epic">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-epic');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-epic");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Epic-sidan
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
    renderGamesEpic();
    async function renderGamesEpic() {
        let games = await fetchjsonEpicDRate();
        let html = '';

        games.forEach(game => {
          matte = Math.round(game.savings)
            let htmlSegment = `<button type="button" class="list-group-item-epic">
                                <img src="${game.thumb}"
                                <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                                </button>
                                <div class="content-epic">
                                <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                                </div>`;
            html += htmlSegment;
        });

        let container = document.querySelector('.list-group-epic');
        container.innerHTML = html;

        let coll = document.getElementsByClassName("list-group-item-epic");

      for (let i = 0; i < coll.length; i++) {//gör så att man kan "öppna" Ett spel och se information på Epic-sidan
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

async function fetchjsonEpic() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&upperPrice=15';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonEpicPriceA() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&sortBy=Price';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonEpicPriceD() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&sortBy=Price&desc=1';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonEpicSaving() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&sortBy=Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function fetchjsonEpicDRate() {
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }

  async function renderGamesEpic() {
    let games = await fetchjsonEpic();
    let html = '';

    games.forEach(game => {
      matte = Math.round(game.savings)
        let htmlSegment = `<button type="button" class="list-group-item-epic">
                            <img src="${game.thumb}"
                            <h2> ${game.title} ${game.salePrice}$ <del>${game.normalPrice}$</del><h2 id="percent">${matte}% OFF</h2></h2>

                            </button>
                            <div class="content-epic">
                            <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank" style="color:black" >Link to store</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim. Pretium nibh ipsum consequat nisl vel.</p>
                            </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.list-group-epic');
    container.innerHTML = html;

    let coll = document.getElementsByClassName("list-group-item-epic");

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

  renderGamesEpic();

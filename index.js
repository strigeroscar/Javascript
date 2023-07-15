async function fetchjsonMainSteam() {//mainskärm för att hämta spel från Steam
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10&sortBy+Savings';
    try {
      let res = await fetch(url);//försöker fetcha API
      return await res.json();
  } catch (error) {//Error ifall något går fel
      console.log(error);
  }
  }
  async function renderPrev1() {
    let games = await fetchjsonMainSteam();//hämtar json så man kan arbeta med den
    let html = '';

    games.forEach(game => {//för varje spel den hämtar så kör den foreach
      matte = Math.round(game.savings)// % deal
        let htmlSegment = `<li class="first-item">
        <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank"><p> ${game.title} - ${game.salePrice}$ <del>${game.normalPrice}$</del> - ${matte}% OFF</p></a>
                        </li>    `;
//skapar html taggar med json information från apin

        html += htmlSegment;
    });
    let container = document.querySelector('#firstli');// placerar i documentet
    container.innerHTML = html;
  }
  renderPrev1()
  //////////////////////////////////////////////////////////////////////////////////
  async function fetchjsonMainGog() {//mainskärm för att hämta spel från GOG
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=10&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function renderPrev2() {
    let games = await fetchjsonMainGog();
    let html = '';

    games.forEach(game => {
      matte = Math.round(game.savings)
        let htmlSegment = `<li class="second-item">
        <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank"><p> ${game.title} - ${game.salePrice}$ <del>${game.normalPrice}$</del> - ${matte}% OFF</p></a>
                        </li>    `;


        html += htmlSegment;
    });
    let container = document.querySelector('#secondli');
    container.innerHTML = html;
  }
  renderPrev2()

  ///////////////////////////////////////////////////////////////////////////////////
  async function fetchjsonMainHum() {//mainskärm för att hämta spel från humblebundle
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=11&pageSize=10&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function renderPrev3() {
    let games = await fetchjsonMainHum();
    let html = '';

    games.forEach(game => {
      matte = Math.round(game.savings)
        let htmlSegment = `<li class="third-item">
        <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank"><p> ${game.title} - ${game.salePrice}$ <del>${game.normalPrice}$</del> - ${matte}% OFF</p></a>
                        </li>    `;


        html += htmlSegment;
    });
    let container = document.querySelector('#thirdli');
    container.innerHTML = html;
  }
  renderPrev3()
/////////////////////////////////////////////////////////////////////////////////////
async function fetchjsonMainEpic() {//mainskärm för att hämta spel från epic games
    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=25&pageSize=10&sortBy+Savings';
    try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
  }
  async function renderPrev4() {
    let games = await fetchjsonMainEpic();
    let html = '';

    games.forEach(game => {

      matte = Math.round(game.savings)
        let htmlSegment = `<li class="fourth-item">
        <a href="https://www.cheapshark.com/redirect?dealID=${game.dealID}" target="_blank"><p> ${game.title} - ${game.salePrice}$ <del>${game.normalPrice}$</del> - ${matte}% OFF</p></a>
                        </li>    `;


        html += htmlSegment;
    });
    let container = document.querySelector('#fourthli');
    container.innerHTML = html;
  }
  renderPrev4()

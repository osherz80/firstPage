//https://axios-http.com/docs/intro

axios.get('https://data.nba.net/data/10s/prod/v1/2019/players.json')
  .then(function (response) {
    let randomIndex = [52,230,145,67];
    let players = response.data.league.standard;
    let cards = document.querySelectorAll(`.card`);

    let i = 0;
    cards.forEach((card)=>{
        card.querySelector(".cardName span").innerHTML = "name: "+players[randomIndex[i]].temporaryDisplayName;
        card.querySelector("button").style.backgroundImage = "url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/"+players[randomIndex[i]].personId+".png)"
        card.querySelector(".jersy").innerHTML = "jersey: "+ players[randomIndex[i]].jersey;
        card.querySelector(".pos").innerHTML ="pos: "+ players[randomIndex[i]].pos;
        i++;
    })
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

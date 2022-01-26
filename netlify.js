// // https://www.npmjs.com/package/axios

const showDropMenu = () => {
    document.querySelector(".dropdown_menue").classList.toggle("hide");
}




axios.get('http://data.nba.net/data/10s/prod/v1/2019/players.json')  
.then((response) => {
    let players = response.data.league.standard;
    let randomArr = [30,450,35,75];
    let cards = document.querySelectorAll(".card");
    console.log(response);


    let i = 0;
    cards.forEach((card)=>{
        card.querySelector(".cardName span").innerHTML = players[randomArr[i]].temporaryDisplayName;
        card.querySelector(".circle button").style.backgroundImage = `url(https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${players[randomArr[i]].personId}.png`});
        card.querySelector(".jersy").innerHTML = players[randomArr[i]].jersey;
        card.querySelector(".pos").innerHTML = players[randomArr[i]].pos;

        i++;
        console.log(card);
   
   
    
       
    })

 .catch((error)=>{
     console.log(error);
 })    
  






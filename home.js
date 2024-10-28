let apiURL = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=b9155a74e860183ecff756fd806ba5da"
const sportList = document.querySelector(".Sports_tonight")
const nonDoup = document.getElementById("nonDoup") 
const leage = document.getElementById("leaugeName")
const stats = document.getElementById("stats")
let data; 

function retriveData(){
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    populateDate(data);
    // You can now use the JSON data
  })
  .catch(error => console.error('Error fetching JSON:', error));

}

//!retriving data locally 
function populateDate(data){
     //?storing the non doups in a set 
    let list = new Set();
    let i = 0; 
    console.log(data);
    while(data){
        console.log('hello');
        // if(!(list.has(data[i].sport_key))){
        //     list.add(data[i].sport_key)
        // }
        i++; 
    }
console.log(list);
    populateSelectMenu(list);

}

const populateSelectMenu = (list) =>{
 
    //?adding select options from the api for what is on tonight
    list.forEach( elem =>{
        console.log(elem);
        const league = document.createElement('option')
        league.value = elem; 
        league.text = elem; 
        nonDoup.append(league)
    }

    );

}

//TODO when the user selects the league it takes it to the leauge page 
nonDoup.onchange = function (){
    const selectedOption = nonDoup.value; 
    setLeague(selectedOption);   

}
const setLeague = (selectedOption) =>{
    let games = new Set();
    for(let i = 0; i < data.length; i++){
        if((selectedOption == (data[i].sport_key))){
            games.add(data[i])
        }

    }
    showGames(games);
    console.log(games);

}

const showGames = (games) =>{
    games.forEach(game =>{
        // console.log(game.bookmakers);
       game.bookmakers.forEach(bookmaker => {
            // console.log(bookmaker.markets);
            bookmaker.markets.forEach(market =>{
                // console.log(market);
                console.log(market.outcomes);
            })
       })
    })

}



retriveData()
// .catch(error => console.error(error));




//!For fetching the data live with the api, but i dont want to run out of my calls for the free trial 
// async function retriveData(){
    
// const response = await fetch('./data.json'); 
//     if(!response.ok){
//         throw new Error("NA");
//     }
//      data = await response.json();
//     console.log(data);

    //?storing the non doups in a set 
    // let list = new Set();

    // //? adding the leages that are on tonigth into a list
    // for(let i = 0; i < data.length; i++){
    //     if(!(list.has(data[i].sport_key))){
    //         list.add(data[i].sport_key)
    //     }

    // }
    // populateSelectMenu(list);
    

// }
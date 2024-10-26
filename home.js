let apiURL = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=d1954e19d0c4e0d00515d9e4290548df"
const sportList = document.querySelector(".Sports_tonight")
const nonDoup = document.getElementById("nonDoup") 
const leage = document.getElementById("leaugeName")
const stats = document.getElementById("stats")
let data; 

async function retriveData(){
    
const response = await fetch(apiURL); 
    if(!response.ok){
        throw new Error("NA");
    }
     data = await response.json();
    console.log(data);

    //?storing the non doups in a set 
    let list = new Set();

    //? adding the leages that are on tonigth into a list
    for(let i = 0; i < data.length; i++){
        if(!(list.has(data[i].sport_key))){
            list.add(data[i].sport_key)
        }

    }
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
    console.log(games);

}


retriveData().catch(error => console.error(error));


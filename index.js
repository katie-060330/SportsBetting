let apiURL = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=d1954e19d0c4e0d00515d9e4290548df"
const sportList = document.querySelector(".Sports_tonight")
const nonDoup = document.getElementById("nonDoup") 

async function retriveData(){
    
const response = await fetch(apiURL); 
    if(!response.ok){
        throw new Error("NA");
    }
    const data = await response.json();
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
 
    list.forEach( elem =>{
        console.log(elem);
        const league = document.createElement('option')
        league.value = elem; 
        league.text = elem; 
        nonDoup.append(league)
    }

    );

}

retriveData().catch(error => console.error(error));


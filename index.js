let apiURL = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=d1954e19d0c4e0d00515d9e4290548df"
const sportList = document.querySelector(".Sports_tonight")

async function test(){
    
const response = await fetch(apiURL); 
    if(!response.ok){
        throw new Error("NA");
    }
    const data = await response.json();
    console.log(data);


    let list; 

    for(let i = 0; i < data.length; i++){
        console.log(data[i].sport_key);
        const sportingEvent = document.createElement("li"); 
        sportingEvent.textContent = data[i].sport_key; 
        sportList.append(sportingEvent);

    }

    // function renderFavorites() {
    //     favCitiesList.innerHTML = "";
    //     favCities.forEach(city => {
    //       const cityItem = document.createElement("li");
    //       cityItem.textContent = city;
    //       favCitiesList.appendChild(cityItem);
    //     });
    //   }


}

test().catch(error => console.error(error));
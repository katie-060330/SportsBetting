let apiURL = "https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=b9155a74e860183ecff756fd806ba5da"

async function fetchdata(){
    const response = await fetch(apiURL); 
    if(!response.ok){
        throw new Error("NA");
    }
     data = await response.json();
    console.log(data);
    saveDataToFile(data);

}


const fs = require('fs');

function saveDataToFile(data) {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data successfully saved to data.json');
    }
  });
}

fetchdata();

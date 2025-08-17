var info;
// function checkthisout(){

// fetch('travel_recommendation_api.json')
// .then(response => {
//     if(!response.ok){
//         throw new Error("Cannot fetch details");
//     }
//     return response.json();
// })
// .then(data=>{
//     info = data;
//     console.log(data);
// })
// .catch(error=>{
//     console.error("Error: ", error);
// })

// }
// checkthisout();

function clearPage(){
    document.getElementById('inputText').value = "";
    document.getElementById('output').innerHTML = "";
}

let pointer;

function formSubmit(event){
    event.preventDefault();
    const inputText = document.getElementById("inputText").value.toLowerCase();
    console.log(inputText);
    if(inputText === "beach" || inputText === "beaches") pointer = 0;
    else if(inputText === "country" || inputText === "countries") pointer = 1;
    else if(inputText === "temple" || inputText === "temples") pointer = 2;
    else pointer = 3;
    console.log(pointer);

    if(pointer === 0){
    fetch('travel_recommendation_api.json')
    .then(res => res.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        data.beaches.forEach(beach => {
            const beachInfo = `
                <h2>${beach.name}</h2>
                <p>${beach.description}</p>
                <img src="${beach.imageUrl}" alt="${beach.name}" style="max-width:300px;">
            <br><br>`;
            outputDiv.innerHTML += beachInfo;
        });
    })
    .catch(err => {
        console.log("error", err);
        document.getElementById('output').textContent = 'Error loading data!';
    });
}

     if(pointer === 1){
    fetch('travel_recommendation_api.json')
    .then(res => res.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        data.countries.forEach(country => {
            const countryInfo = `
                <h2>${country.name}</h2>
                <p>${country.cities[0].name}<br></p>
                <p>${country.cities[0].description}</p>
                <img src="${country.cities[0].imageUrl}" alt="${country.cities[0].name}" style="max-width:300px;">
            <br><br>`;
            outputDiv.innerHTML += countryInfo;
        });
    })
    .catch(err => {
        console.log("error", err);
        document.getElementById('output').textContent = 'Error loading data!';
    });
}
    if(pointer === 2){
    fetch('travel_recommendation_api.json')
    .then(res => res.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';
        data.temples.forEach(temple => {
            const templeInfo = `
                <h2>${temple.name}</h2>
                <p>${temple.description}</p>
                <img src="${temple.imageUrl}" alt="${temple.name}" style="max-width:300px;">
            <br><br>`;
            outputDiv.innerHTML += templeInfo;
        });
    })
    .catch(err => {
        console.log("error", err);
        document.getElementById('output').textContent = 'Error loading data!';
    });
}
    if(pointer === 3){
        console.log("Enter proper destination (Temples/Country/Beach)");
    }
}

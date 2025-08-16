function checkthisout(){

fetch('travel_recommendation_api.json')
.then(response => {
    if(!response.ok){
        throw new Error("Cannot fetch details");
    }
    return response.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.error("Error: ", error);
})

}
checkthisout();


function formSubmit(){
    event.preventDefault();
    var inputText = document.getElementById("inputText").value.toLowerCase();
    console.log(inputText);
}
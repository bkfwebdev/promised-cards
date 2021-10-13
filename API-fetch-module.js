const axios = require ("axios");


/*
Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
(Make sure you get back JSON by including the json query key, specific to this API. Details.
*/
let myNumber = 13;
axios.get(`http://numbersapi.com/${myNumber}/?json`).then((response)=>{
    console.log(response);
});


/*
Figure out how to get data on multiple numbers in a single request. 
Make that request and when you get the data back, put all of the number facts on the page.
*/
let thePrimes = [1,3,5,7]; 
axios.get(`http://numbersapi.com/${thePrimes}/?json`).then((response)=>{
    console.log(response);
});



/*
Use the API to get 4 facts on your favorite number. 
Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
*/

const getAfact = (number)=>{
    axios.get(`http://numbersapi.com/${number}/?json`).then((response)=>{
    return response.data.text;
});

}

for (let index = 0 ; index <= 3 ; index++){
    console.log(getAfact(myNumber));
}


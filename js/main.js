/*https://github.com/Resilient-Labs/simple-api-bootcamp > Get data from API and display in some way. This is open-ended. This should be an app that has a function or use case; something people can utilize.
Documentation: https://www.attackontitanapi.com/docs/characters
*/

document.querySelector('button').addEventListener('click', changeQuote)

function changeQuote() {

    const url = `https://api.attackontitanapi.com/characters`


    fetch(url,
        // {
        //     mode: 'no-cors',
        //     // headers: {
        //     //     'Access-Control-Allow-Origin':'*',
        //     //     'Content-Type':'application/json'
        //     // },
        //  }
    )
    .then(res => res.json()) // parse resopnse as JSON. res name doesn't matter. Taking response and formatting it in JSON object
    .then(data => { // Outputting a series of things
        console.log(data)

        randomPerson = Math.floor(Math.random() * data.results.length)
        console.log(randomPerson)

        console.log(data.results[randomPerson].name)
        console.log(data.results[randomPerson].alias)
        console.log(data.results[randomPerson].img)
        console.log(data.results[randomPerson].occupation)
        console.log(data.results[randomPerson].species)

        // console.log(data.results) // array
        // console.log(data.results[0].name)
        // console.log(data.results[0].alias)
        // console.log(data.results[0].img)
        // console.log(data.results[0].occupation)
        // console.log(data.results[0].species)
        // console.log(data.results[0].height)

        // for (let i=0; i <= data.results.length; i++) {
        //     console.log(data.results[i][Math.floor(Math.random() * data.results.length)]);
        // }

        
        document.querySelector('img').src = data.results[randomPerson].img
        document.getElementById('name').innerText = data.results[randomPerson].name
        document.getElementById('alias').innerText = data.results[randomPerson].alias
        document.getElementById('occupation').innerText = data.results[randomPerson].occupation
        document.getElementById('species').innerText = data.results[randomPerson].species

        if (data.results[randomPerson].alias === unknown) {
            document.querySelector('img').src.style.display = 'none';
        } else {
            console.log()
        }

    })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });

}


/*The unhandledRejection event is emitted whenever a promise rejection is not handled*/
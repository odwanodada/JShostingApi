const listContainer = document.getElementById('pokemon-list');
const url = 'https://pokeapi.co/api/v2/pokemon';
fetch(url)
.then((data) => data.json()) //Arrow function
.then((data) => { console.log(data); //console.log(data)
    let pokemon = data.results;      //let user = data
    return pokemon.map((poke) => {   /* return users.map((user) => {let card = createNode('div');card.class}) */
        let li = createNode('li');
        li.innerHTML = poke.name;
        append(listContainer,li);
    })


})


function createNode(element){
    return document.createElement(element);
}

function append(parent,child){
    return parent.appendChild(child);
}

//Exercise const url = 'https://randomuser.me/api?results=10'
    //console.log(data)
    //let user = data
/* return users.map((user) => {let card = createNode('div');
                                card.classList.add('card');
                                let content = <h2> ${user.name}</h2>
                                              <p>${user.gender}</p>
                                
                                card.innerHTML = content;
                                append(cardContainer;card);              
                            
                            
                            }) */

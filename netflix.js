const parentlist = document.querySelector('.parentlist')
const section = document.querySelector('.container')

parentlist.addEventListener('click', function(e){
    if (e.target.tagName=== 'LI'){
        const inside=e.target.querySelector('.inside')
        inside.classList.toggle("hidden")
    }

})

async function fetchData() {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data)
    data.results.forEach(function (character) {
        const container = document.createElement('div')
        container.classList.add('char-card')
        container.innerHTML = `
            <div class="cardimg"><img src="${character.image}"/></div>
            <h2>${character.name}</h2>
            <h3>${character.gender}</h3>
            ${character.origin.name}
            ${character.location.name}
            ${character.status}
            ${character.species}
        `

        section.appendChild(container)
    })
}

fetchData()

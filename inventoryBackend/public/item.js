const itemsList = document.getElementById('itemsList');
const searchBar = document.getElementById('searchBar');
let newItemsList = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredItems = newItemsList.filter((item) => {
        return (
            item.cs.toLowerCase().includes(searchString) ||
            item.equipment_type.toLowerCase().includes(searchString) ||
            item.serial.toLowerCase().includes(searchString)
        );
    });
    displayItems(filteredItems);
});

/* searchBar.addEventListener('keyup', async (e) => {
    const searchString = e.target.value.toLowerCase();
    const res = await fetch(`http://localhost:3000/games?title=${e}`);
    const filteredGames = await res.json();
    displayGames(filteredGames);
}); */

const loadItems = async () => {
    try {
        const res = await fetch('http://localhost:3000/items');
        newItemsList = await res.json();
        displayItems(newItemsList);
    } catch (err) {
        console.error(err);
    }
};


const displayItems = (items) => {
    const htmlString = items
        .map((item) => {
            return `
            <li class="container">
                <div class="row" style="margin: 20px; background-color: #343a40;">
                    <div class="m-3 col-sm-6 col-md-5"> 
                        <h5 id="gameTitle" style="color: white;">${item.cs}</h5>
                        <p id="gameText" style="color: white;">${item.equipment_type}</p>
                        <button class="btn btn-secondary"><span id="gameGenre" style="color: white;">${item.serial}</span></button>
                        <p style="color:grey; margin-top: 10px;">Publisher: ${item.status}</p>
                    </div>
                    <div class="col-sm-12 col-md-2 d-flex justify-content-center align-items-center"> 
                        <a id="" href="${item.company}" style="margin: 5px;" class="game-url btn btn-success">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nO2SMQqAMAxF36hX0lGH3k7F6zlVHPQScckgolRoMgh98KEE+h+khYIRFTAAm2bQmRkTILeMloJDSxug1fPuIWi9BKP3impgvpTPOjNHNG7IbwQ9sGg6S0EA1ocfIx8TteOVmFEuF8kruSuQ1P0ikNSK3B85ZEpi6psWuHMCIyR3EebGVo8AAAAASUVORK5CYII=">
                        </a> 
                    </div>
                </div>
            </li>
        `;
        })
        .join('');
        itemsList.innerHTML = htmlString;
};

loadItems();


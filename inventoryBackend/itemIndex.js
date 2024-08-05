const Items = class {
    async getAllItems() {
        const url = 'http://localhost:3000/items';
        const response = await fetch(url);
        const items = await response.json();
        return items;
    }

    async seachGamesByCS(cs) {
        const url = `http://localhost:3000/items?cs=${cs}`;
        const response = await fetch(url);
        const items = await response.json();
        return items;
    }

}


async function showItems() {
    try {
        var items = await itemsService.getAllItems();
    }
    catch (error) {
        console.log(error);
        showErrorMessage(error);
        return;
    }

    for (let item of items) {
        addItemToPage(item);
    }
}

// async function searchByTitle(title) {
//     try {
//         var games = await gamesService.seachGamesByTitle(title);
//     }
//     catch (error) {
//         console.log(error);
//         showErrorMessage(error);
//         return;
//     }

//     for (let game of games) {
//         addGameToPage(game);
//     }
// }

// function addItemToPage(item) {
//     var template = document.getElementById("game-template").content.cloneNode(true);
//     template.querySelector('#gameTitle').innerText = game.title;
//     template.querySelector('#gameText').innerText = game.short_description;
//     template.querySelector('#gameGenre').innerText = game.genre;
//     template.querySelector('#gameImg').src = game.thumbnail;
//     template.querySelector('.game-url').href = game.game_url;

//     document.querySelector('#games-list').appendChild(template);
// }

function showErrorMessage(error) {
    var errorMessageElement = document.getElementById("error-messages");
    errorMessageElement.style.display = "block";
    errorMessageElement.innerText = "Error: " + error.message;
}
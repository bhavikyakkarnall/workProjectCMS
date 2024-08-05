export default class ItemsService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getItem() {
        let response = await fetch(this.baseUrl + '/items/');
        let items = await response.json();
        return items;
    }
}
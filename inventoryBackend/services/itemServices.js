import itemList from '../data-storage/item.js';
let items = itemList;

class Item {
    constructor(id,equipment_type,cs,status,company,tech,serial,phone,sim,po,firmware, config)
    {
        this.id = id,
        this.equipment_type = equipment_type,
        this.cs = cs,
        this.status = status,
        this.company = company,
        this.tech = tech,
        this.serial = serial,
        this.phone = phone,
        this.sim = sim,
        this.po = po,
        this.firmware = firmware, 
        this.config = config
    }
}

function getAllItems() {
    return items;
}

function getItemByCS(cs){
    const item = items.find((item) => item.cs === cs);
    return item;
}

function createItem(id,equipment_type,cs,status,company,tech,serial,phone,sim,po,firmware, config){
    const newItem = new Product(id,equipment_type,cs,status,company,tech,serial,phone,sim,po,firmware, config);
    items.push(newItem);
    return newItem;
}

function updateItem(){
    const index = items.findIndex((item) => item.cs === cs);
    if (index !== -1){
        items[index].id = id,
        items[index].equipment_type = equipment_type,
        items[index].cs = cs,
        items[index].status = status,
        items[index].company = company,
        items[index].tech = tech,
        items[index].serial = serial,
        items[index].phone = phone,
        items[index].sim = sim,
        items[index].po = po,
        items[index].firmware = firmware, 
        items[index].config = config
        return items[index];
    }
    return null;
}

function deleteItem(cs) {
    const index = items.findIndex((item) => item.cs === cs);
    if (index !== -1) {
        return items.splice(index, 1)[0];
    }
    return null;
}

export default {
    Item,
    getAllItems,
    getItemByCS,
    createItem,
    updateItem,
    deleteItem
}
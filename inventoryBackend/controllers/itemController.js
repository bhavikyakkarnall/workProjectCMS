import Item from '../services/itemServices.js';

export default class ItemController {

    getAllItems(req,res) {
        try{
            const { id, equipment_type, cs, status, company, tech, serial, phone, sim, po, firmware, config} = req.query;
            let items = null;

            if (equipment_type) {
                items = Item.getItemByEquipmentType(equipment_type);
            } 
            else if (cs) {
                items = Item.getItemByCS(cs);
            }
            else if (status) {
                items = Item.getItemByStatus(status);
            }
            else if (company) {
                items = Item.getItemByCompany(company);
            }
            else if (tech) {
                items = Item.getItemByTech(tech);
            }
            else if (serial) {
                items = Item.getItemBySerial(serial);
            }
            else if (phone) {
                items = Item.getItemByPhone(phone);
            }
            else if (sim) {
                items = Item.getItemBySIM(sim);
            }
            else if (po) {
                items = Item.getItemByPO(po);
            }
            else if (firmware) {
                items = Item.getItemByFirmware(firmware);
            }
            else if (config) {
                items = Item.getItemByConfig(config);
            }
            else {
                items = Item.getAllItems();
            }

            if(items.length === 0) {
                throw new Error('Error: No Games to Display');
            }

            res.status(200)
            res.json(items)

        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    getItemByCS(req,res) {
        try{
            let item = Item.getItemByCS(parseInt(req.params.cs))
            if(item == null){
                throw new Error('Error: No items to display')
            }
           res.status(200)
           res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    createItem(req,res) {
        try{
            let item = Item.createProduct(req.params.id, req.params.equipment_type, req.params.cs, req.params.status, req.params.company, req.params.tech, req.params.serial, req.params.phone, req.params.sim, req.params.po, req.params.firmware, req.params.config)
            if(item == null){
                throw new Error('Error: No games to display')
            }
            console.log(item)
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    updateItem(req,res) {
        try{
            let item = Item.createProduct(req.params.id, req.params.equipment_type, req.params.cs, req.params.status, req.params.company, req.params.tech, req.params.serial, req.params.phone, req.params.sim, req.params.po, req.params.firmware, req.params.config)
            if(item == null){
                throw new Error('Error: No games to display')
            }
            console.log(item)
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

    deleteItem(req,res) {
        try{
            let item = Item.deleteProduct(parseInt(req.params.cs))
            if(item == null){
                throw new Error('Error: No items to display')
            }
            console.log(item)
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({error: err.message})
        }
    }

}
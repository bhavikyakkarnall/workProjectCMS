import { Router } from "express";
var router = Router();
import ItemsController from '../controllers/itemController.js';

const itemsController = new ItemsController();

router.get('/', (req, res) => {
    itemsController.getAllItems(req, res);
});

router.get('/:cs', (req, res) => {
    itemsController.getItemByCS(req, res);
});

router.post('/', (req, res) => {
    itemsController.createItem(req. res);
});

router.put('/:cs', (req, res) => {
    itemsController.updateItem(req, res);
});

router.delete('/:cs', (req, res) => {
    itemsController.deleteItem(req, res);
})
//
// router.get('/publisher/:publisher', (req, res) => {
//     itemsController.getItemByPublisher(req, res);
// });

// router.get('/genre/:genre', (req, res) => {
//     itemsController.getGameByGenre(req, res);
// });

// router.get('/title/:title', (req, res) => {
//     itemsController.getGameByTitle(req, res);
// });  

export default router;
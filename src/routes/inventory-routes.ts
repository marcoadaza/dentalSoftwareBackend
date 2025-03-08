import { Router } from 'express';
import { InventoryController } from '../controllers/inventory';

const router = Router();
const inventoryController = new InventoryController();

router.get('/inventories', inventoryController.getInventory.bind(inventoryController));
router.get('/inventory/:id', inventoryController.getInventoryById.bind(inventoryController)); // Added :id parameter
router.post('/inventory', inventoryController.addInventory.bind(inventoryController));
router.delete('/inventory/:id', inventoryController.deleteInventory.bind(inventoryController)); // Added :id parameter
router.put('/inventory/:id', inventoryController.updateInventory.bind(inventoryController)); // Added :id parameter

export default router;
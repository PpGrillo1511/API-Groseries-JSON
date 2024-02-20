import { Router } from "express";
import { 
    getAll, 
    getOne, 
    insertOne,
    updateOne,
    deleteOne 
} from "../controllers/products.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get('/', getAll);

// Ruta para obtener un solo producto por código de barras
router.get('/:barcode', getOne);

// Ruta para insertar un producto
router.post('/insertOne', insertOne);

// Ruta para actualizar un producto
router.put("/updateOne/:barcode", updateOne)

// Ruta para eliminar un producto
router.delete("/deleteOne/:barcode", deleteOne);


export default router;

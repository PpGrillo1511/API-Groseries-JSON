import ProductDAO from "../dao/products.dao.js";
const productsController = {}

export const getAll = (req, res) =>{
    ProductDAO.getAll()
    .then(result=>res.json(result))
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}

export const getOne = (req, res) => {
    const barcode = req.params.barcode;
    ProductDAO.getOne(barcode)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const insertOne = (req, res) => {
    ProductDAO.insertOne(req.body)
        .then(result => res.json({
            status: "Product saved"
        }))
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const updateOne = (req, res) => {
    const barcode = req.params.barcode;
    const product = req.body;
    ProductDAO.updateOne(barcode, product)
       .then(result => {
        if (result) {
        res.json(result);
    } else {
        res.json({
            status: "Product not found"
        });
    }})
       .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const deleteOne = (req, res) => {
    const barcode = req.params.barcode;
    ProductDAO.deleteOne(barcode)
      .then(result => {
        if (result) {
        res.json({
            status: "Product deleted"
        });
    } else {
        res.json({
            status: "Product not found"
        });
    }})
      .catch(err => res.json({
            status: "Server unavailable"
        }));
};
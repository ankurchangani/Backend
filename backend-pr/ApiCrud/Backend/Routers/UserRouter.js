const express = require ('express');
const router = express.Router();
const UserController = require('../controller/userController');


router.post('/add' , UserController.AddData);
router.get('/get' , UserController.GetData);   
router.get('/:id' , UserController.GetDataById); 
router.put('/:id' , UserController.UpdateData);
router.delete('/:id', UserController.DeleteData);

module.exports = router
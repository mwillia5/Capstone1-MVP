const express=require('express');
const router=express.Router();
const employeesController=require('../controllers/employeesController')

router.get('/all',employeesController.getAllEmployeesController);
router.get('/all/role/:idRole', employeesController.getEmployeesByRoleController);

module.exports = router
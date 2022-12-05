const express=require('express')
const router=express.Router();

const customerController=require('../controllers/customersController');


router.get('/all',customerController.getCustomerList);

router.get('/PaymentTerms/all', customerController.getPaymentTermsController)

module.exports = router;
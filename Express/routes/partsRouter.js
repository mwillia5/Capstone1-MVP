const express=require('express');
const router=express.Router();

const partController=require('../controllers/partsController')

router.get('/allQuotesForm',partController.getPartsListQuoteForm);



module.exports=router;
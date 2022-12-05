const express=require('express')
const router=express.Router();
const quotesController=require('../controllers/quotesController')

router.post('/submitnew',quotesController.submitNewQuoteController);
router.get('/emailformat/:idQuote',quotesController.getEmailQuoteByIdController);
router.get('/all',quotesController.getAllQuotesController);

module.exports=router;
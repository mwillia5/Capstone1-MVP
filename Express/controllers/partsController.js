const partsService=require('../services/partsService');

const getPartsListQuoteForm=async (req, res, next)=>{
    let partsList=await partsService.getAllPartsQuoteFormat();
    return res.send(JSON.stringify(partsList));
}

module.exports={getPartsListQuoteForm}
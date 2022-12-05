const {submitNewQuote,getEmailQuoteByID,getAllQuotes} = require('../services/quotesService')
let newQuote=require('../models/quote/newQuoteModel')
let EmailQuote=require('../models/quote/QuoteFormatted')
//const newQuoteFactory=require('../models/quote/newQuoteFactory')

const submitNewQuoteController=async (req,res,next)=>{
    console.log('Got post request..')
    //console.log(req);
    console.log(req.body);
    newQuote.idCustomer=Number(req.body.idCustomer);
    newQuote.Date=req.body.Date;
    newQuote.PartNumber=req.body.PartNumber;
    newQuote.AlternatePartNumber=req.body.AlternatePartNumber;
    newQuote.MinimumCharge=Number(req.body.MinimumCharge).toFixed(5);
    newQuote.EachPrice=Number(req.body.EachPrice).toFixed(5);
    newQuote.Surcharge=Number(req.body.Surcharge).toFixed(5);
    newQuote.PMFactor=Number(req.body.PMFactor).toFixed(8);
    newQuote.PMetal=req.body.PMetal;
    newQuote.Notes=req.body.Notes;
    newQuote.DateExpires=req.body.DateExpires;
    newQuote.Finish=req.body.Finish;
    newQuote.LeadTime=Number(req.body.LeadTime).toFixed(0);
    newQuote.QuotedBy=Number(req.body.QuotedBy);
    newQuote.CustomerContact=req.body.CustomerContact;
    newQuote.idPaymentTerms=Number(req.body.idPaymentTerms);
    newQuote.QuoteFilepath=req.body.QuoteFilepath;
    //console.log("new Quote:")
    //console.log(newQuote);
    let [insertId] = await Promise.all([submitNewQuote(newQuote)]);
    newQuote.idQuote=insertId.toString();
    res.status(201).json(newQuote)
}

const getEmailQuoteByIdController=async (req,res,next)=>{
    const idQuote=Number(req.params.idQuote)
    if(idQuote===-1){
     res.status(404).send()
    }
    const quoteToEmail=await getEmailQuoteByID(idQuote);
    res.status(200).send(quoteToEmail);
}

const getAllQuotesController=async (req,res,next)=>{
    let quotes=await getAllQuotes();
    res.status(200).send(quotes);
}

module.exports={submitNewQuoteController,getEmailQuoteByIdController,getAllQuotesController};
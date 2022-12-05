//export let getPaymentTerms = undefined;
const {getAllCustomers, getPaymentTerms}=require('../services/customersService');

const getCustomerList= async (req, res, next) =>{
    let customerList= await getAllCustomers();
    //console.log(customerList);
    return res.send(JSON.stringify(customerList));
}
const getPaymentTermsController=async (req,res,next)=>{
    let paymentTerms=await getPaymentTerms();
    //console.log(paymentTerms);
    return res.json(paymentTerms);
}

module.exports={getCustomerList,getPaymentTermsController}
const pool=require('../models/databaseConnection')
const QuoteFormatted = require("../models/quote/QuoteFormatted");

async function submitNewQuote(quote){
    let conn;
    let newQuote;
    try{
        conn=await pool.getConnection();
        let sqlString="INSERT INTO OrderManagementSystem.Quote (`idCustomer`,`Date`,`PartNumber`,`AlternatePartNumber`,`MinimumCharge`,`EachPrice`,`Surcharge`,`PMFactor`,`PMetal`,`Notes`,`DateExpires`,`Finish`,`LeadTime`,`QuotedBy`,`CustomerContact`,`idPaymentTerms`,`QuoteFilepath`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        let valArray=[quote.idCustomer,quote.Date,quote.PartNumber,quote.AlternatePartNumber,quote.MinimumCharge,quote.EachPrice,quote.Surcharge,quote.PMFactor,quote.PMetal,quote.Notes,quote.DateExpires,quote.Finish,quote.LeadTime,quote.QuotedBy,quote.CustomerContact,quote.idPaymentTerms,quote.QuoteFilepath];
        const results=await conn.query(sqlString,valArray)
        newQuote=results;
        console.log(results)
    } catch(e){
        console.log(e)
    } finally{
        if(conn)await conn.end();
        return newQuote.insertId;
    }
}
async function getEmailQuoteByID(id){
    let conn;
    let quote;
    try{
        conn=await pool.getConnection();
        let sqlString="SELECT idQuote,Date,PartNumber,AlternatePartNumber,MinimumCharge,EachPrice,Surcharge,PMFactor,PMetal,Notes,DateExpires,Finish,LeadTime,CustomerContact,concat(FirstName,' ',LastName) as QuotedByName, Customers.Name as CustomerName,PaymentTermsValue FROM OrderManagementSystem.Quote INNER JOIN Employees.Employee ON Quote.QuotedBy=Employees.Employee.idEmployee INNER JOIN Customers ON Quote.idCustomer=Customers.idCustomer LEFT JOIN PaymentTerms ON Quote.idPaymentTerms=PaymentTerms.idPaymentTerms WHERE idQuote=?;"
        const result=await conn.query(sqlString,id);
        //console.log('result:');
        //console.log(result);
        quote=new QuoteFormatted(result[0]);
        console.log("This is an email quote object: ")
        console.log(quote);
    } catch (e){
        console.log(e);
    } finally {
        if(conn) await conn.end();
        return quote;
    }
}
async function getAllQuotes(){
    let conn;
    let quotes=[];
    try{
        conn=await pool.getConnection();
        const sqlString="SELECT idQuote,Date,PartNumber,AlternatePartNumber,MinimumCharge,EachPrice,Surcharge,PMFactor,PMetal,Notes,DateExpires,Finish,LeadTime,CustomerContact,concat(FirstName,' ',LastName) as QuotedByName, Customers.Name as CustomerName,PaymentTermsValue FROM OrderManagementSystem.Quote INNER JOIN Employees.Employee ON Quote.QuotedBy=Employees.Employee.idEmployee INNER JOIN Customers ON Quote.idCustomer=Customers.idCustomer LEFT JOIN PaymentTerms ON Quote.idPaymentTerms=PaymentTerms.idPaymentTerms ORDER BY Date desc, idQuote desc;"
        const result=await conn.query(sqlString);
        //console.log(result);
        for(let item in result){
            quotes.push(new QuoteFormatted(result[item]))

        }
        //console.log(quotes);
    } catch (e) {
        console.log(e)
    } finally {
        if(conn) await conn.end()
        return quotes;
    }
}

module.exports={submitNewQuote,getEmailQuoteByID,getAllQuotes};

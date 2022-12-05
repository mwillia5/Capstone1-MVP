const pool=require('../models/databaseConnection');

async function getAllCustomers(){
    let conn;
    let customers;
    try{
        conn=await pool.getConnection();
        const rows=await conn.query("SELECT * FROM Customers");
        customers= rows
        //console.log(customers);
    } catch (err){

    }
    finally {
        if(conn) await conn.end();
        return customers;
    }
}

async function getPaymentTerms(){
    let conn;
    let paymentTerms;
    try{
        conn=await pool.getConnection();
        const rows=await conn.query('SELECT * FROM OrderManagementSystem.PaymentTerms;')
        paymentTerms=rows;
    } catch(err){
        console.log(err);
    } finally {
        if(conn) await conn.end();
        return paymentTerms;
    }
}

module.exports={getAllCustomers, getPaymentTerms}
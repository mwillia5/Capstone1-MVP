const pool=require('../models/databaseConnection')

async function getAllPartsQuoteFormat(){
    let conn;
    let parts;
    try {
        conn=await pool.getConnection();
        const rows=await conn.query('SELECT PartNumber,LegacyNumber FROM OrderManagementSystem.PartList WHERE itemIsActive=1 ORDER BY PartNumber;')
        parts=rows;
    }catch (err){

    }finally {
        if(conn) await conn.end();
        return parts;
    }
}

module.exports.getAllPartsQuoteFormat=getAllPartsQuoteFormat;
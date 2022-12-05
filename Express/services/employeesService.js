const pool=require('../models/databaseConnection')

async function getEmployeesByRole(idRole){
    let conn;
    let employees;
    try{
        conn=await pool.getConnection();
        const rows=await conn.query("SELECT * FROM Employees.Employee WHERE idRole=?;", [idRole])
        //console.log(rows);
        employees=rows;
    } catch (err){

    } finally {
        if(conn) await conn.end();
        return employees;
    }
}
async function getAllEmployees(){
    let conn
    let employees
    try{
        conn=await pool.getConnection();
        const rows=await conn.query("SELECT * FROM Employees.Employee")
        //console.log(rows)
        employees=rows;

    } catch (err){

    } finally {
       if(conn) await conn.end()
        return employees;
    }
}

module.exports.getEmployeesByRole=getEmployeesByRole;
module.exports.getAllEmployees=getAllEmployees;
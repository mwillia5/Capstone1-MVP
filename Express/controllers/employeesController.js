const {getEmployeesByRole, getAllEmployees}=require('../services/employeesService');

const getEmployeesByRoleController=async (req, res, next)=>{
    let employeeList=await getEmployeesByRole(req.params.idRole);
    //console.log(employeeList);
    return res.json(employeeList);
}

const getAllEmployeesController=async (req, res, next)=>{
    let employeeList=await getAllEmployees();
    //console.log(employeeList);
    return res.json(employeeList);
}

module.exports={getEmployeesByRoleController,getAllEmployeesController};
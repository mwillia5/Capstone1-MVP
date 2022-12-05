import {useEffect, useState} from "react";
import URI from '../../../utils/ExpressLocation'

const EmployeeDropdown =(props)=>{
    const [employees,setEmployees]=useState([])
    let uriString=''
    if(props.idRole){
        uriString=URI+'/employees/all/role/'+props.idRole;
    } else{
        uriString=URI+'/employees/all'
    }
    useEffect(()=>{
        fetch(uriString)
            .then(response=>response.json())
            .then(data=>{
                const results=data.map(element=>element);
                setEmployees([...results])
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    return(
        <tr>
            <td className={'FormCellAlignRight'}>
                <label htmlFor={'EmployeeSelect'} >Quoted By:</label>
            </td>
            <td className={'FormCellAlignLeft'}>
                <select id={'EmployeeSelect'} name={'QuotedBy'} onChange={props.updateFormDataE} required={true} >
                    {!employees ? '' : employees.map(employee=>{
                        if(employee.idEmployee===2){
                            return (
                                <option key={employee.idEmployee} value={employee.idEmployee} selected={true} >{`${employee.FirstName} ${employee.LastName}`}</option>
                            )
                        } else
                        return (
                            <option key={employee.idEmployee} value={employee.idEmployee} >{`${employee.FirstName} ${employee.LastName}`}</option>
                        )
                    })}
                </select>
            </td>
        </tr>
    )
}

export default EmployeeDropdown
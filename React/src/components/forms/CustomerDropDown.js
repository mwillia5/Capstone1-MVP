import {useEffect, useState} from "react";
import URI from '../../../src/utils/ExpressLocation'
const CustomerDropDown=(props)=>{
    const [customerList, setCustomerList]=useState([]);
    useEffect(()=>{
        //fetch('http://10.0.0.3:3001/customers/all')
        fetch(URI+'/customers/all')
            .then(response=>response.json())
            .then(data=>{
                const results=data.map((element)=>{return element})
                setCustomerList([...results]);
            })
    },[])

    return (
        <tr>
            <td className={'FormCellAlignRight'}>
                <label htmlFor={'CustomerDropdown'}>Customer:</label>
            </td>
            <td className={'FormCellAlignLeft'}>
                <select name={'idCustomer'} id={'CustomerDropdown'} onChange={props.updateFormDataE} required={true}>
                <option disabled={true} value={''} selected={true}>--select a customer--</option>
                {!customerList ? '' : customerList.map((element)=>{
                    return (
                        <option key={element.Name} value={element.idCustomer}>{element.Name}</option>
                    )
                })}
            </select>
            </td>
        </tr>
    )
}

export default  CustomerDropDown;


/*

<input list={'customer-list'} id={'customer-data-list-selection'} name={'customer'} />
            <datalist id={'customer-list'}>
                {!customerList ? 'loading' : customerList.map((element)=>{return(<option key={element.idCustomer} data-idcustomer={element.idCustomer} value={element.Name}>{element.Name}</option>)}) }
            </datalist>

 */
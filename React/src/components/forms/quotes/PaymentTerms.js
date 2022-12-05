import {useState, useEffect} from "react";
import URI from '../../../utils/ExpressLocation'

const PaymentTerms=(props)=>{

    const [paymentTerms, setPaymentTerms]= useState([])
    useEffect(()=>{
        fetch(URI+'/customers/PaymentTerms/all')
            .then(response=>response.json())
            .then(data=>{
                setPaymentTerms(data);
            })
    },[])
    return(
        <tr>
            <td className={'FormCellAlignRight'}>
                <label htmlFor={'PaymentTerms'}>Payment Terms:</label>
            </td>
            <td className={'FormCellAlignLeft'}>
                <select id={"PaymentTerms"} name={"idPaymentTerms"} onChange={props.updateFormDataE} required={true}>
                    <option key={'Junk'} disabled={true} selected={true} value={''}>--Select an option</option>
                    {paymentTerms.map(element=>{
                        return <option key={element.idPaymentTerms} value={element.idPaymentTerms} >{element.PaymentTermsValue}</option>
                    } )}
                </select>
            </td>
        </tr>
    )
}

export default PaymentTerms;
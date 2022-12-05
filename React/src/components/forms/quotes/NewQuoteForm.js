import PartListQuoteForm from "./PartListQuoteForm";
import CustomerDropDown from "../CustomerDropDown";
import {useEffect, useState} from "react";
import "./NewQuoteForm.css"
import EmployeeDropdown from "../employees/EmployeeDropdown";
import PaymentTerms from "./PaymentTerms";
import URI from '../../../utils/ExpressLocation'
import QuoteModalEmailText from "./QuoteModalEmailText";
const dayjs=require('dayjs')


const NewQuoteForm=(props)=>{
    let thisDate=new Date();
    //let expDate=new Date();
    //expDate.setFullYear(expDate.getFullYear()+1)
    let expDate=dayjs().add(6,'month');
    //console.log(expDate);
    //console.log(thisDate,expDate)
    const [formData,setFormData]=useState({idCustomer:null, Date: thisDate.toISOString().substring(0,10) , PartNumber:null, AlternatePartNumber:null, MinimumCharge:0.00000, EachPrice:0.00000, Surcharge: 0.00000, PMFactor:0.00000000, PMetal:null, Notes: null, DateExpires: expDate.toISOString().substring(0,10), Finish:null, LeadTime: null, QuotedBy: "2", CustomerContact:null, idPaymentTerms: null, QuoteFilepath: null })

    const [formEditable,setFormEditable]=useState(true)
    const [newidQuote,setNewidQuote]=useState(-1)

    const updateFormDataKV=(key,value)=>{

        setFormData({...formData, [key]:value})
    }
    const updateFormDataE=(e)=>{
        let k=e.target.name;
        let v=e.target.value;
        updateFormDataKV(k,v);
    }
    const updateFormDataO=(obj)=>{
        setFormData({...formData, ...obj});
    }

    const submitForm=(e)=>{
        e.preventDefault()
        let blanks=[]
        for(const [key,value] of Object.entries(formData)){
            if(value===null || value==='' || value==0){
                blanks.push(key)
            }
        }
        let formStatus=window.confirm("You left the following blank:\n"+blanks+'\n OK?');
        if(!formStatus)return;
        setFormEditable(false);
        console.log(blanks)
        console.log(JSON.stringify(formData));
        fetch(URI+'/quotes/submitnew',{
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(formData),
        })
            .then(response=> {
                if(response.status==201){
                    console.log("Insert successful");
                }
                return response.json()
            })
            .then(data=> {
                console.log(data)
                if(data.idQuote){
                    setNewidQuote(data.idQuote);
                }
            })
            .catch(error=>{
                console.log(error)
                setFormEditable(true)
            })
    }



    return(
        <>

            <QuoteModalEmailText idQuote={newidQuote} />

            <div id={'NewQuoteForm'}>
                <fieldset disabled={!formEditable}>
                    <legend>New Quote Entry:</legend>
                    <form onSubmit={submitForm}>
                        <table>
                            <tbody>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'Date'}>Date:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"date"} id={'Date'} name={'Date'} defaultValue={thisDate.toISOString().substring(0,10)} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <CustomerDropDown updateFormDataKV={updateFormDataKV} updateFormDataE={updateFormDataE} />
                            <PartListQuoteForm updateFormDataKV={updateFormDataKV} updateFormDataE={updateFormDataE} updateFormDataO={updateFormDataO} />
                            <EmployeeDropdown idRole={2} updateFormDataE={updateFormDataE} />
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'MinimumCharge'} >Minimum/Lot Charge:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"number"} defaultValue={0.00000} step={0.00001} min={0} id={'MinimumCharge'} name={'MinimumCharge'} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'EachPrice'}>Each Price:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"number"} defaultValue={0.00000} step={0.00001} min={0} id={'EachPrice'} name={'EachPrice'} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'Surcharge'}>Surcharge:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"number"} defaultValue={0.00000} step={0.00001} min={0} id={'Surcharge'} name={'Surcharge'} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'PMFactor'}>PM Factor:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"number"} defaultValue={0.00000000} step={0.00000001} min={0} max={99} id={'PMFactor'} name={'PMFactor'} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'PMetal'}>Precious Metal:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"text"} placeholder={'Gold/Silver/Leave blank if none'} id={'PMetal'} name={'PMetal'} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'Notes'}>Notes:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <textarea id={'Notes'} name={"Notes"} placeholder={'Any extra notes..'} rows={3} cols={50} onChange={updateFormDataE}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'DateExpires'}>Expiration Date:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"date"} id={'DateExpires'} name={'DateExpires'} defaultValue={expDate.toISOString().substring(0,10)} onChange={updateFormDataE} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'Finish'}>Finish:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"text"} id={'Finish'} name={'Finish'} placeholder={'Finish'} onChange={updateFormDataE} required={true} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'CustomerContact'}>Customer Contact:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={"text"} id={'CustomerContact'} name={'CustomerContact'} onChange={updateFormDataE} placeholder={'Name & Email of customer contact'} required={true} />
                                </td>
                            </tr>
                            <tr>
                                <td className={'FormCellAlignRight'}>
                                    <label htmlFor={'LeadTime'} >Lead Time:</label>
                                </td>
                                <td className={'FormCellAlignLeft'}>
                                    <input type={'number'} id={'LeadTime'} name={'LeadTime'} placeholder={'Lead time in calendar days'} min={0} step={1} onChange={updateFormDataE} required={true} />
                                </td>
                            </tr>
                            <PaymentTerms updateFormDataE={updateFormDataE} />
                            <tr>
                                <td className={'FormCellAlignRight'}>Filepath:</td>
                                <td className={'FormCellAlignLeft'}><input type={"text"} maxLength={400} name={'QuoteFilepath'} placeholder={'Full filepath in Parts directory'} onChange={updateFormDataE}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className={'FormCellAlignLeft'}><input type={"submit"} /> </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </fieldset>
            </div>
        </>
    )
}

export default NewQuoteForm;
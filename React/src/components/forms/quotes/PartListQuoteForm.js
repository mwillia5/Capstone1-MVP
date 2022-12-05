import {useEffect, useState, useRef} from "react";
import URI from '../../../utils/ExpressLocation'


const PartListQuoteForm =(props)=>{

    const [itemList,setItemList]=useState([])
    const [alternatePN,setAlternatePN]=useState('')
    const alternatePNTextInput=useRef(null);
    const [show, setShow]=useState(false);


    useEffect(()=>{
        //fetch('http://10.0.0.3:3001/parts/allQuotesForm')
        fetch(URI+'/parts/allQuotesForm')
            .then(response=>response.json())
            .then(data=>{
                const results=data.map(element=>element);
                setItemList([...results])
            })
    },[])



    const updateAlternatePN=(e)=>{
        const val=e.target.value;
        //console.log(val);
        let item=itemList.filter(element=>{
            return element.PartNumber===val
        })
        //console.log(item);
        if(item.length==0)item[0]=''
        let {LegacyNumber}=item[0];
        //const newLN=item[0].LegacyNumber ? item[0].LegacyNumber : '';
        if(!LegacyNumber) LegacyNumber='';
        //console.log(newLN);
        setAlternatePN(LegacyNumber);
        //console.log(alternatePNTextInput)
        alternatePNTextInput.current.value=LegacyNumber;
        //console.log(e);
        //props.updateFormDataKV(e.target.name, e.target.value);
        //props.updateFormDataKV('AlternatePartNumber', LegacyNumber)
        let newObj={PartNumber: e.target.value, AlternatePartNumber: LegacyNumber};
        props.updateFormDataO(newObj);

    }

    function updateAlternatePartNumber(e) {
        props.updateFormDataE(e);
    }

    return (
        <>
            <tr>
                <td className={'FormCellAlignRight'}><label htmlFor={'part-list-data-list-selection'}>Part Number:</label></td>
                <td className={'FormCellAlignLeft'}>
                    <input list={'part-list'} id={'part-list-data-list-selection'} name={'PartNumber'} onChange={updateAlternatePN} autoComplete={'off'} placeholder={'Search for existing or enter new part'} required={true} />
                    <datalist id={'part-list'}>
                        {!itemList ? '' : itemList.map(element=>{
                            return (<option key={element.PartNumber.toString()} value={element.PartNumber.toString()} label={element.LegacyNumber}></option>  )
                        })}
                    </datalist>
                </td>
            </tr>

            <tr>
                <td className={'FormCellAlignRight'}>
                    <label htmlFor={'AlternatePartNumber'}>Alternate PN:</label>
                </td>
                <td className={'FormCellAlignLeft'}>
                    <input type={"text"} id={'AlternatePartNumber'} name={'AlternatePartNumber'} placeholder={'Legacy/Alt PN'} ref={alternatePNTextInput} onChange={props.updateFormDataE}/>
                </td>
            </tr>
        </>
    )
}

export default PartListQuoteForm;
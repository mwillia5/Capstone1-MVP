import React, {useEffect, useState} from 'react';
import URI from '../../../utils/ExpressLocation';
import './QuoteModalEmailText.css';

const QuoteModalEmailText=(props)=>{

    const thisQuoteID=props.idQuote;
    const [quoteResponse, setQuoteResponse]=useState();

    useEffect(()=>{
        //let resp={};
        if(thisQuoteID===-1) {
            setQuoteResponse();
            return
        };
        fetch(URI+'/quotes/emailformat/'+thisQuoteID)
            .then(response=>response.json())
            .then(data=>setQuoteResponse(data))
            .catch(e=> {
                console.log(e)
                setQuoteResponse()
            });
    },[thisQuoteID])

    return(
        <>
            {!quoteResponse ? '' :
                <table className={'ModalTable'}>
                    <tbody>
                    {quoteResponse.idQuote ? <tr><td className={'TableCellAlignRight'}>Quote #:</td><td className={'TableCellAlignLeft'}>{quoteResponse.idQuote}</td></tr> : ''}
                    {quoteResponse.CustomerName ? <tr><td className={'TableCellAlignRight'}>Customer:</td><td className={'TableCellAlignLeft'}>{quoteResponse.CustomerName}</td></tr> : ''}
                    {quoteResponse.Date ? <tr><td className={'TableCellAlignRight'}>Date Issued:</td><td className={'TableCellAlignLeft'}>{quoteResponse.Date}</td></tr> : ''}
                    {quoteResponse.PartNumber ? <tr><td className={'TableCellAlignRight'}>Part Number:</td><td className={'TableCellAlignLeft'}>{quoteResponse.PartNumber}</td></tr> : ''}
                    {quoteResponse.AlternatePartNumber ? <tr><td className={'TableCellAlignRight'}>Alternate PN:</td><td className={'TableCellAlignLeft'}>{quoteResponse.AlternatePartNumber}</td></tr> : ''}
                    {quoteResponse.MinimumCharge!=0 ? <tr><td className={'TableCellAlignRight'}>Minimum Charge:</td><td className={'TableCellAlignLeft'}>${quoteResponse.MinimumCharge}</td></tr> : ''}
                    {quoteResponse.EachPrice!=0 ? <tr><td className={'TableCellAlignRight'}>Each Price:</td><td className={'TableCellAlignLeft'}>${quoteResponse.EachPrice}</td></tr> : ''}
                    {quoteResponse.Surcharge!=0 ? <tr><td className={'TableCellAlignRight'}>Surcharge:</td><td className={'TableCellAlignLeft'}>${quoteResponse.Surcharge}</td></tr> : ''}
                    {quoteResponse.PMFactor!=0 ? <tr><td className={'TableCellAlignRight'}>PM Factor:</td><td className={'TableCellAlignLeft'}>{quoteResponse.PMFactor} tr oz / 1 part</td></tr> : ''}
                    {quoteResponse.Notes ? <tr><td className={'TableCellAlignRight'}>Notes:</td><td className={'TableCellAlignLeft'}>{quoteResponse.Notes}</td></tr> : ''}
                    {quoteResponse.Finish ? <tr><td className={'TableCellAlignRight'}>Finish:</td><td className={'TableCellAlignLeft'}>{quoteResponse.Finish}</td></tr> : ''}
                    {quoteResponse.LeadTime ? <tr><td className={'TableCellAlignRight'}>Lead Time:</td><td className={'TableCellAlignLeft'}>{quoteResponse.LeadTime} days</td></tr> : ''}
                    {quoteResponse.PaymentTermsValue ? <tr><td className={'TableCellAlignRight'}>Payment Terms:</td><td className={'TableCellAlignLeft'}>{quoteResponse.PaymentTermsValue}</td></tr> : ''}
                    {quoteResponse.DateExpires ? <tr><td className={'TableCellAlignRight'}>Expires:</td><td className={'TableCellAlignLeft'}>{quoteResponse.DateExpires}</td></tr> : ''}
                    {quoteResponse.QuotedByName ? <tr><td className={'TableCellAlignRight'}>Quoted By:</td><td className={'TableCellAlignLeft'}>{quoteResponse.QuotedByName}</td></tr> : ''}
                    {quoteResponse.CustomerContact ? <tr><td className={'TableCellAlignRight'}>Contact:</td><td className={'TableCellAlignLeft'}>{quoteResponse.CustomerContact}</td></tr> : ''}


                    </tbody>
                </table>}
        </>
    )
}
export default QuoteModalEmailText;
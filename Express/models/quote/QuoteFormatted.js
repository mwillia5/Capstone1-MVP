const dayjs=require('dayjs');

class QuoteFormatted {
    constructor(props) {
        this.idQuote=props.idQuote;
        this.Date=dayjs(props.Date).format('YYYY-MM-DD');
        //this.Date=props.Date;
        this.PartNumber=props.PartNumber;
        this.AlternatePartNumber=props.AlternatePartNumber;
        this.MinimumCharge=props.MinimumCharge;
        this.EachPrice=props.EachPrice;
        this.Surcharge=props.Surcharge;
        this.PMFactor=props.PMFactor;
        this.PMetal=props.PMetal;
        this.Notes=props.Notes;
        if(props.DateExpires){
            this.DateExpires=dayjs(props.DateExpires).format('YYYY-MM-DD');
            //this.DateExpires=props.DateExpires;
        } else this.DateExpires=null;
        this.Finish=props.Finish;
        this.LeadTime=props.LeadTime;
        this.CustomerContact=props.CustomerContact;
        this.QuotedByName=props.QuotedByName;
        this.CustomerName=props.CustomerName;
        this.PaymentTermsValue=props.PaymentTermsValue;
    }

}

module.exports=QuoteFormatted;


class NewQuoteFactory {
    constructor(props) {
        return {
            idQuote: null,
            idCustomer: null,
            Date: null,
            PartNumber: null,
            AlternatePartNumber: null,
            MinimumCharge: null,
            EachPrice: null,
            Surcharge: null,
            PMFactor: null,
            PMetal: null,
            Notes: null,
            DateExpires: null,
            Finish: null,
            LeadTime: null,
            QuotedBy: null,
            CustomerContact: null,
            idPaymentTerms: null
        }

    }

}

module.exports=NewQuoteFactory;
import {useState,useEffect} from "react";
import URI from '../../../utils/ExpressLocation';
import {InputGroup, Table, Form, Button, Spinner} from "react-bootstrap";
import {Search} from "react-bootstrap-icons";


const QuoteTableFull = (params) => {
    const [quotes,setQuotes]=useState([]);
    const [search,setSearch]=useState('');
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        fetch(URI+'/quotes/all')
            .then(response=>response.json())
            .then(data=>{
                setQuotes(data);
                setIsLoading(false);
                //makeTable()
            })
            .catch()
    },[])

    const spinner=(<Button variant="primary" disabled>
        <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
        />
        Loading...
    </Button>);




    return(
        <>
            <br />
            <InputGroup className={'mb-3'}>
                <Form.Control
                    placeholder={'Filter quotes'}
                    onChange={e=>setSearch((e.target.value).toLowerCase())}
                    />
                <InputGroup.Text id={'QuoteTableSearchInput'} ><Search /></InputGroup.Text>
            </InputGroup>
            {isLoading ? spinner : ''}
            <Table size={'sm'} striped bordered hover>
                <thead>
                <tr>
                    <th>Part Number</th>
                    <th>Alt PN</th>
                    <th>Each Price</th>
                    <th>Minimum Charge</th>
                    <th>Customer</th>
                </tr>
                </thead>
                <tbody>
                {!quotes ? '' : quotes.filter((quote)=>{
                    if(search==='') return true;
                    else return quote.PartNumber?.toString().toLowerCase().includes(search) || quote.AlternatePartNumber?.toString().toLowerCase().includes(search) || quote.CustomerName?.toString().toLowerCase().includes(search)
                }).map((quote)=>{
                    return (<tr key={quote.idQuote} data-idquote={quote.idQuote} onClick={(e)=>console.log(e.target.parentNode.attributes['data-idquote'].value)}>
                        <td>{quote.PartNumber}</td>
                        <td>{quote.AlternatePartNumber}</td>
                        <td>{quote.EachPrice}</td>
                        <td>{quote.MinimumCharge}</td>
                        <td>{quote.CustomerName}</td>

                    </tr>)
                })}
                </tbody>
            </Table>
        </>
    )
}

export default QuoteTableFull;
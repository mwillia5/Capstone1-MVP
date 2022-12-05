import logo from './logo.svg';
//import './App.css';


import NewQuoteForm from "./components/forms/quotes/NewQuoteForm";
import QuoteModalEmailText from "./components/forms/quotes/QuoteModalEmailText";
import {Button} from "react-bootstrap";
import {House} from "react-bootstrap-icons"
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import QuoteLayout from "./pages/QuoteLayout";
import QuoteTableFull from "./components/tables/quotes/QuoteTableFull";

function App(){
    return(
        <div>
            <>
                <NavLink  to={'/'} ><Button variant={'danger'} ><House /></Button></NavLink>
            </>
            <Routes>
                <Route path={'/'} element={<Home />}/>
{/*
                <Route path={'/quotes'} element={<NewQuoteForm />} />

                element={<QuoteLayout />}
*/}
                <Route path={"/quotes"} element={<QuoteLayout />} >
                    <Route path={"newQuote"} element={<NewQuoteForm />} />
                    <Route path={'all'} element={<QuoteTableFull />} />
                    <Route path={'test'} element={<NewQuoteForm />} />
                </Route>
            </Routes>

        </div>
    )
}

export default App;

/*function App() {
  return (
    <div className="App">
        <Button variant={'danger'} ><House /></Button>

        <header className="App-header">


        <NewQuoteForm />
          {/!*<img src={logo} className="App-logo" alt="logo" /> *!/}

      </header>
{/!*

        <QuoteModalEmailText idQuote={30} />
*!/}
    </div>
  );
}*/
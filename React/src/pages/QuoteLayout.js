import {NavLink, Outlet} from "react-router-dom";
import {Button, Stack} from "react-bootstrap";
import {useState} from "react";

const QuoteLayout=(props)=>{
    const [active,setActive]=useState();
    const activeStyle={
        border: '1px solid red',
        backgroundColor: 'red',

    }
    return(
        <>
            <div style={{display:"inline-block"}}>
                <Stack direction={"horizontal"} gap={1} >
                    <NavLink to={'newQuote'}  >
                        {({ isActive }) => {
                            if(isActive)return <Button variant={"success"}>New Quote</Button>
                            if(!isActive)return <Button variant={"primary"}>New Quote</Button>
                        }}
                    </NavLink>
                    <NavLink to={'all'}  >
                        {({ isActive }) => {
                            if(isActive)return <Button variant={"success"}>All Quotes</Button>
                            if(!isActive)return <Button variant={"primary"}>All Quotes</Button>
                        }}
                    </NavLink>
                    <NavLink to={'test'}  >
                        {({ isActive }) => {
                            if(isActive)return <Button variant={"success"}>Test</Button>
                            if(!isActive)return <Button variant={"primary"}>Test</Button>
                        }}
                    </NavLink>
                </Stack>

            </div>
            <div>
                <Outlet />
            </div>
        </>
)
}

export default QuoteLayout;
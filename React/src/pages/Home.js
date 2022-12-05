import {useState} from "react";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Home =(props)=>{
    const [navlinks,setNavlinks]=useState([{name:"Quotes",link:'/quotes'}]);
    return(
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', placeItems: "center" }}>
                {navlinks.map(element=>{
                    return (
                        <NavLink key={element.name} to={element.link}><Button variant={"info"} style={{ margin: '10px', padding: '40px' }} size={"lg"}>{element.name}</Button></NavLink>
                    )
                })}
            </div>
    )
}
export default Home;

{/*<NavLink to={navlinks[0].link}><Button variant={'primary'}>{navlinks[0].name}</Button></NavLink>*/}

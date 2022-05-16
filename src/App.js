import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import {BrowserRouter} from 'react-router-dom'
import styled from "styled-components"
import { Link } from "react-router-dom"

function App() {
  return (
    //returns all the routes & components
    <div className="App">
      <BrowserRouter>
       <Nav>
         <Logo to={"/"}>
           <img src={require("./pages/SpoonScroller.png")} alt="" />
         </Logo>
       </Nav>
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  width: 9px;
    height: 10px;
    border-radius: 50%;
    margin-top: -6px;

  img{
    height: 195px;
  }  
`

const Nav = styled.div`
   padding: 2.5rem 0rem;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   svg{
     font-size: 20rem;
   }
`

export default App;

import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import styled from "styled-components"
import {NavLink} from 'react-router-dom'

function Category(){
   return(
       <List>
           <SLink to={'/cuisine/Italian'}>
               <p><FaPizzaSlice /> </p>
               <h4>Italian</h4>
           </SLink>
           <SLink to={'/cuisine/American'}>
           <p><FaHamburger /></p>
               <h4>American</h4>
           </SLink>
           <SLink to={'/cuisine/Thai'}>
           <p><GiNoodles /></p>
               <h4>Thai</h4>
           </SLink>
           <SLink to={'/cuisine/Japanese'}>
           <p><GiChopsticks /></p>
               <h4>Japanese</h4>
           </SLink>
       </List>
   )

}


const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  text-decoration: none;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 9rem;
  height: 9rem;
  cursor: pointer;
  transform: scale(0.65);
  
  h4{
      color: white;
      font-size: 1.2rem;
      margin-top: 5%;
  }
  svg{
      color: #FFFFFF;
      font-size: 1.9rem;
      transform: scale(1.5);
      margin-top: 120%;
  }
  &.active{
      background: linear-gradient(to right, #f27121, #e94057)

      svg{
          color: white;
      }

      h4{
          color: white;
      }
  }
`;


export default Category;
import React from 'react';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import { useAuth } from '../../hooks/useAuth';
import Slide from "../Slide/slide";
import FoodOrder from "./FoodOrder/FoodOrder";
import Nav from "../Nav/Nav";


const Orders = () => {
    const authLog = useAuth();
    return (
        <DashboardContainer>
            <Nav/>
            <Slide/>
            <H1>Order Dashboard</H1>
            <Text>Hi, {authLog.user.email} Welcome to Orders</Text>
            <FoodOrder/>
        </DashboardContainer>
    );

};

const DashboardContainer = styled.div`{
  grid-column: 2 / span 12;
  padding: 3rem 0 5.5rem 0;
  display: flex;
  margin-top: -50px;
  margin-bottom: 60px;
  flex-direction: column;
  align-items: center;
  
  H1{
    margin-top: 40px;
    margin-bottom: 10px; 
  }
  
  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
}
`;

export default Orders;

import React from 'react';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Text from '../Typography/Text';
import { useAuth } from '../../hooks/useAuth';
import Slide from "../Slide/slide";
import Links from "../Products/firebase/Links";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from '../Products/add-product.component';
import Product from '../Products/product.component';
import ProductsList from '../Products/products-list.component';

const Dashboard = () => {
  const auth = useAuth();
  return (
    <DashboardContainer>
        <Slide/>
        <H1>Dashboard</H1>
        <Text>Logged in as {auth.user.email}</Text>
        <Product/>
        <ProductsList/>
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

export default Dashboard;

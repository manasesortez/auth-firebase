import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';
import { useAuth } from '../../hooks/useAuth';


const Nav = () => {
  const auth = useAuth();

  return (
    <NavContainer >
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
        {auth.user && <NavLink to='/orders'>Orders</NavLink>}
        {auth.user && <button onClick={() => auth.logout()}>Logout</button>}
        {!auth.user && (
        <React.Fragment>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </React.Fragment>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  zIndex: 1;
  top: 0;
  grid-column: 2 / span 12;
  padding: 1rem 0;
  display: flex;
  color: ${(props) => props.theme.colors.black2};
  background-color: ${(props) => props.theme.colors.black2};
  align-items: center;
  justify-content: flex-end;
  margin-bottom:1000rem;

  img {
    width: 3.125rem;
    margin-left: 20px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a:first-child {
    margin-right: auto;
  }

  a,
  button {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white3};
    text-decoration: none;
    margin-left: 2rem;
    transition: ${(props) => props.theme.animations.link};
    margin-right: 2rem;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    color: ${(props) => props.theme.colors.green1};
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
    
  }
`;

export default Nav;

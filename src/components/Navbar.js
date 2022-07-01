import React, { useState, createContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { ReactComponent as Search } from '../search48.svg';
import { ProductConsumer } from '../Context';
import ProductList from './ProductList';

export default function Navbar() {
  const [term, setTerm] = useState('');
  const [select, setSelect] = useState('');
  // console.log(term);
  // console.log(select);

  return (
    <ProductConsumer.Provider
      term={[term, setTerm]}
      select={[select, setSelect]}
    >
      {/* {<ProductList term={[term]} />} */}
      <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </li>
        </ul>
        <SearchDiv>
          <Input
            type='text'
            placeholder='Search Movies or Shows'
            onChange={(e) => setTerm(e.target.value)}
          />
          <Select onChange={(e) => setSelect(e.target.value)}>
            <option>All Categories</option>
            <option value='smartphones'>smartphones</option>
            <option value='laptops'>laptops</option>
            <option value='fragrances'>fragrances</option>
            <option value='skincare'>skincare</option>
            <option value='5groceries'>groceries</option>
            <option value='home-decoration'>home-decoration</option>
          </Select>
          <Button>
            <Search />
          </Button>
        </SearchDiv>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fa fa-cart-plus' />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    </ProductConsumer.Provider>
  );
}
// }

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export const SearchDiv = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 60%;
  height: 40px;
  font-size: 15px;
  padding-left: 15px;
  border: 2px solid #0f3460;
  border-right: none;
  &:hover {
    border-radius: none;
  }
  &:focus {
    outline: none; /* Removes the border when the input is clicked */
  }
`;

export const Select = styled.select`
  width: 20%;
  height: 40px;
  font-family: arial;
  outline: 0 none;
  cursor: pointer;
  border: 2px solid #0f3460;
  border-right: none;
  option {
    height: 20px;
    margin: 30px;
  }
`;

export const Button = styled.button`
  height: 40px;
  /* background: #0f3460; */
  background: #009ffd;
  width: 50px;
  cursor: pointer;
`;

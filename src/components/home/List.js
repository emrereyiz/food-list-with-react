import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import axios from "axios";
import { device } from "../../css/breakpoint";

import { showPreloader, hidePreloader } from "../../store/action/preloader";
import { setProduct } from "../../store/action/products";
import { updateBasket } from "../../store/action/basket"

import Card from "./Card"
const List = ({ stateBasket, productState, setProduct, showPreloader, hidePreloader }) => {
  
  const [products, setData] = useState([]);

  const fetchProducts = async () => {
    axios.get('https://602d48a830ba7200172242da.mockapi.io/api/foods')
      .then(function (response) {
        setProduct(response.data)
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
          hidePreloader()
      });
  };

  useEffect(() => {
    if(productState.length === 0){
      fetchProducts();
    }else{
      setData(productState)
      hidePreloader()
    }
  }, []);

  const Products = () => {
    if (products.length > 0) {
      return products.map((item, index) => {
        let productLength = 0;
        if(stateBasket.length > 0){
          productLength = stateBasket.filter(arrItem=>arrItem.id === item.id).map(arrItem=>arrItem.count)[0];
          productLength = productLength === undefined ? 0 : productLength;
        }
        return <Card key={index} length={productLength} detail={item} />
      });
    } else {
      showPreloader();
      return <div>Yükleniyor</div>
    }
  };

  return (
    <div className="grid__container">
      <ProductWrap className="grid__row products">
        <Products />
      </ProductWrap>
    </div>
  )
};
const ProductWrap = styled.div`

    @media ${device.tabletMobile} {
      padding: 15px;
    }
    .product__card{
      &:hover{
        a{
          transform:scale(1.05)
        }
        img{
          transform:scale(1.115)
        }
      }
    }
  }
`;
const mapStateToProps = state => {
  return {
    visible: state.preloader.visible,
    productState: state.products.products,
    stateBasket: state.basket.basket,
  }
};
export default connect(mapStateToProps, { setProduct, showPreloader, hidePreloader, updateBasket })(List);
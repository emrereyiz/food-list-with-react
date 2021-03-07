import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import styled from 'styled-components';
import axios from "axios";
import { device } from "../../css/breakpoint";

import { showPreloader, hidePreloader } from "../../store/action/preloader";
import {updateBasket} from "../../store/action/basket"
import {updateSnack} from "../../store/action/snack"
import Snack from "./Snack";
const Product = ({stateProduct, stateBasket, updateBasket, updateSnack, showPreloader, hidePreloader}) => {

    const [count, setCount] = useState(0);
    const [productDetail, setProduct] = useState(undefined);

    const countCalc = (index, type) => {
        if(type === "up"){
            setCount(index + 1)
        }else if(type === "down" && index > 0){
            setCount(index - 1)
        }
    };

    let productID = window.location.pathname.split("/")[2];
    let activeProduct = stateProduct.filter(item => item.id == productID)[0];
    const basketFilter = stateBasket.filter(item=>item.id==productID);


    const getProduct = async () =>{
        axios.get(`https://602d48a830ba7200172242da.mockapi.io/api/foods/${productID}`)
        .then(function (response) {
            activeProduct = response.data;
            setProduct(activeProduct)
        })
        .catch(function (error) {
        })
        .then(function () {
            hidePreloader()
        });
    }
    useEffect(() => {
        showPreloader();
        if(basketFilter.length > 0){
            const countNumber = basketFilter[0].count;
            setCount(countNumber);
        };
        if(activeProduct === undefined){
            getProduct();
        }else{
            setProduct(activeProduct)
            hidePreloader();
        }
    },[]);

    const snackTrigger = () => {
        updateSnack(true)
        setTimeout(() => {
            updateSnack(false)
        }, 2000);
    };

    const productAdd = () =>{
        const basketItem = {
            count,
            ...(activeProduct !== undefined ? activeProduct : productDetail)
        };
        const filterProduct = (type) =>{
            const _arr = stateBasket.filter(item=>item.id != basketItem.id);
            if(type==="add"){
                _arr.push(basketItem);
            }
            updateBasket(_arr);
        };
        if(count>0){
            if(stateBasket.length > 0){
                filterProduct('add');
            }else {
                updateBasket([basketItem])
            };
            snackTrigger();
        }else if(count === 0 && stateBasket.length > 0) {
            filterProduct('remove');
        }
    };
    const ProductDOM = () => {
        if(productDetail !== undefined){
            return <div>
            <h1>{productDetail.name}</h1>
            <div className="grid__row">
                <div className="grid__item detail__card">
                    <img src={productDetail.image} alt={productDetail.name} />
                    <div className="detail__bottom">
                        <div className="grid__container">
                            <div className="grid__row">
                                <div className="grid__item detail__price col-6 col-mobile-12">
                                    {productDetail.price} TL
                                </div>
                                <div className="grid__item col-6 col-mobile-12">
                                    <div className="grid__row">
                                        <div className="grid__item detail__count col-6 col-mobile-12">
                                            <div className="count__wrap">
                                                <button onClick={()=>countCalc(count, "down")} className="count__down">
                                                    <span>-</span>
                                                </button>
                                                <span className="count__number">{count}</span>
                                                <button onClick={()=>countCalc(count, "up")} className="count__up">
                                                    <span>+</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid__item detail__add col-6 col-mobile-12">
                                            <a href="javascript:;" onClick={()=>productAdd()} >Sepete Ekle</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snack/>
        </div>
        }else{
            return <div>İçerik yok</div>
        }
    }

    return(
        <DetailWrap className="grid__container detail__product">
            <ProductDOM/>
        </DetailWrap>
    )
};
const DetailWrap = styled.div`
    @media ${device.tabletMobile} {
        text-align:center;
        padding:0 15px;
        box-sizing:border-box;
    }
    h1{
        font-size: 40px;
        font-weight:400;
        color:#fff;
        @media ${device.tabletMobile} {
            font-size: 30px;
            font-weight:700;
        }
    }
    img{
        border-radius: 20px;
        width: 100%;
        @media ${device.tabletMobile} {
            border-radius:0;
        }
    }
  .detail__card{
    border-radius: 20px;
    box-shadow: 0 0 10px 0 #000;
    background:#fff;
    margin-bottom:40px;
  }
  .detail__bottom{
    padding:30px;
    box-sizing: border-box;
    @media ${device.tabletMobile} {
        padding:0;
    }
  }
  .detail__price{
    font-size: 40px;
    color: #a38248;
    font-weight: 900;
    
    @media ${device.tabletMobile} {
        font-size:25px;
        padding:0 0 5px 0;
    }
  }
  .detail__add{
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    a{
      width: 100%;
      display:inline-block;
      transition: 0.5s;
      background-color: #0cb14b;
      border-radius: 30px;
      @media ${device.tabletMobile} {
          border-radius:20px;
          border-top-left-radius:0;
          border-top-right-radius:0;
      }
      &:hover{
        background-color: #16d25e;
      }
    }
  }
  .count__wrap{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border:solid 2px #dcdcdf;
    border-radius: 30px;
    overflow: hidden;
    @media ${device.tabletMobile} {
        border-radius:0;
        height:50px;
        border-width:1px;
        border-left:none;
        border-right:none;
    }
    button{
      border:none;
      background-color: none;
      &:focus {outline:0;}
      &:hover{
          background-color:#cacaca;
      }
      span{
          background:none !important;
      }
      &:nth-child(1){
          span{
              position:relative;
              top:-2px;
          }
      }
    }
  
    span,
    button{
      height: 100%;
      display:flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      transition: 0.5s;
      font-size: 30px;
      width:33.33%;
    }
    span{
        @media ${device.tabletMobile} {
            width:33.33%;
            font-size:20px;
        }
      &:hover{
        background-color: #dcdcdf;
      }
    }
  }
  
  .count__down,
  .count__up{
    cursor: pointer;
  }
  .count__number{
    border-left:solid 2px #dcdcdf;
    border-right:solid 2px #dcdcdf;
    cursor: inherit;
    font-size: 25px;
    background-color: transparent !important;
  }
`;
const mapStateToProps = state => {
    return {
        stateBasket: state.basket.basket,
        stateProduct: state.products.products,
    }
};
export default connect(mapStateToProps, {updateBasket, updateSnack, showPreloader, hidePreloader})(Product);

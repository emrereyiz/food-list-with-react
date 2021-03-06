import {Link} from "react-router-dom";
import styled from 'styled-components';
import { device } from "../../css/breakpoint";

const Card = (props) => {
  const _length = props.length;
  const ItemLength = () => {
    if(_length !== 0){
      return(
        <div className="product__count">
          {_length}
        </div>
      );
    }else{
      return(
        ""
      )
    }
  };
  return (
    <ProductCard className={'animate__animated animate__bounce grid__item product__card col-3 col-mobile-6 col-tablet-port-6'}>
        <img src={props.detail.image} alt={props.detail.title} />
        <div className="product__bottom">
          <span className="product__title">{props.detail.name}</span>
          <span className="product__price">{props.detail.price} TL</span>
          <Link to={`/detail/${props.detail.id}`} className="product__add">
            <ItemLength/>
            Sipariş Ver
          </Link>
        </div>
    </ProductCard>
  )
};

const ProductCard = styled.div`
  box-shadow: 0 0 5px -3px #000;
  border-radius: 10px;
  margin-bottom: 40px;
  transition: 0.5s;
  background-color:#fff;
  position: relative;
  display:flex;
  flex-direction:column;
  translation : 0.5s;
  @media ${device.tabletMobile} {
    min-height:170px;
  }
  &:hover{
    background-color:#e8e8e8;
    .product__add{
      background-color: #ea1a37;
    }
    .product__bottom{
      transform:translateY(5px);
    }
    .product__count{
      margin:0 15px 0 0;
      width:auto;
      height:100%;
      border-radius:none;
      background:none;
      top:3px;
    }
    .product__add{
      width:93%;
      background-color:#0cb14b;
      box-shadow:0 10px 10px -10px #0cb14b;
    }
  }
  a{
    text-decoration: none;
  }
  img{
    width:90%;
    margin:0 auto;
    border-radius:10px;
    margin-top:-20px;
    transition:1.5s;
    box-shadow:0 0 10px -3px #000;
    border:solid 5px #fff;
  }
  .product__count{
    position: absolute;
    right:0;
    top:0;
    width:30px;
    height: 30px;
    line-height: 30px;
    background-color: #0cb14b ;
    border-radius: 100%;
    margin:-10px;
    color:#fff;
    font-weight: 900;
    text-align: center;
  }
  .product__bottom{
    float:left;
    text-align: center;
    transition:0.5s;
    @media ${device.tabletMobile} {
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
    }
  }
  .product__title{
    font-size: 15px;
    font-weight:700;
    color:#494949;
    .transition:0.5s;
    @media ${device.tabletMobile} {
      padding:0 5px;
    }
  }
  .product__price{
    display:inline-block;
    width: 100%;
    font-size: 20px;
    .transition:0.2s;
    color:#a38248;
    font-weight:900;
  }
  .product__add{
    width:50%;
    border-radius:10px;
    background-color: #d2112c;
    color:#fff;
    display:inline-block;
    margin: 10px 0;
    padding:10px;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow:0 10px 10px -10px #d2112c;
    position:relative;
    @media ${device.tabletMobile} {
        width:100%;
        margin:0;
        border-top-left-radius:0;
        border-top-right-radius:0;
    }
  }
`;
export default Card;
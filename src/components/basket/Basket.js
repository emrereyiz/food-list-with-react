import {connect} from "react-redux";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { device } from "../../css/breakpoint";

import {updateBasket} from "../../store/action/basket"
import basketIcon from './basket.svg';
const Basket = ({stateBasket}) => {
    const productStatus = stateBasket.length>0;
    const BasketLength = () => {
        if(productStatus){
            const basketCount = stateBasket.map(item=>item.count).reduce((first, second) => first + second, 0);
            return basketCount
        }else{
            return 0
        }
    };
    const TotalBasket = () => {
        let basketPrice = 0;
        if(productStatus){
            basketPrice = String(stateBasket.map(item=>{
                return item.count * Number(item.price)
            }).reduce((first, second) => first + second, 0)).substr(0,5)
        }
        return(
            <div className="basket__total">
                <span>Toplam Tutar</span>
                <span>{basketPrice} TL</span>
            </div>
        )
    }

    let history = useHistory();
    const detailRedirect = (id) => {
        history.push(`/detail/${id}`)
    }


    const BasketList = () => {
        if(productStatus){
            return (
                stateBasket.map((item, index)=>{
                    return (
                        <div key={index} onClick={() => detailRedirect(item.id)} className="basket__item">
                            <span className="basket__name">{item.name}</span>
                            <img src={item.image} alt={item.name} />
                            <div className="basket__detail">
                                <span className="basket__price">{item.price} TL</span>
                                <span className="basket__item__count">{item.count} Adet</span>
                            </div>
                        </div>
                    )
                })
            )
        }else{
            return (
                <div className="basket__item">
                    Henüz bir ürün eklenmedi
                </div>
            )
        }
    };
    return(
        <BasketWrap className={`${BasketLength() === 0 ? "" : "basket__active"}`}>
            <span className="basket__count">
                <BasketLength/>
            </span>
            <div className={`basket__list ${!productStatus ? "hidden__total" : ""}`}>
                <BasketList/>
                <TotalBasket/>
            </div>
            <img src={basketIcon} alt="Dominos Sepet" />
        </BasketWrap>
    )
};
const BasketWrap = styled.div`
    width:50px;
    height: 50px;
    border-radius: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    transition: 0.5s;

    img{
        width:50%;
    }

    .basket__count{
        position: absolute;
        right:0;
        top:0;
        background-color: #494949;
        border-radius: 100%;
        width: 25px;
        height: 25px;
        margin:-7px;
        text-align: center;
        font-size: 13px;
        line-height: 25px;
        transition: 0.5s;
        font-weight:900;
    }
    &.basket__active .basket__count{
        background-color: #6fc7a7;
    }
    &:hover .basket__count{
        transform:scale(1.2)
    }
    .basket__list{
        position: absolute;
        right:0;
        top:0;
        width:310px;
        margin:40px 0 0 0;
        background-color:#fff;
        box-shadow: 0 0 1px 0 #000;
        border-radius: 10px;
        cursor: auto;
        opacity: 0;
        transition:0.5s;
        visibility: hidden;

        &.hidden__total .basket__total{
            display:none !important;
        }
    }
    &:hover .basket__list{
        visibility: visible;
        opacity: 1;
    }
    
    .basket__item{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color:#000;
        border-top:solid 1px #cacaca;
        padding:15px;
        cursor:pointer;
        @media ${device.tabletMobile} {
            padding:10px;
        }   

        &:first-child{
            margin-top:0;
            border-top:none;
        }
        img{
            margin:10px 0 0 0;
            width:70% !important;
            border-radius: 10px;
            @media ${device.tabletMobile} {
                display:none;
            }   
        }
    }
    .basket__name{
        font-size: 18px;
        text-align: center;
        @media ${device.tabletMobile} {
            font-weight:700;
            font-size:19px;
            color:#3e4a59;
            margin-bottom:5px;
        }   
    }
    .basket__detail{
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin:10px 0 0 0;
        @media ${device.tabletMobile} {
            margin:0;
        }
    }
    
    .basket__total{
        padding:20px;
        background-color:#3e4959;
        font-size: 20px;
        display:flex;
        justify-content: space-around;
        flex-direction: row;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    .basket__price{
        font-size: 20px !important;
        color:#a38248;
        font-weight: 700;
    }
`;
const mapStateToProps = state => {
    return {
        stateBasket: state.basket.basket,
    }
};



export default connect(mapStateToProps, {updateBasket})(Basket);
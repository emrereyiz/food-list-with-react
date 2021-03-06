import {connect} from "react-redux";
import styled from 'styled-components';
import { device } from "../../css/breakpoint";

import checkIcon from './check.svg';

const Snack = (stateSnack) => {
    const snackStatus = stateSnack.stateSnack;
    return (
        <SnackWrap className={`snack ${snackStatus ? "snack__show" : "snack__hide"}`}>
            <img src={checkIcon} alt="Başarılı!"/>
            Ürün Sepete Eklendi
        </SnackWrap>
    )
};

const SnackWrap = styled.div`
    position: fixed;
    top:0;
    right:0;
    margin:110px 20px 20px 20px;
    z-index: 3;
    font-size: 20px;
    border-radius: 5px;
    width: auto;
    height: 40px;
    color:#fff;
    text-align: center;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding:20px;
    box-sizing: border-box;
    background-color:#0cb14b;
    visibility: hidden;
    opacity: 0;
    
    @media ${device.tabletMobile} {
        top:auto;
        bottom:0;
        width:90%;
    }

    &.snack__show{
      visibility: visible;
      opacity: 0;
      background-color:#0cb14b;
      animation: snackShow 2s;
    }
    img{
        width: 20px !important;
        margin:0 10px 0 0;
        position: relative;
        top:-1px;
    }
    @keyframes snackShow {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        20% {
            transform: translateY(0);
            opacity: 1;
        }
        80% {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(20px);
            opacity: 0;
        }
    }
`;
const mapStateToProps = state => {
    return {
        stateSnack: state.snack.snackStatus,
    }
};
export default connect(mapStateToProps,{})(Snack);
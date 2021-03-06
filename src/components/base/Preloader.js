import React from "react";
import {connect} from "react-redux";
import styled from 'styled-components';

import Logo from "./Logo";

const Preloader = ({visible}) => {
  return (
    <PreloaderWrap className={`preloader ${visible ? "active" : ""}`}>
      <Logo/>
    </PreloaderWrap>
  )
}
const PreloaderWrap = styled.div`
    position: fixed;
    left:0;
    top:0;
    background-color: #000000;
    width:100%;
    height: 100%;
    z-index: 999;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg,
      #d3312d,
      #0078AC,
      #d3312d,
      #0078AC,
      #d3312d,
      #0078AC,
      #d3312d,
      #0078AC
      );
      background-size: 600% 600%;
      animation: gradient 30s ease infinite;
    display:none;
    &.active{
      display: flex;
    }
    .dominos{
      animation: dominosMove 3s;
      animation-iteration-count: infinite;
      box-shadow: 0 0 1px 0 #000;
      width:200px;
      height:100px;
    }
    @keyframes dominosMove {
      from {
        transform: rotate(-45deg);
      }
      50% {
        transform: rotate(45deg);
      }
      to {
        transform: rotate(-45deg);
      }
    }
`;
const mapStateToProps = state => {
    return { visible: state.preloader.visible }
};
export default connect(mapStateToProps)(Preloader);
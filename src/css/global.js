import { createGlobalStyle } from 'styled-components';
import { device } from "./breakpoint";
export const GlobalStyle = createGlobalStyle`
  a{
    text-decoration: none;
    color:#fff;
  }
  header{
    background-color: #000;
    color:#fff;
    margin-bottom: 50px;
    padding:20px 0;
    position: relative;
    z-index: 1;
      @media ${device.tabletMobile} {
        padding:20px 15px;
        margin-bottom:20px;
      }
    }
    .dominos{
      width:100px;
      height:50px;
    }
    .header__left{
      a{
        display:inline-block;
      }
    }
    .header__right{
      display:flex;
      justify-content: flex-end;
    }
  }

  .grid__container{
    width: 80%;
    margin:0 auto;

    @media ${device.tabletMobile} {
      width:100%;
    }

    .grid__container{
      width: 100%;
    }
  }
  .grid__row{
    display: grid;
    grid-template-columns: repeat(12, [col] 1fr);
    grid-column-gap: 1em;
  }
  .grid__item{
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
    grid-column: span 12;
  }
  .col-1{grid-column: span 1;}
  .col-2{grid-column: span 2;}
  .col-3{grid-column: span 3;}
  .col-4{grid-column: span 4;}
  .col-5{grid-column: span 5;}
  .col-6{grid-column: span 6;}
  .col-7{grid-column: span 7;}
  .col-8{grid-column: span 8;}
  .col-9{grid-column: span 9;}
  .col-10{grid-column: span 10;}
  .col-11{grid-column: span 11;}
  .col-12{grid-column: span 12;}

  .col-mobile-1{@media ${device.tabletMobile} {grid-column: span 1;}}
  .col-mobile-2{@media ${device.tabletMobile} {grid-column: span 2;}}
  .col-mobile-3{@media ${device.tabletMobile} {grid-column: span 3;}}
  .col-mobile-4{@media ${device.tabletMobile} {grid-column: span 4;}}
  .col-mobile-5{@media ${device.tabletMobile} {grid-column: span 5;}}
  .col-mobile-6{@media ${device.tabletMobile} {grid-column: span 6;}}
  .col-mobile-7{@media ${device.tabletMobile} {grid-column: span 7;}}
  .col-mobile-8{@media ${device.tabletMobile} {grid-column: span 8;}}
  .col-mobile-9{@media ${device.tabletMobile} {grid-column: span 9;}}
  .col-mobile-10{@media ${device.tabletMobile} {grid-column: span 10;}}
  .col-mobile-11{@media ${device.tabletMobile} {grid-column: span 11;}}
  .col-mobile-12{@media ${device.tabletMobile} {grid-column: span 12;}}
  
  .col-tablet-port-1{@media ${device.tabletPort} {grid-column: span 1;}}
  .col-tablet-port-2{@media ${device.tabletPort} {grid-column: span 2;}}
  .col-tablet-port-3{@media ${device.tabletPort} {grid-column: span 3;}}
  .col-tablet-port-4{@media ${device.tabletPort} {grid-column: span 4;}}
  .col-tablet-port-5{@media ${device.tabletPort} {grid-column: span 5;}}
  .col-tablet-port-6{@media ${device.tabletPort} {grid-column: span 6;}}
  .col-tablet-port-7{@media ${device.tabletPort} {grid-column: span 7;}}
  .col-tablet-port-8{@media ${device.tabletPort} {grid-column: span 8;}}
  .col-tablet-port-9{@media ${device.tabletPort} {grid-column: span 9;}}
  .col-tablet-port-10{@media ${device.tabletPort} {grid-column: span 10;}}
  .col-tablet-port-11{@media ${device.tabletPort} {grid-column: span 11;}}
  .col-tablet-port-12{@media ${device.tabletPort} {grid-column: span 12;}}
`
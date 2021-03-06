import styled from 'styled-components';
const Logo = () => {
    return (
        <LogoWrap className="dominos">
            <div className="dominos__left">
            <span className="dominos__circle"></span>
            <span className="dominos__circle"></span>
            </div>
            <div className="dominos__right">
            <span className="dominos__circle"></span>
            </div>
        </LogoWrap>
    )
};
const LogoWrap = styled.div`
    width:200px;
    height: 100px;
    display:flex;
    border-radius: 5px;
    div{
      display:flex;
      border-radius: 10px;
      padding:5px;
      width:50%;
      height: inherit;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
  .dominos__left{
    background-color: #0078AC;
    .dominos__circle:nth-child(1){
      background-color: #fff;
      top:-20%;
    }
    .dominos__circle:nth-child(2){
      background-color: #fff;
      top:20%;
    }
  }
  .dominos__right{
    background-color: #D2112C;
  }
  .dominos__circle{
    width:30%;
    height: 30%;
    background-color:#fff;
    border-radius: 100%;
    flex-wrap: wrap;
    position: relative;
  }
`;
export default Logo;
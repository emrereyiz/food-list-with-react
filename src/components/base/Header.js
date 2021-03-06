import React from "react";
import {Link} from "react-router-dom";

import Logo from "./Logo";
import Basket from "../basket/Basket";

const Header = () => {
  return (
    <header>
      <div className="grid__container">
        <div className="grid__row">
          <div className="grid__item header__left col-6">
          <Link to={`/`}>
            <Logo/>
          </Link>
          </div>
          <div className="grid__item header__right col-6">
            <Basket/>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
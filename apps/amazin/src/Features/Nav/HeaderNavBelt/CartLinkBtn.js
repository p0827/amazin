import React from 'react';
import { Link } from 'react-router-dom';

function CartLinkBtn({ counter, ...props }) {
  return (
    <Link className="nav__cart flex" {...props}>
      <div>
        <div className="cart__counter">{counter}</div>
        <div className="sprite__cart"></div>
      </div>
      <div className="pc-low--off">
        <div className="nav__line-1">Shopping-</div>
        <div className="nav__line-2">Basket</div>
      </div>
    </Link>
  );
}

export default CartLinkBtn;

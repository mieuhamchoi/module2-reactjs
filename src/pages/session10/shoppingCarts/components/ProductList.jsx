import React, { useEffect } from "react";
import { convertToVND, randomId } from "@mieuteacher/meomeojs";
import { useSelector, useDispatch } from "react-redux";
import {ss10SCActions} from '../../../../stores/slices/ss10SC.slice'
import {ss10PoductActions} from '../../../../stores/slices/ss10Products.slice'

export default function ProductList() {
  const productStore = useSelector((store) => store.ss10ProductStore);
  const dispatch = useDispatch();

  function formSubmit(event, productId) {
    event.preventDefault();

    dispatch(ss10SCActions.addItemToCart({
      productId: productId,
      quantity: Number(event.target.quantity.value),
    }));

    dispatch(ss10PoductActions.updateStockProduct({
      productId: productId,
      quantity: Number(event.target.quantity.value),
      type: false,
    }));
  }
  return (
    <div className="listProduct">
      <div className="titles">Product List</div>
      {productStore.map((product) => (
        <div key={randomId()} className="productCards">
          <div className="productCards_avatar">
            <img className="avatar_img" src={product.avatar} />
          </div>
          <div className="productCards_des">
            <span className="des_productName">{product.name}</span>
            <span className="des_productPrice">
              {convertToVND(product.price)} Stock: {product.stock}
            </span>
            <span className="des_detail">{product.des}</span>
          </div>
          <form
            onSubmit={(e) => formSubmit(e, product.id)}
            className="productCards_buytools"
          >
            <input
              defaultValue={1}
              className="buytools_amounts"
              name="quantity"
              type="number"
              min="1"
              max={product.stock}
            />
            <button
              disabled={product.stock ? false : true}
              type="submit"
              className="btn btn-danger buytools_amounts-buyBtn"
            >
              Mua Ngay
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

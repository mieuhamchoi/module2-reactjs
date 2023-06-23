import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { randomId, convertToVND } from '@mieuteacher/meomeojs';
import { useDispatch } from 'react-redux';
export default function ShoppingCartCom() {
  const productStore = useSelector((store) => store.ss10ProductStore);
  const shoppingCartStore = useSelector((store) => store.ss10ShoppingCartStore);
  const dispatch = useDispatch();
  function getProductInfo(productId) {
    return productStore.find((product) => product.id == productId);
  }

  function calCartQuantity() {
    return shoppingCartStore.reduce((total, nextItem) => {
      return total + nextItem.quantity
    }, 0)
  }

  function calCartPrice() {
    return shoppingCartStore.reduce((total, nextItem) => {
      return total + ( getProductInfo(nextItem.productId).price * nextItem.quantity )
    }, 0)
  }

  return (
    <div className='shoppingCart'>
    <div className='titles'>
      Shopping Cart
    </div>
    <div className='shoppingCart_items'> 
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div className='table_content'>
                #
              </div>
            </th>
            <th scope="col">
              <div className='table_content'>
                Product Name
              </div>
            </th>
            <th scope="col">
              <div className='table_content'>
                Price
              </div>
            </th>
            <th scope="col">
              <div className='table_content'>
                Quantity
              </div>
            </th>
            <th scope="col">
              <div className='table_content'>
                Subtotal
              </div>
            </th>
            <th scope="col">
              <div className='table_content'>
                Actions
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingCartStore.map((item, index) =>
            getProductInfo(item.productId) ? 
            <tr key={randomId()}>
              <th scope="row">
                <div className='table_content'>
                  {index + 1}
                </div>
              </th>
              <td>
                <div className='table_content'>
                  {getProductInfo(item.productId).name}
                </div>
              </td>
              <td>
                <div className='table_content'>
                {convertToVND(getProductInfo(item.productId).price)}
                </div>
              </td>
              <td>
                <div className='table_content'>
                  <input className='quantity' style={{textAlign: "center"}} type="number" defaultValue={item.quantity} min={0} max={item.quantity + getProductInfo(item.productId).stock}/>
                </div>
              </td>
              <td>
                <div className='table_content'>
                  {convertToVND(item.quantity * getProductInfo(item.productId).price)}
                </div>
              </td>
              <td>
                <div className='table_content actions'>
                  <button onClick={(e) => {
                    let quantity = e.target.parentNode.parentNode.parentNode.querySelector('.quantity').value;
                    if (!quantity) {
                      dispatch(
                        {
                          type: "DELETE_ITEM_IN_CART",
                          payload: item.productId
                        }
                      )
                      dispatch({
                        type: "UPDATE_STOCK_PRODUCT",
                        payload: {
                          productId: item.productId,
                          quantity: item.quantity,
                          type: true
                        }
                      })
                    }else {
                      dispatch(
                        {
                          type: "UPDATE_ITEM_IN_CART",
                          payload: {
                            productId: item.productId,
                            quantity: quantity
                          }
                        }
                      )
                      dispatch({
                        type: "UPDATE_STOCK_PRODUCT",
                        payload: {
                          productId: item.productId,
                          quantity: item.quantity - quantity,
                          type: true
                        }
                      })
                    }
                  }} type="button" className="btn btn-info">Update</button>
                  <button onClick={() => {
                    dispatch(
                      {
                        type: "DELETE_ITEM_IN_CART",
                        payload: item.productId
                      }
                    )
                    dispatch({
                      type: "UPDATE_STOCK_PRODUCT",
                      payload: {
                        productId: item.productId,
                        quantity: item.quantity,
                        type: true
                      }
                    })
                  }} type="button" className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr> :
            <></>
            )
          }

        </tbody>
      </table>
    </div>
    {
      shoppingCartStore.length ? <></> : <div className='table_emptyNoti'>Empty product in your cart</div>
    }
    <div className='table_emptyNoti'>There are {calCartQuantity()} items in shopping cart 
        <span style={{color: "red", fontSize: "20px", marginLeft: "10px", fontWeight: 900}}>
          {convertToVND(calCartPrice())}
        </span>
    </div>
  </div>
  )
}

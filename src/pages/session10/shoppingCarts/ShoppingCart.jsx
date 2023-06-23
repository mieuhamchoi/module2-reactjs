import React from 'react'
import "./ShoppingCart.scss"
export default function ShoppingCart() {
  return (
    <div className='shoppingCart_container'>
      <div className='listProduct'>
        <div className='titles'>
          Product List
        </div>
        <div className='productCards'>
          <div className='productCards_avatar'>
                <img className='avatar_img' src="https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-2-org.jpg"/>
          </div>
          <div className='productCards_des'>
              <span className='des_productName'>Airpod Pro 5.0</span>
              <span className='des_productPrice'>50.000 vnđ</span>
              <span className='des_detail'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              </span>
          </div>
          <div className='productCards_buytools'>
              <input defaultValue={1} className='buytools_amounts' type="number" min="1" max="10"/>
              <button type="button" className="btn btn-danger buytools_amounts-buyBtn">Mua Ngay</button>
          </div>
        </div>
      </div>
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
              <tr>
                <th scope="row">
                  <div className='table_content'>
                    1
                  </div>
                </th>
                <td>
                  <div className='table_content'>
                    Airpod Pro 5
                  </div>
                </td>
                <td>
                  <div className='table_content'>
                    12 USD
                  </div>
                </td>
                <td>
                  <div className='table_content'>
                    1
                  </div>
                </td>
                <td>
                  <div className='table_content'>
                    12 USD
                  </div>
                </td>
                <td>
                  <div className='table_content actions'>
                    <button type="button" className="btn btn-info">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='table_emptyNoti'>Empty product in your cart</div>
        <div className='table_emptyNoti'>There are 5 items in shopping cart <span style={{color: "red", fontSize: "20px", marginLeft: "10px", fontWeight: 900}}>12 USD</span></div>
      </div>
    </div>
  )
}

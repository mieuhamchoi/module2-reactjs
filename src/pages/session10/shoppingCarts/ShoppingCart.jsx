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
              <input className='buytools_amounts' type="number" min="1" max="10"/>
              <button type="button" className="btn btn-danger buytools_amounts-buyBtn">Mua Ngay</button>
          </div>
        </div>
      </div>
      <div className='shoppingCart'>
        <div className='titles'>
          Shopping Cart
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

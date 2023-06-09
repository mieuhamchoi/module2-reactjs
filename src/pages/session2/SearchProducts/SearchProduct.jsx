import React, { Component } from 'react'
import "./SearchProduct.scss"
import Search from "./Search"
export default class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [
                {
                    name: "Gấu Bông Pikachu",
                    stock: 5,
                    price: 5000,
                    icon: "https://kenh14cdn.com/thumb_w/660/2019/2/4/photo-1-1549282130239476130621.jpg"
                },
                {
                    name: "Gấu Bông Totodie",
                    stock: 20,
                    price: 7000,
                    icon: "https://e1.pxfuel.com/desktop-wallpaper/308/582/desktop-wallpaper-pokemon-vectors-totodile-by-varuuna-totodile.jpg"
                },
                {
                    name: "Gấu Bông Togepi",
                    stock: 2,
                    price: 14000,
                    icon: "https://img.pokemondb.net/sprites/home/normal/2x/togepi.jpg"
                },
                {
                    name: "Gấu Bông Pichu",
                    stock: 35,
                    price: 10000,
                    icon: "https://www.drawingtutorials101.com/drawing-tutorials/Anime-and-Manga/Pokemon/pichu/how-to-draw-Pichu-from-Pokemon-step-0.png"
                }
            ],
            productResultList: [
                {
                    name: "Gấu Bông Pikachu",
                    stock: 5,
                    price: 5000,
                    icon: "https://kenh14cdn.com/thumb_w/660/2019/2/4/photo-1-1549282130239476130621.jpg"
                },
                {
                    name: "Gấu Bông Totodie",
                    stock: 20,
                    price: 7000,
                    icon: "https://e1.pxfuel.com/desktop-wallpaper/308/582/desktop-wallpaper-pokemon-vectors-totodile-by-varuuna-totodile.jpg"
                },
                {
                    name: "Gấu Bông Togepi",
                    stock: 2,
                    price: 14000,
                    icon: "https://img.pokemondb.net/sprites/home/normal/2x/togepi.jpg"
                },
                {
                    name: "Gấu Bông Pichu",
                    stock: 35,
                    price: 10000,
                    icon: "https://www.drawingtutorials101.com/drawing-tutorials/Anime-and-Manga/Pokemon/pichu/how-to-draw-Pichu-from-Pokemon-step-0.png"
                }
            ],
        };
    }
    // filter dấu trong tiếng việt
    removeVietnameseAccent = (str) => {
        return str
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D");
    }
    
    // xử lý search
    handleSearch = (searchInput) => {
        let filteredList;
        searchInput != "" 
        ? 
         filteredList = this.state.productList.filter(product => this.removeVietnameseAccent(product.name.toLowerCase()).includes(this.removeVietnameseAccent(searchInput.toLowerCase())))
        :
         filteredList = [...this.state.productList]

        this.setState({
            productResultList: filteredList
        })
    }

  render() {
    return (
      <>
        <div className="searchProduct__containeer">
            <div className="search__container">
                <Search handleSearch={this.handleSearch}></Search>
            </div>
            <table className="table">
                <thead>
                    <tr className="title">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.productResultList.map((product, index) => 
                            <tr key={product.name + index + product.price}>
                                <th scope="row">
                                    <div className="item">
                                        {index + 1}
                                    </div>
                                </th>
                                <td>
                                    <div className="item">
                                        {product.name}
                                    </div>
                                </td>
                                <td>
                                    <div className="item">
                                        <img className="product--img" src={product.icon} />
                                    </div>
                                </td>
                                <td>
                                    <div className="item">
                                        {product.price}
                                    </div>
                                </td>
                                <td>
                                    <div className="item">
                                        {product.stock}
                                    </div>
                                </td>
                                <td>
                                    <div className="item">
                                        <button type="button" className="btn btn-primary">Mua Ngay</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </>
    )
  }
}

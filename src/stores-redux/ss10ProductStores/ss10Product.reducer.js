// khởi tạo state
const initState = [
    {
        id: 1,
        name: "Air Pro v5",
        price: 50000,
        des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        avatar: "https://cdn.tgdd.vn/Products/Images/54/236026/airpods-pro-wireless-charge-apple-mwp22-ava-2-org.jpg",
        stock: 10
    },
    {
        id: 2,
        name: "SamSung Pro v5",
        price: 104000,
        des: "It is a long established fact that a reader will be distracted by the readable content",
        avatar: "https://www.laptopvip.vn/images/ab__webp/thumbnails/800/800/detailed/27/GalaxyBookPro360-15-WiFi-Gold-02-a0qg-md-www.laptopvip.vn-1647327853.webp",
        stock: 5
    }
]

const ss10ProductReducer = (state = initState, action) => {
    switch(action.type) {
        // các trường hợp khác
        case "UPDATE_STOCK_PRODUCT": 
        if (!action.payload.type) {
            return state.map((product) => {
                if (product.id == action.payload.productId) {
                    product.stock -= Number(action.payload.quantity);
                }
                return product
            })
        }else {
            return state.map((product) => {
                if (product.id == action.payload.productId) {
                    product.stock += Number(action.payload.quantity);
                }
                return product
            })
        }
        default: 
            return state
    }
}

export default ss10ProductReducer


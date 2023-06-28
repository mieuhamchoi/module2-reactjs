import { createSlice } from "@reduxjs/toolkit";

const ss10ProductStore = createSlice(
    {
        name: "ss10Product",
        initialState: [
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
        ],
        reducers: {
            updateStockProduct: (state, action) => {
                if (!action.payload.type) {
                    state.map((product) => {
                        if (product.id == action.payload.productId) {
                            product.stock -= Number(action.payload.quantity);
                        }
                        return product
                    })
                }else {
                    state.map((product) => {
                        if (product.id == action.payload.productId) {
                            product.stock += Number(action.payload.quantity);
                        }
                        return product
                    })
                }
            }
        }
    }
)

export const ss10PoductActions = {
    ...ss10ProductStore.actions
}

export default ss10ProductStore.reducer
import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor() {
        super()
        console.log("Giai đoạn khởi tạo: -> tạo ra các state, props (chỉ thực hiện 1 lần)")
    }

    componentWillMount() {
        console.log("Giai đoạn chuẩn bị mounting (trước khi components được mount) (chỉ thực hiện 1 lần)")
    }

    componentDidMount() {
        console.log("Giai đoạn sau khi components đã được render (chỉ thực hiện 1 lần), Quan trọng chuyên dùng để call API")
    }
    // updating...
    componentWillReceiveProps() {
        console.log("Chạy khi component con nhận props từ component cha. Sau khi nhận được props mới component con có thể set lại state")
    }

    shouldComponentUpdate() {
        console.log(" Hàm này giúp tăng hiệu năng của React lên. Nếu như return false thì các phương thực componentWillUpdate, render, componentDidUpdate sẽ không được chạy nữa")
    }

    componentWillUpdate() {
        console.log("Hàm này cũng giống như hàm componentWillMount() trước khi re-render ra Component")
    }

    componentDidUpdate() {
        console.log("hàm này được gọi đến sau khi đã re-render lại hay React đã cập nhật lại UI, thường dùng để chạy animation")
    }

    render() {
        console.log("Render đã chạy")
        return (
        <div>LifeCycle</div>
        )
    }
}

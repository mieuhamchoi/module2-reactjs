import React, { useState } from 'react'
import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
export default function TopMeo() {
  const navigate = useNavigate();


  const [meos, setMeos] = useState(
    [
      {
        id: 0,
        name: "Mỹ Diệu",
        iconUrl: "https://api.mieuhamchoi.fun/uploads/picture/subject/1674705710773-71036846.png",
        status: true,
        des: "Tôi bị bỏ rơi, tôi đáng thương lắm"
      },
      {
        id: 1,
        name: "Mỹ Đen",
        iconUrl: "https://api.mieuhamchoi.fun/uploads/picture/subject/1674705710785-78117103.png",
        status: true,
        des: "Tôi ham ăn quá nên bị bỏ rơi"
      },
      {
        id: 2,
        name: "Mỹ Hoa",
        iconUrl: "https://api.mieuhamchoi.fun/uploads/picture/subject/1674705710790-14040710.png",
        status: true,
        des: "Tôi sợ chuột :((("
      },
      {
        id: 3,
        name: "Mỹ Mỹ",
        iconUrl: "https://afamilycdn.com/150157425591193600/2023/3/6/2-16780835012891903077777-1678087066935-1678087067229266509706.jpeg",
        status: true,
        des: "Một chú mèo đáng thương"
      },
      {
        id: 4,
        name: "Munchikin",
        iconUrl: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/10/meo-munchkin-21-1024x856.jpg",
        status: true,
        des: "Một chú mèo đáng thương"
      },
      {
        id: 5,
        name: "Alolaa",
        iconUrl: "https://chophukienpet.com/wp-content/uploads/2021/10/Giong-meo-Munchkin.jpg",
        status: true,
        des: "Một chú mèo đáng thương"
      }
    ]
  )

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }


  return (
    <>
     <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >   
    {
      meos.map((meo, index) =>
        <Col key={uuidv4()} onClick={() => navigate(`/session8/meo-detail/${meo.id}`)} style={{marginBottom: "20px", minWidth: "300px"}} className="gutter-row" span={6}>
          <div className="card" style={{width: "18rem"}}>
            <img style={{maxHeight: "280px", objectFit: "fill"}} className="card-img-top" src={meo.iconUrl}/>
            <div className="card-body">
              <p>{meo.name}</p>
              <p>{meo.status ? "Sẵn sàng" : "đã có chủ"}</p>
              <p className="card-text">{meo.des}</p>
              <i style={{color: "pink", fontSize: "40px", cursor: "pointer", width: "100%", textAlign: "end"}} className="fa-sharp fa-solid fa-heart"></i>
            </div>
          </div>
        </Col>
      )
    }
    </Row>
    </>
  )
}

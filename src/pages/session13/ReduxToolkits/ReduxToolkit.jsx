import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../../../components/Loadings/Loading'
import {postActions} from '../../../stores/slices/post.slice'

export default function ReduxToolkit() {
  const dispatch = useDispatch();

  const postStore = useSelector(store => store.postStore)

  useEffect(() => {
    console.log("postStore", postStore)
  }, [postStore])
  return (
    <>
    {
      postStore.loading ? <Loading /> : <></>
    }
      <div>ReduxToolkit</div>
      <button onClick={() => {
        dispatch(postActions.findAllPosts())
      }}>Test Lấy Danh Sách</button>

      <button onClick={() => {
        dispatch(postActions.addNew(
          {
            title: "Test",
            author: "Ahihi",
            id: 23
          }
        ))
      }}>Test Thêm Item</button>

      <button onClick={() => {
        dispatch({
          type: "post/addNew",
          payload: {
            title: "Test",
            author: "Ahihi",
            id: 23
          }
        })
      }}>Test Thêm Item cách 2</button>

      <button onClick={() => {
        dispatch(postActions.findPostById(24))
      }}>Test Tìm 1</button>

      <button onClick={() => {
        dispatch(postActions.deletePostById(35))
      }}>Test Xóa By Id</button>

      <button onClick={() => {
        dispatch(postActions.createNewPost({
          title: "Vừa tạo",
          author: "nguyễn Phước"
        }))
      }}>Test Thêm mới ngẫu nhiên</button>


      <button onClick={() => {
        dispatch(postActions.updatePostById(
          {
            postId: 36,
            postEdited: {
              title: "Vừa update",
              author: "nguyễn Phước 2232  455"
            }
          }
        ))
      }}>Test Update Theo Id</button>


    <button onClick={() => {
        dispatch(postActions.updatePatchPostById(
          {
            postId: 36,
            patchData: {
              author: "Thư"
            }
          }
        ))
      }}>Test Update 1 trường dữ liệu trong 1 post Theo Id</button>
    </>
  )
}

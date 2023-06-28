import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import api from '../../services/api'

const initialState = {
  posts: [],
  loading: false
};

const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async (newPost) => {
      const res = await api.post.create(newPost);
      return res.data;
  }
);

const findAllPosts = createAsyncThunk(
    "posts/findAll",
    async () => {
        const res = await api.post.findAll();
        return res.data;
    }
);

const findPostById = createAsyncThunk(
  "posts/findPostById",
  async (postId) => {
      const res = await api.post.findById(postId);
      return res.data;
  }
);

const deletePostById = createAsyncThunk(
  "posts/deletePostById",
  async (postId) => {
      const res = await api.post.deleteById(postId);
      return {
        postId: postId,
        data: res.data
      };
  }
);

const updatePostById = createAsyncThunk(
  "posts/updatePostByid",
  async ({postId, postEdited}) => {
      const res = await api.post.updateById(postId, postEdited);
      return res.data
  }
);

const updatePatchPostById = createAsyncThunk(
  "posts/updatePatchPostByid",
  async ({postId, patchData}) => {
      const res = await api.post.updatePathById(postId, patchData);
      return res.data
  }
);

const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
    // thêm mới vào state không thêm trên server
      addNew: (state, action) => {
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
      },
    },
    extraReducers: {
    //  Thêm mới thành công trên server
      [createNewPost.fulfilled]: (state, action) => {
        /*
          return {
            ...state,
            posts: [...state.posts, action.payload]
          };
          hoặc
          state.push(action.payload)
        */
        state.posts.push(action.payload)
      },
    //  Lấy tất cả danh sách và ghi đè vào state
      [findAllPosts.pending]: (state, action) => {
        state.loading = true;
      },
      [findAllPosts.fulfilled]: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      },
      [findAllPosts.rejected]: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      },
    //  Lấy 1 post theo id và ghi đè post đó vào array state
      [findPostById.fulfilled]: (state, action) => {
        state.posts = action.payload;
      },
    //  chờ api xóa gọi
      [deletePostById.pending]: (state, action) => {
        console.log("giai đoạn chờ")
      },
    //  Xóa thất bại
      [deletePostById.rejected]: (state, action) => {
        alert("ID Không Chính Xác")
      },
    //  Xóa thành công thì update lại state
      [deletePostById.fulfilled]: (state, action) => {
         state.posts.filter(post => post.id != action.payload.postId)
      },
    //  Update thành công update lại state
      [updatePostById.fulfilled]: (state, action) => {
        state.posts.map(post => {
          if (post.id == action.payload.id) {
            return action.payload
          }
          return post
        })
      },
    //  Update thành công update lại state
      [updatePatchPostById.fulfilled]: (state, action) => {
        state.posts.map(post => {
          if (post.id == action.payload.id) {
            return action.payload
          }
          return post
        })
      },
    },
});

export const postActions =  {
  ...postSlice.actions,
  findAllPosts,
  findPostById,
  deletePostById,
  createNewPost,
  updatePostById,
  updatePatchPostById
}

export default postSlice.reducer;


// extraReducers: (builder) => {
//   builder.addCase(findAllPosts.fulfilled, (state, action) => {
//     return action.payload;
//   });
// }
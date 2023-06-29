import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // thư viện react 
import api from '@services/api' // các api có trong hệ thống
import { message } from 'antd'; // thông báo andtd
//các async thunk

const findAll = createAsyncThunk(  // find all do list
    "findAll",
    async () => {
        const res = await api.doList.findAll();
        return res.data;
    }
);

const create = createAsyncThunk(  // find all do list
    "create",
    async (newDo) => {
        const res = await api.doList.create(newDo);
        return res.data;
    }
);

const deleteDo = createAsyncThunk(  // find all do list
    "delete",
    async (doId) => {
        const res = await api.doList.delete(doId);
        return doId
    }
);

const update = createAsyncThunk(  // find all do list
    "update",
    async ({doId, doEdited}) => {
        const res = await api.doList.update(doId,doEdited);
        return res.data
    }
);

const findFilter = createAsyncThunk(  // find all do list
    "findFilter",
    async (statusId) => {
        const res = await api.doList.findAll();
        return {
          statusId: statusId,
          data: res.data
        }
    }
);

const findAllStatus = createAsyncThunk(  // find all do status list
    "findAllStatus",
    async () => {
        const res = await api.doStatusList.findAll();
        return res.data;
    }
);
// tạo slice
const doListSlice = createSlice(
    {
        name: "doList",
        initialState: {loading: false, doList: [], doStatusList: []},
        reducers: {

        },
        extraReducers: (builder) => {
            // find all
          builder.addCase(findAll.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(findAll.fulfilled, (state, action) => {
            state.loading = false;
            state.doList = [...action.payload];
          });
          builder.addCase(findAll.rejected, (state, action) => {
            state.loading = false;
          });
            // create new
          builder.addCase(create.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(create.fulfilled, (state, action) => {
            state.loading = false;
            state.doList.push(action.payload)
            message.success('Đã tạo mới thành công!');
          });
          builder.addCase(create.rejected, (state, action) => {
            state.loading = false;
            message.error('Đã có lỗi xảy ra');
          });
            // delete do
          builder.addCase(deleteDo.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(deleteDo.fulfilled, (state, action) => {
            state.loading = false;
            state.doList = state.doList.filter(doItem => doItem.id != action.payload)
            message.success('Đã xóa thành công!');
          });
          builder.addCase(deleteDo.rejected, (state, action) => {
            state.loading = false;
            message.error('Đã có lỗi xảy ra');
          });
            // update do
          builder.addCase(update.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(update.fulfilled, (state, action) => {
            state.loading = false;
            state.doList = state.doList.map(doItem => {
              if (doItem.id == action.payload.id) {
                return action.payload
              }
              return doItem
            })
            message.success('Cập nhật thành công!');
          });
          builder.addCase(update.rejected, (state, action) => {
            state.loading = false;
            message.error('Đã có lỗi xảy ra');
          });
            // filter do
          builder.addCase(findFilter.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(findFilter.fulfilled, (state, action) => {
            state.loading = false;
            let temp = [...action.payload.data];
            action.payload.statusId == "" ?
            state.doList = temp :
            state.doList = temp.filter((item) => item.statusId != action.payload.statusId)
          });
          builder.addCase(findFilter.rejected, (state, action) => {
            state.loading = false;
            message.error('Đã có lỗi xảy ra');
          });
            // find all status
          builder.addCase(findAllStatus.pending, (state, action) => {
            state.loading = true;
          });
          builder.addCase(findAllStatus.fulfilled, (state, action) => {
            state.loading = false;
            state.doStatusList = [...action.payload];
          });
          builder.addCase(findAllStatus.rejected, (state, action) => {
            state.loading = false;
          });
        }
    }
)

// lấy ra các actions và action extra (từ slice)
export const doListActions = {
    ...doListSlice.actions,
    // các actions của extraReducers ...
    findAll,
    findAllStatus,
    create,
    deleteDo,
    update,
    findFilter
}


// lấy ra reducer (từ slice)
export default doListSlice.reducer
import {ADDNEWDO, DELETEDO, UPDATEDO} from '../constants/toDoList.constant'

export const addNewDo = (newDo) => ({
  type: ADDNEWDO,
  newDo: newDo
});

export const deleteDo = (doId) => ({
  type: DELETEDO,
  doId: doId
});

export const updateDo = (doItem) => ({
  type: UPDATEDO,
  doItem: doItem
});
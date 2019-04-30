import testData from "../../data/content.json";

const updateData = (data, id, status) => {
  const row = data.find(item => item.id === id);
  row && (row.status = status);
  return [...data];
};

const initialState = {
  data: testData
};

export default function search(state = initialState, action) {

  switch (action.type) {

    case "TABLE_SET_DATA":
      return {
        ...state,
        data: action.data
      };

    case "TABLE_UPDATE_STATUS":
      const data = updateData(state.data, action.id, action.status);

      return {
        ...state,
        data
      };

    default:
      return state;
  }

};
import { connect } from "react-redux";

import Main from "../components/Main";

import { searchTable } from "../store/selectors/table";
import { calculateStatistics } from "../store/utils/table";

const mapStateToProps = state => {
  const data = searchTable(state);

  return {
    data,
    statistics: calculateStatistics(data)
  };
};

const mapDispatchToProps = dispatch => ({
  search: (query, mode) => dispatch({
    type: "SEARCH_SET",
    query,
    mode
  }),
  searchReset: () => dispatch({
    type: "SEARCH_RESET",
  }),
  tableStatusChange: (id, status) => dispatch({
    type: "TABLE_UPDATE_STATUS",
    id,
    status
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

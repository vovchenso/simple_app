import {
  SEARCH_MODE_AND,
  SEARCH_MODE_DEFAULT,
  SEARCH_MODE_OR
} from "../../configs/constants";

const search = (data, regexpTemplate) => {
  const regex = new RegExp(regexpTemplate, "gi");

  return data.filter(row => regex.test(
    `${row.name} ${row.role} ${row.connected} ${row.status}`
  ));
};

const doDefaultSearch = (data, query) => {
  return search(data, query);
};

const doAndSearch = (data, keywords) => {
  const regexpTemplate = keywords.map(keyword => `(?=.*${keyword})`).join("");
  return search(data, regexpTemplate);
};

const doOrSearch = (data, keywords) => {
  const regexpTemplate = `(${keywords.join("|")})`;
  return search(data, regexpTemplate);
};

export const searchTable = ({ table, search }) => {
  const { data } = table;
  const { query, mode } = search;

  if (query.length === 0){
    return data;
  }

  if (mode === SEARCH_MODE_DEFAULT) {
    return doDefaultSearch(data, query);
  }

  const keywords = query.split(/\s+/);

  if (mode === SEARCH_MODE_AND) {
    return doAndSearch(data, keywords);
  }

  if (mode === SEARCH_MODE_OR) {
    return doOrSearch(data, keywords);
  }

  throw new Error(`Unknown search mode "${mode}"`);
};

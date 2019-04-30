export const calculateStatistics = data => {
  const statistics = data.reduce((tmp, item) => {
    tmp[item.status] = (tmp[item.status] || 0) + 1;
    return tmp;
  }, {});

  return statistics;
};
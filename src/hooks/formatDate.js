export const formatDate = (
  timestamp,
  isDay = true,
  isMonth = true,
  isYear = true,
  isHours = true,
  isMinutes = true,
) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return `${
    isHours && isMinutes
      ? formatNumber(hours) + ':' + formatNumber(minutes)
      : ''
  }${isDay && isMonth && isYear && isHours && isMinutes ? ' ' : ''}${
    isMonth ? formatNumber(month) + '.' : ''
  }${isDay ? formatNumber(day) + '.' : ''}${isYear ? year : ''}`;
};

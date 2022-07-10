export const getRandomDay = () => {
  const day = new Date();

  day.setDate(day.getDate() - Math.floor(Math.random() * 15));

  return day;
};

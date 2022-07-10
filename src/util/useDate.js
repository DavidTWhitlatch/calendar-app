import {useState} from 'react';

export const useDate = (initDate = new Date()) => {
  const [date, setDate] = useState(initDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return [day, month, year, setDate];
};
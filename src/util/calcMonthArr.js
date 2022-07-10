import { range } from 'lodash';

export const calcMonthArr = (month, year) => {
  const firstDay = new Date(year, month).getUTCDay();
  const numDays = 32 - new Date(year, month, 32).getUTCDate();
  const currentMonthArr = range(1, numDays + 1);
  let prevMonthArr, nextMonthArr;

  if (firstDay !== 0) {
    prevMonthArr = range(
      new Date(year, month, 1 - firstDay).getUTCDate(),
      new Date(year, month, 0).getUTCDate() + 1
    );
  } else {
    prevMonthArr = [];
  }

  nextMonthArr =
    new Date(year, month, numDays + 1).getUTCDay() !== 0
      ? range(
          1,
          Math.abs(7 - new Date(year, month, numDays + 1).getUTCDay()) + 1
        )
      : [];

  return [
    ...prevMonthArr.map((d) => ({
      active: false,
      date: new Date(year, month - 1, d),
    })),
    ...currentMonthArr.map((d) => ({
      active: true,
      date: new Date(year, month, d),
    })),
    ...nextMonthArr.map((d) => ({
      color: false,
      date: new Date(year, month + 1, d),
    })),
  ];
};

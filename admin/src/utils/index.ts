import dayjs from 'dayjs';

// 随机产生一个大于min且小于max的整形随机数
export const getRandomNum = (min: number, max: number) => {
  let num: number = -1;
  while (num === -1) {
    const n: number = Math.floor(Math.random() * max);
    if (n > min) {
      num = n;
    }
  }
  return num;
};

// 两个时间相减（或于当前时间相减）所得到的时长数（最大是“天”为单位）
export const getRemainingTime = (lastTime: string, first = dayjs()) => {
  const day = dayjs(lastTime).diff(dayjs(first), 'day');
  const hour = dayjs(lastTime).diff(dayjs(first), 'hour');
  const minute = dayjs(lastTime).diff(dayjs(first), 'minute');
  const second = dayjs(lastTime).diff(dayjs(first), 'second');
  if (day) {
    const h = dayjs(lastTime).subtract(day, 'day').diff(dayjs(first), 'hour');

    const min = dayjs(lastTime)
      .subtract(day, 'day')
      .subtract(h, 'hour')
      .diff(dayjs(first), 'minute');

    const s = dayjs(lastTime)
      .subtract(day, 'day')
      .subtract(h, 'hour')
      .subtract(min, 'minute')
      .diff(dayjs(first), 'second');

    return `${day}天${h}时${min}分${s}秒`;
  }
  if (hour) {
    const min = dayjs(lastTime)
      .subtract(hour, 'hour')
      .diff(dayjs(first), 'minute');

    const s = dayjs(lastTime)
      .subtract(hour, 'hour')
      .subtract(min, 'minute')
      .diff(dayjs(first), 'second');

    return `${hour}时${min}分${s}秒`;
  }
  if (minute) {
    const s = dayjs(lastTime)
      .subtract(minute, 'minute')
      .diff(dayjs(first), 'second');

    return `${minute}分${s}秒`;
  }
  if (second) {
    return `${second}秒`;
  }
  return '0秒';
};

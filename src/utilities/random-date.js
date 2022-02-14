import format from "date-format";

export function randomDate(start, end, formatStr) {
  const newDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  // return dateFormat(newDate, format);
  return format(formatStr, newDate);
}

// const s = new Date(1997, 0, 1);
// const e = new Date();
// const f = `yyyy-MM-dd`;

// console.log(randomDate(s, e, f));

import { randomIntFromInterval } from "./random-int-from-interval";

const topicsArr = [
  "Nike",
  "Louis Vuitton",
  "Hermes",
  "Gucci",
  "Zalando",
  "Adidas",
  "Tiffany & Co.",
  "Zara",
  "H&M",
  "Cartier",
];

export function topic() {
  let n = randomIntFromInterval(1, topicsArr.length - 1);
  // console.log("topicsArr.legnth: ", topicsArr.length);
  // console.log("N: ", n);
  return topicsArr[n];
}

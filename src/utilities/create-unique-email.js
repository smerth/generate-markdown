import { v4 as uuidv4 } from "uuid";

const domains = [
  "@yahoo.com",
  "@live.com",
  "@icloud.com",
  "@gmail.com",
  "@aol.com",
];

export function createUniqueEmail() {
  const n = domains.length;
  const r = Math.floor(Math.random() * n);
  return `${uuidv4()}${domains[r]}`;
}

import { shuffle } from "../array";
import getRandom from "./getRandom";

type PasswordOptions = {
  lower?: boolean;
  upper?: boolean;
  number?: boolean;
  punctuation?: boolean;
  symbol?: boolean;
};

const DEFAULT_DICTIONARIES = {
  number: "0123456789",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  punctuation: ";:'\",.<>?/",
  symbol: "!@#$%^&*()-_=+[]{}|\\~`",
};

export default function generatePassword(length: number, options: PasswordOptions): string {
  const dictionaries = Object.entries(options).reduce((dict, [key, enabled]) => {
    if(enabled) {
      dict.push(DEFAULT_DICTIONARIES[key]);
    }

    return dict;
  }, []);

  const totalChars = dictionaries.join("");

  let passwordChars: string[] = Array.from({ length }, () => getRandom(totalChars));
  passwordChars = shuffle(passwordChars);

  return passwordChars.join("");
}
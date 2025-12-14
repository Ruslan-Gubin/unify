import fs from "node:fs";
import path from "node:path";

export const readContentFile = (href: string) => {
  const pathFile = path.resolve(href);

  return new Promise((res, reject) => {
    return fs.readFile(pathFile, { encoding: "utf8" }, (error, data) => {
      if (error) {
        console.error("Failed read file:", error);
        reject(error);
      } else {
        res(data);
      }
    });
  });
};

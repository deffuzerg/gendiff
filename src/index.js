import path from 'path';
import { readFileSync } from 'fs';
import parse from './parser.js';
import { fileURLToPath } from "url";
import differenceTree from './usages.js';
import formater from './formater/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

// const getPath = (filepath) => path.resolve(`${process.cwd()}`, filepath);

const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const path1 = filePath(filepath1);
  const path2 = filePath(filepath2);
  const fileFormat1 = getFormat(path1);
  const fileFormat2 = getFormat(path2);

  const obj1 = readFileSync(path1, 'utf-8');
  const obj2 = readFileSync(path2, 'utf-8');

  const parsed1 = parse(obj1, fileFormat1);
  const parsed2 = parse(obj2, fileFormat2);

  const diff = differenceTree(parsed1, parsed2);
  
  return formater(diff, format);
};

export {genDiff} ;

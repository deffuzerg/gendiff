import path from "path";
import parse from "./parser.js";
import { readFileSync } from 'fs';
import { resultTree } from "./gendiff.js";

const getPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2) => {

    const path1 = getPath(filepath1);
    const path2 = getPath(filepath2);
    const fileFormat1 = getFormat(path1);
    const fileFormat2 = getFormat(path2);
    
    const obj1 = readFileSync(path1,'utf-8');
    const obj2 = readFileSync(path2,'utf-8');

    const parsed1 = parse(obj1, fileFormat1);
    const parsed2 = parse(obj2, fileFormat2);

    const result = resultTree(parsed1, parsed2);
    
    return result;
};

export {genDiff};
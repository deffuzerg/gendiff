import { genDiff } from "../src/index.js";
import path from "path";
import { fileURLToPath } from "url";
import parse from "../src/parser.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const path1 = filePath('file1.json');
const path2 = filePath('file2.json');


const difference = genDiff(path1, path2);

const result = parse(filePath('result.txt'));

test('test', () => {
    expect(difference).toEqual(result);
})

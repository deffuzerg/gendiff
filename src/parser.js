import { readFileSync } from 'fs';
import yaml from 'js-yaml';
const parse = (data, format = '.txt') => {
  switch (format) {
    case '.json': return JSON.parse(data);
    case '.txt': return readFileSync(data, 'utf-8');
    case '.yml': return yaml.load(data, 'utf-8');
    case '.yaml': return yaml.load(data, 'utf-8');
    default: throw new Error('no extention');
  }
};
export default (parse);

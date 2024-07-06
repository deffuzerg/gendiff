import { readFileSync } from 'fs';
const parse = (data, format = '.txt') => {
    
    switch (format) {
        case '.json': return JSON.parse(data);
        case '.txt': return readFileSync(data, 'utf-8');
    }
};
export default (parse);
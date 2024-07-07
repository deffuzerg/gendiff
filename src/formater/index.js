import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formater = (diff, format) => {
    switch (format) {
        case 'stylish': return stylish(diff);
        case 'plain': return plain(diff);
        case 'json': return json(diff);
    }
}

export default formater;
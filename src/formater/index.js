import stylish from './stylish.js';

const formater = (diff, format) => {
    switch (format) {
        case 'stylish': return stylish(diff);
    }
}

export default formater;
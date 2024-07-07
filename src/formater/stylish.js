import _ from 'lodash';

const getValue = (value, depth = 0) => {
    const indent = '    '.repeat(depth);

    if (!_.isObject(value)) {
        return value;
    }
    const keysAndValues = Object.entries(value);
    const result = keysAndValues.map(([key, value]) => {
        return `${indent}  ${key}: ${getValue(value, depth + 1)}`;
    })
    return [
        '{',
        ...result,
        `${indent}}`
    ].join('\n');
}

const stylish = (diff, depth = 0) => {
    const indent = '    '.repeat(depth);

    const result = diff.flatMap((node) => {
        switch (node.action) {
            case 'add': return `${indent}+ ${node.key}: ${getValue(node.value, depth + 1)}`;
            case 'remove': return `${indent}- ${node.key}: ${getValue(node.value, depth + 1)}`;
            case 'modify': return [
                `${indent}- ${node.key}: ${getValue(node.value1, depth + 1)}`,
                `${indent}+ ${node.key}: ${getValue(node.value2, depth + 1)}`
            ];
            case 'nothing': return `${indent}  ${node.key}: ${getValue(node.value, depth + 1)}`;
            case 'nested': return `${indent}  ${node.key}: ${stylish(node.children, depth + 1)}`;
        }
    })
    return [
        '{',
        ...result,
        `${indent}}`,
    ].join('\n');
}

export default stylish;
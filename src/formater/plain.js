import _ from 'lodash';

const getValue = (value) => {
    if (_.isObject(value)) {
        return '[complex value]';
    }
    if (typeof value === 'string') {
        return `'${value}'`;
    }
    if (_.isNull(value)) {
        return 'null';
    }
    return `${value}`;
}

const plain = (diff) => {
    const iter = (node, path) => {
        const lines = node.flatMap((line) => {
            const propertyPath = (path) => (path === '') ? `${line.key}` : `${path}.${line.key}`;

            switch (line.action) {
                case 'add': return `Property ${propertyPath(path)} was added with value: ${getValue(line.value)}`;
                case 'remove': return `Property ${propertyPath(path)} was removed`;
                case 'modify': return `property ${propertyPath(path)} was updated. From ${getValue(line.value1)} to ${getValue(line.value2)}`;
                case 'nested': return iter(line.children, propertyPath(path));
            }
        })
        const filteredLines = lines.filter((line) => {
            if (line !== undefined) {
                return line;
            }
        })
        return filteredLines.join('\n');
    }
    return iter(diff, '');
}

export default plain;
import differenceTree from './usages.js';

const resultTree = (obj1, obj2) => {
  const differenceBTW = differenceTree(obj1, obj2);
  const space = '    ';

  const result = differenceBTW.map((node) => {
    switch (node.action) {
      case 'add': return `${space}+ ${node.key}: ${node.value}`;
      case 'remove': return `${space}- ${node.key}: ${node.value}`;
      case 'modify': return [`${space}- ${node.key}: ${node.value1}`, `${space}+ ${node.key}: ${node.value2}`].join('\n');
      case 'nothing': return `${space}  ${node.key}; ${node.value}`;
      default: throw new Error('Error');
    }
  });
  return [
    '{',
    ...result,
    '}',
  ].join('\n');
};

export default resultTree;

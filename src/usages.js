import _ from 'lodash';

const differenceTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const union = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(union);

  const result = sortedKeys.map((key) => {
    const oldValue = obj1[key];
    const newValue = obj2[key];

    if (!Object.hasOwn(obj1, key)) {
      return { action: 'add', key, value: newValue };
    }
    if (!Object.hasOwn(obj2, key)) {
      return { action: 'remove', key, value: oldValue };
    }
    if (oldValue !== newValue) {
      return {
        action: 'modify', key, value1: oldValue, value2: newValue,
      };
    }
    return { action: 'nothing', key, value: oldValue };
  });
  return result;
};

export default differenceTree;

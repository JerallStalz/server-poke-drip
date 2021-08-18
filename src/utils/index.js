exports.numberToString = (number) => {
  const numberString = number.toString();
  if (numberString.length === 1) {
    return `00${number}`;
  }
  if (numberString.length === 2) {
    return `0${number}`;
  } else {
    return numberString;
  }
};

exports.orderTypes = (types) => {
  const ordenedTypes = {
    1: types[0].type.name,
    2: types[1] ? types[1].type.name : null
  };
  return ordenedTypes;
};

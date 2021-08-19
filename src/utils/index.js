function translator(type) {
  switch (type) {
    case "normal":
      return "Normal";
    case "fire":
      return "Fuego";
    case "water":
      return "Agua";
    case "grass":
      return "Planta";
    case "fliying":
      return "Volador";
    case "fighting":
      return "Lucha";
    case "poison":
      return "Veneno";
    case "electric":
      return "Electrico";
    case "ground":
      return "Tierra";
    case "rock":
      return "Piedra";
    case "physic":
      return "Psiquico";
    case "ice":
      return "Hielo";
    case "bug":
      return "Bicho";
    case "ghost":
      return "Fantasma";
    case "steel":
      return "acero";
    case "dragon":
      return "Dragon";
    case "dark":
      return "Oscuro";
    case "fairy":
      return "Hada";
    default:
      return type;
  }
}

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
    first: types[0].type.name,
    second: types[1] ? types[1].type.name : null,
  };
  const endTypes = {
    en: ordenedTypes,
    es: {
      first: translator(ordenedTypes.first),
      second: translator(ordenedTypes.second),
    },
  };

  return endTypes;
};
// Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy

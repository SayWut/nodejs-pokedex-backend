const _serializeSingle = (single) => {
  const { pokemonId, ...rest } = single;

  return {
    id: pokemonId,
    ...rest,
  };
};

const serializer = (data) => {
  if (!data) {
    throw new Error("Expect data to be not undefined nor null");
  }
  const success = { success: true };
  if (Array.isArray(data)) {
    success.pokemons = data.map(_serializeSingle);
    return success;
  }

  success.pokemons = _serializeSingle(data);
  return success;
};

module.exports = serializer;

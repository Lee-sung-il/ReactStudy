import { createAsyncThunk } from '@reduxjs/toolkit';
import ky from 'ky';

export const fetchMultiplePokemonById = createAsyncThunk('pokemon/fetchMultiplePokemonById', async (maxPokemonId) => {
  const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
  const fetchAPI = async (pokemonId) => {
    const responseData = await ky(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`,
    ).json();
    const pokemonData = {
      id: pokemonId,
      name: responseData.names.find((el) => el.language.name === 'ko').name,
      description: responseData.flavor_text_entries.find(
        (el) => el.language.name === 'ko',
      ).flavor_text,
      front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
    };
    return pokemonData;
  };

  return await Promise.all(numberArray.map((el) => fetchAPI(el)));

  // {
  //   포멧몬 이름,
  //     포켓몬 이미지 -> 앞 뒤
  //   포멧몬 설명
  // }
});

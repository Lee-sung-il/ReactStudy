import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPokemonById } from '../RTK/selecter.js';

export default function Detail() {
  const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
    if (!pokemon) {
        return <div>Loading or Not Found</div>;
    }

    return (
    <div className="flex flex-col justify-center items-center border border-[gray] p-[30px] rounded[10px]">
      <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
      <img className="w-[200px]" src={pokemon.front} alt="" />
    </div>
  );
}

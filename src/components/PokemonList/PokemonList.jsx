import pokemonJSON from "../../data/pokemon.json";
import { useState } from "react";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (event) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value);
    });

    setFilterPokemons(search);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />
      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
          <div>Data Pokemon Tidak Ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
          <PokemonItem key={item.id} pokemon={item} />
        )))}
      </div>
    </div>
  );
}

export default PokemonList;

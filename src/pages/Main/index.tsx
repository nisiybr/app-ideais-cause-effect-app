import React, { useState, useCallback } from 'react';

import {
  Container,
  Header,
  Body,
  SideBar,
  Principal,
  Row,
  Link,
} from './styles';

const Main: React.FC = () => {
  const [pokemon, setPokemon] = useState({
    id: 1,
    name: 'Bulbasaur',
    height: 0.7,
    weight: 6.9,
    category: 'Seed',
    abilities: 'Overgrow',
    gender: 'Male',
  });
  const [pokemons, setPokemons] = useState([
    {
      id: 1,
      name: 'Bulbasaur',
      height: 0.7,
      weight: 6.9,
      category: 'Seed',
      abilities: 'Overgrow',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Ivysaur',
      height: 0.8,
      weight: 8.9,
      category: 'Seed',
      abilities: 'Overgrow',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Venusaur',
      height: 1.0,
      weight: 10.0,
      category: 'Seed',
      abilities: 'Solarbean',
      gender: 'Male',
    },
  ]);
  const handleClick = useCallback(
    id => {
      const pokemonSelected = pokemons.filter(item => item.id === id);
      setPokemon(pokemonSelected[0]);
    },
    [pokemons],
  );
  return (
    <Container>
      <Header>
        <h1>Cause Effect App</h1>
      </Header>
      <Body>
        <SideBar>
          {pokemons.map(item => (
            <Link
              clicked={pokemon.id === item.id}
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </Link>
          ))}
        </SideBar>
        <Principal>
          <h1>{pokemon.name}</h1>
          <div>
            <Row>
              <div>
                <strong>Height</strong>

                <span>{`${pokemon.height} m`}</span>
              </div>
              <div>
                <strong>Category</strong>
                <span>{pokemon.category}</span>
              </div>
            </Row>
            <Row>
              <div>
                <strong>Weight</strong>
                <span>{`${pokemon.weight} kg`}</span>
              </div>
              <div>
                <strong>Abilities</strong>
                <span>{pokemon.abilities}</span>
              </div>
            </Row>
            <Row>
              <div>
                <strong>Gender</strong>
                <span>{pokemon.gender}</span>
              </div>
              <div>
                <strong />
                <span />
              </div>
            </Row>
          </div>
        </Principal>
      </Body>
    </Container>
  );
};

export default Main;

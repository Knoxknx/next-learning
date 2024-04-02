import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts/Layout';
import PokemonCard from '@/components/pokemon/PokemonCard';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons' >
      <Grid.Container gap={2} justify='center' >
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
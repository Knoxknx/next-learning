import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts/Layout';
import { Pokemon } from '@/interfaces';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Layout>
      <Grid.Container css={{ marginTop: '5px' }} gap={2} >
        <Grid xs={12} md={4} >
          <Card isHoverable css={{ padding: '30px' }} >
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.['official-artwork'].front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>

          </Card>
        </Grid>

        <Grid xs={12} md={8} >
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
              <Text h1 transform='capitalize' >{pokemon.name}</Text>
              <Link href='/favorites'>
                <Button color='gradient' ghost  >Guardar en Favoritos</Button>
              </Link>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction='row' display='flex' gap={0}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>

          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons251 = [...Array(251)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons251.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;
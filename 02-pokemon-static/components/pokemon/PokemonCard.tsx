import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: NextPage<Props> = ({ pokemon }) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}  >
      <Card isHoverable isPressable onClick={onClick} >
        <Card.Body css={{ p: 1 }} >
          <Card.Image src={pokemon.image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer css={{ p: 1 }} >
          <Row justify='space-between'>
            <Text transform='capitalize' >{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}


export default PokemonCard;
import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray200.value
    }}>
      <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/59.png' alt='Arcanine' width={70} height={70} />

      <Link style={{ display: 'flex' }} href='/'>
        <Text color='white' h2>P</Text>
        <Text color='White' h3>okémon</Text>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href='/favorites'>
        <Text color='White'>Favoritos</Text>
      </Link>
    </div>
  );
}

export default NavBar;
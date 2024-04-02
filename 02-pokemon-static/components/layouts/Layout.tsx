import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../ui/NavBar';

interface props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: NextPage<props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Knox Knox" />
        <meta name="description" content={`Informacion sobre el Pokemon ${title} `} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <NavBar />
      <main style={{ padding: '0x 20px' }}>{children}</main>
    </>
  );
}

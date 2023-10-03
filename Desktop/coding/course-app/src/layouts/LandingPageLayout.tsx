//LandingPageLayout.tsx
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: JSX.Element;
};

// TODO: Update this with actually meaningful titles once a name is figured out
const title = 'Course Platform';

export default function Home({ children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
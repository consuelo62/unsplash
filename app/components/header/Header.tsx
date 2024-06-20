import Image from 'next/image';
import Link from 'next/link';

import HomeLink from './links/HomeLink';
import { Routes } from '@unp/app/lib/utils/routes';

import './styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <section>
        <Link href={Routes.home}>
          <Image
            src="/Logo.svg"
            alt="Unplash box image"
            width={150}
            height={30}
          />
        </Link>
      </section>
      <section className="header_links">
        <HomeLink
          className="header_links__home"
          href={Routes.home}
          text="Home"
        />
        <HomeLink href={Routes.collections} text="Collections" />
      </section>
    </header>
  );
}

import Image from 'next/image';
import SearchImages from './inputs/SearchImages';

import './styles/header.css';

export default function Header() {
  return (
    <header className="images_header">
      <Image
        className="images_header__gradient"
        src="/gradiend-bg.svg"
        alt="Gradient images header"
        width={1280}
        height={80}
      />
      <SearchImages className="images_header__input" />
    </header>
  );
}

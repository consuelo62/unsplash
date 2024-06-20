'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './styles/homeLink.css';

type Props = {
  className?: string;
  href: string;
  text: string;
};

export default function HomeLink({ className, href, text }: Props) {
  const pathname = usePathname();

  const selected = pathname === href;

  return (
    <Link
      className={`home_link btn ${selected ? 'selected' : ''} ${
        className || ''
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}

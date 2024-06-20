'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Spinner from '../loaders/Spinner';

import SearchIcon from './icons/Search';

import './styles/searchInput.css';

type Props = {
  className?: string;
  paramName: string;
  isPending?: boolean;
};

export default function SearchInput({
  className,
  paramName,
  isPending,
}: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(paramName, term);
    } else {
      params.delete(paramName);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <div className={`search_input ${className || ''}`}>
      <input
        className="search_input__field"
        type="text"
        name={paramName}
        placeholder="Enter your keywords..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get(paramName)?.toString()}
      />
      {isPending ? (
        <Spinner className="search_input__loader" />
      ) : (
        <SearchIcon />
      )}
    </div>
  );
}

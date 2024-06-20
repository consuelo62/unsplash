'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

import SearchInput from '../../../components/inputs/SearchInput';

import './styles/searchImages.css';

type Props = {
  className?: string;
};

export default function SearchImages({ className }: Props) {
  const QUERY_NAME = 'query';

  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    const query = formData.get(QUERY_NAME)?.toString();

    if (!query) return;

    startTransition(() => {
      push(`/images?${QUERY_NAME}=${query}`);
    });
  };

  return (
    <form className={className || ''} action={handleSubmit}>
      <SearchInput
        className="search_images__input"
        paramName={QUERY_NAME}
        isPending={isPending}
      />
      <button type="submit" hidden />
    </form>
  );
}

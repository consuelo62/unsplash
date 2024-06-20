'use client';

import { useFormStatus } from 'react-dom';

import Spinner from '../loaders/Spinner';

import './styles/submit.css';

type Props = {
  className?: string;
  children: React.ReactNode;
  formAction?: (formData: FormData | any) => Promise<void | null>;
};

export default function Submit({ className, children, formAction }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`submit ${className || ''}`}
      type="submit"
      formAction={formAction}
      disabled={pending}
    >
      {children}
      {pending && <Spinner />}
    </button>
  );
}

import React from 'react';
import { CSSProperties } from 'react';
import CloseModal, { ClosingProps } from './buttons/CloseModal';
import ModalOpener from './ModalOpener';

import './styles/modal.css';

export type ModalProps = {
  id: string;
  open?: boolean;
  className?: string;
  style?: CSSProperties;
  title?: string;
  close?: ClosingProps;
  children: React.ReactNode;
};

export default function Modal({
  id,
  open,
  className,
  style,
  title,
  close,
  children,
}: ModalProps) {
  return (
    <dialog id={id} className={className} style={style}>
      <ModalOpener menuId={id} open={open || false} />
      <div id="modal_content" className="modal_content">
        <CloseModal id={id} {...close} />
        {children}
      </div>
    </dialog>
  );
}

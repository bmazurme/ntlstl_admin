import React from 'react';
import type { PropsWithChildren } from 'react';

type TypeContainerProps = PropsWithChildren;

export default function Container({ children }: TypeContainerProps) {
  return (
    <div>
      {children}
    </div>
  );
}

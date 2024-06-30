import React from 'react';
import type { PropsWithChildren } from 'react';

import Header from '../header';
import Footer from '../footer';

import style from './content.module.css';

export default function Content({ children, header, footer }
  : PropsWithChildren & { header?: boolean; footer?: boolean; }) {
  return (
    <main className={style.content}>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </main>
  );
}

declare module '*.css';

declare module 'interpolate-html-plugin';
declare module 'html-webpack-preconnect-plugin';
declare module 'compression-webpack-plugin';

declare module '@reduxjs/toolkit/query/react' {
  export * from '@reduxjs/toolkit/dist/query/react';
}

declare module '@reduxjs/toolkit/query' {
  export * from '@reduxjs/toolkit/dist/query';
}

type TypeUser = {
  defaultEmail: string;
  paid: string;
  projectId: string;
};


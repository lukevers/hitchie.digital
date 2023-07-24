'use client';

import React from 'react';
import ReactDOM from 'react-dom';

export default function Axe() {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
  }

  return <></>;
}

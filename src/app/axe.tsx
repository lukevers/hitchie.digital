'use client';

import React from 'react';
import ReactDOM from 'react-dom';

export default function Axe() {
  if (typeof window !== 'undefined') {
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
  }

  return <></>;
}

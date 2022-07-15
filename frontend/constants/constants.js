import React from 'react';
import Library from '../components/screens/Library';

export const coverImage =
  'https://firebasestorage.googleapis.com/v0/b/web3-bots.appspot.com/o/PNG%20image-E94F3F952DB8-1.png?alt=media&token=a5d4c96d-2e77-46fd-90d6-fa9b5db8c59d';

export const screens = [
  {
    name: 'Library',
    component: () => <Library />,
  },
];

export const stack = {
  home: 'Home',
};

export const icons = {
  pause: 'pause-circle',
  play: 'play-circle',
  back: 'step-backward',
  forward: 'step-forward',
};

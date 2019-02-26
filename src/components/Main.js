import React from 'react';

import Komentar from './Komentar'
import podaci from '../data/utisci.json';

const mapirano = podaci.map((obj, i) => 
  <Komentar key={i} ime={obj.ime} utisak={obj.utisak} />
);

function Main() {
  return (
    <main>
      <h2>Utisci mušterija</h2>
      {mapirano}
    </main>
  )
}

export default Main
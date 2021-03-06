import React from 'react'
import AdSense from 'react-adsense';

const Adsense = () => (
  <div>
      <AdSense.Google
          client={process.env.GOOGLE_ADSENSE_ID}
          slot=''
          style={{ display: 'block' }}
          format='auto'
          responsive='true'
          layoutKey='-gw-1+2a-9x+5c'
      />
  </div>
);

export default Adsense;
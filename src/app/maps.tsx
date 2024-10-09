import React from 'react';

const GoogleMap = () => {
  return (
    <div className="mapouter flex">
      <div className="gmap_canvas">
        <iframe
          src="https://maps.google.com/maps?q=ghana%20telecom&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: '490px', height: '400px' }}
          title="Google Map of Ghana Telecom"
        ></iframe>
        <style>
          {`
            .mapouter { display: table; }
            .gmap_canvas { overflow: hidden; position: relative; height: 400px; width: 490px; background: #fff; }
            .gmap_canvas iframe { position: relative !important; z-index: 2 !important; }
            .gmap_canvas a { color: #fff !important; position: absolute !important; top: 0 !important; left: 0 !important; z-index: 0 !important; }
          `}
        </style>
        <a href="https://www.taxuni.com/michigan-state-taxes-guide/">Michigan State Taxes Guide</a>
      </div>
    </div>
  );
};

export default GoogleMap;

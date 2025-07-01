import React, { useState } from 'react';
import inventoryImage from '../Images/inventory.svg';
import billingImage from '../Images/billing.svg';
import accountingImage from '../Images/accounting.svg'; 
// import Billing from "../Videos/billing.mp4"
// import inventory from "../Videos/inventory.mp4"
import './Offerings.css';

const offeringsData = [
  {
    id: 1,
    title: 'Billing/POS',
    image: 'https://img.freepik.com/free-photo/close-up-baker-with-machine_23-2149233717.jpg?uid=R2740650&ga=GA1.1.1997829733.1728553786&semt=ais_items_boosted&w=740', 
    alt: ' Billing/POS',
    position: 'right',
  },
  {
    id: 2,
    title: 'Accounting',
    image: 'https://img.freepik.com/premium-photo/comprehensive-business-financial-analysis_1057472-196.jpg?uid=R2740650&ga=GA1.1.1997829733.1728553786&semt=ais_items_boosted&w=740',
    alt: 'Accounting',
    position: 'left',
  },
  {
    id: 3, 
    image: 'https://img.freepik.com/free-photo/medium-shot-woman-with-tablet_23-2148902535.jpg?uid=R2740650&ga=GA1.1.1997829733.1728553786&semt=ais_items_boosted&w=740',
    title: ' Inventory Control',
    position: 'right', 
    alt: 'Inventory/Warehouse Management',
  },
];

function Offerings({ theme }) {
  const [hoveredId, setHoveredId] = useState(null);
  const hoveredOffering = offeringsData.find((item) => item.id === hoveredId);

  return (
    <div
      className="offerings-wrapper"
      style={{
        background: theme === 'light' ? '#fff' : '#000',
        color: theme === 'light' ? '#111' : '#fff',
        transition: 'background 0.3s, color 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {theme === 'dark' && hoveredOffering && (
        <img
          src={hoveredOffering.image}
          alt=""
          className="blur-bg-img"
          aria-hidden="true"
          draggable="false"
        />
      )}
      <div className="section-heading" style={{ color: theme === 'light' ? '#111' : '#fff' }}>See Pozo Offerings</div>
      <div className="offerings-list">
        {offeringsData.map((offering) => (
          <div
            key={offering.id}
            className={`offering-item ${hoveredId && hoveredId !== offering.id ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredId(offering.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ color: theme === 'light' ? '#111' : '#fff' }}
          >
            <div className="offering-title" style={{ color: theme === 'light' ? '#111' : '#fff' }}>{offering.title}</div>
            {hoveredId === offering.id && (
              <div className={`hover-preview ${offering.position} ${hoveredId === offering.id ? 'visible' : ''}`}>
                <img src={offering.image} alt={offering.alt} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offerings;

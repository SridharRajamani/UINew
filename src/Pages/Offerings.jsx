// import React, { useState } from 'react';
// import inventoryImage from '../Images/inventory.svg';
// import billingImage from '../Images/billing.svg';
// import accountingImage from '../Images/accounting.svg';
// import './Offerings.css';

// const offeringsData = [
//   {
//     id: 1,
//     title: 'Inventory Control',
//     image: inventoryImage,
//     alt: 'Inventory/Warehouse Management',
//     position: 'right',
//   },
//   {
//     id: 2,
//     title: 'Billing/POS',
//     image: billingImage,
//     alt: 'Billing/POS',
//     position: 'left',
//   },
//   {
//     id: 3,
//     title: 'Accounting',
//     image: accountingImage,
//     alt: 'Accounting',
//     position: 'right',
//   },
// ];


// function Offerings() {
//   const [hoveredId, setHoveredId] = useState(null);

//   const hoveredOffering = offeringsData.find((item) => item.id === hoveredId);

//   return (
//     <div className="offerings-wrapper">
//       {/* Background Image layer */}
//       <div
//         className={`background-fade ${hoveredOffering ? 'show' : ''}`}
//         style={{
//           backgroundImage: hoveredOffering ? `url(${hoveredOffering.image})` : 'none',
//         }}
//       ></div>

//       <div className="offerings-list">
//         {offeringsData.map((offering) => (
//           <div
//             key={offering.id}
//             className={`offering-item ${
//               hoveredId && hoveredId !== offering.id ? 'dimmed' : ''
//             }`}
//             onMouseEnter={() => setHoveredId(offering.id)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             <h2 className="offering-title">{offering.title}</h2>

//             {/* Image popup */}
//             <div
//               className={`hover-preview ${hoveredId === offering.id ? 'visible' : ''}`}
//             >
//               <img src={offering.image} alt={offering.alt} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default Offerings;



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

function Offerings() {
  const [hoveredId, setHoveredId] = useState(null);
  const hoveredOffering = offeringsData.find((item) => item.id === hoveredId);

  return (
    <> 
     

    <div className="offerings-wrapper">
             <div className="section-heading">See Pozo Offerings</div>

 <div
  className={`background-fade ${hoveredOffering ? 'show' : ''}`}
  style={{
    backgroundImage:
      hoveredOffering?.type !== 'video'
        ? `url(${hoveredOffering?.image})`
        : 'none',
  }}
>
  {hoveredOffering?.type === 'video' && (
    <video
      src={hoveredOffering.image}
      autoPlay
      muted
      loop
      playsInline
      className="background-video"
    />
  )}
</div>


      <div className="offerings-list">
        {offeringsData.map((offering) => (
          <div
            key={offering.id}
            className={`offering-item ${hoveredId && hoveredId !== offering.id ? 'dimmed' : ''}`}
            onMouseEnter={() => setHoveredId(offering.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="offering-title">{offering.title}</div>

          {hoveredId === offering.id && (
  <div className={`hover-preview ${offering.position} ${hoveredId === offering.id ? 'visible' : ''}`}>
    {offering.type === 'video' ? (
      <video
        src={offering.image}
        autoPlay
        muted
        loop
        playsInline
        className="hover-video"
      />
    ) : (
      <img src={offering.image} alt={offering.alt} />
    )}
  </div>
)}



          </div>
        ))}
      </div>
    </div>
    </>

  );
}

export default Offerings;

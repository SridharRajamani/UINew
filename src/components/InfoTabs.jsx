import React, { useState, useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { 
  FaUtensils, FaBreadSlice, FaCheese, FaCoffee, FaSeedling, FaMobileAlt, FaPlug, FaTabletAlt, FaShoppingCart, FaStore, FaTshirt, FaStoreAlt, FaIndustry, FaTools, FaLaptop, FaMobile, FaLaptopCode, FaUserMd, FaCalendarCheck, FaFileMedical, FaPhoneAlt, FaBoxes, FaRegClock, FaRegListAlt, FaRegHandshake, FaRegMoneyBillAlt
} from 'react-icons/fa';
import { 
  MdOutlineLocalPharmacy, MdOutlineInventory, MdOutlineScience
} from 'react-icons/md';
import '../Pages/HeroSection.css';

const defaultTabs = [
  'Retail Store',
  'Electronic Retailer',
  'Mobile & Accessories',
  'Grocery Stories',
  'Apparels & Textiles',
  'Blue Metal Suppliers',
];

const defaultDetails = [
  ['Restaurant', 'Bakery', 'Dairy Delights', 'Coffee Shop', 'Flower Shop'],
  ['Electronics', 'Mobile Store', 'Laptop Shop'],
  ['Mobile Accessories', 'Chargers', 'Covers'],
  ['Supermarket', 'Mini Mart'],
  ['Clothing', 'Textile Shop'],
  ['Blue Metal', 'Construction Supplies'],
];

const iconMap = {
  'Restaurant': <FaUtensils style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Bakery': <FaBreadSlice style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Dairy Delights': <FaCheese style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Coffee Shop': <FaCoffee style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Flower Shop': <FaSeedling style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Mobile Accessories': <FaMobileAlt style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Chargers': <FaPlug style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Covers': <FaTabletAlt style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Supermarket': <FaShoppingCart style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Mini Mart': <FaStore style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Clothing': <FaTshirt style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Textile Shop': <FaStoreAlt style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Blue Metal': <FaIndustry style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Construction Supplies': <FaTools style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Electronics': <FaLaptop style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Mobile Store': <FaMobile style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />, 
  'Laptop Shop': <FaLaptopCode style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />
};
const fallbackIcon = <FaStore style={{ marginRight: '0.7rem', fontSize: '1.5rem' }} />;

function InfoTabs({ heading = 'Sample Heading', tabs = defaultTabs, details = defaultDetails }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const currentDetails = details[activeTab] || [];
  const mid = Math.ceil(currentDetails.length / 2);
  const col1 = currentDetails.slice(0, mid);
  const col2 = currentDetails.slice(mid);

  // Scroll tabs left/right
  const scrollTabs = (dir) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir * 120, behavior: 'smooth' });
    }
  };

  // Check if scroll buttons are needed
  const [showScroll, setShowScroll] = React.useState(false);
  React.useEffect(() => {
    const el = tabsRef.current;
    if (el && el.scrollWidth > el.clientWidth) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }, [tabs]);

  const detailStyle = {
    fontSize: '22px',
    marginBottom: '1.8rem',
    wordBreak: 'break-word',
    color: 'white',
    fontWeight: 400,
    letterSpacing: '0.01em',
    lineHeight: 1.2,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };
  const iconStyle = { fontSize: '1.5rem', marginLeft: '0.3rem', flexShrink: 0, transition: 'color 0.2s' };

  return (
    <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem 3vw', width: '100%', maxWidth: '100vw', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 400, marginBottom: '1.5rem', textAlign: 'left', margin: 0, letterSpacing: '-0.5px', lineHeight: 1.15, color: 'white' }}>{heading}</h1>
      <div style={{ position: 'relative', marginBottom: '2.5rem', marginTop: '2.2rem' }}>
        {showScroll && (
          <button onClick={() => scrollTabs(-1)} style={{ position: 'absolute', left: -30, top: 0, bottom: 0, zIndex: 2, background: 'rgba(60,60,60,0.8)', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&lt;</button>
        )}
        <div
          ref={tabsRef}
          style={{
            display: 'flex',
            gap: '2.5rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: 4,
            scrollBehavior: 'smooth',
            minHeight: 36,
          }}
          className="info-tabs-scroll"
        >
          {tabs.map((tab, idx) => (
            <span
              key={tab}
              onClick={() => setActiveTab(idx)}
              style={{
                fontWeight: 400,
                color: activeTab === idx ? 'white' : '#bbbbbb',
                borderBottom: activeTab === idx ? '2px solid white' : 'none',
                cursor: 'pointer',
                fontSize: '16px',
                marginBottom: 4,
                whiteSpace: 'nowrap',
                padding: '0 2px',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
            >
              {tab}
            </span>
          ))}
        </div>
        {showScroll && (
          <button onClick={() => scrollTabs(1)} style={{ position: 'absolute', right: -30, top: 0, bottom: 0, zIndex: 2, background: 'rgba(60,60,60,0.8)', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&gt;</button>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '4rem',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
        }}
      >
        <div style={{ minWidth: 120, flex: 1, textAlign: 'left' }}>
          {col1.map((item, i) => (
            <div key={i} className="info-detail-hover" style={detailStyle}>
              {iconMap[item] || fallbackIcon}
              {item}
              <GoArrowUpRight className="info-detail-icon" style={iconStyle} />
            </div>
          ))}
        </div>
        <div style={{ minWidth: 120, flex: 1, textAlign: 'left' }}>
          {col2.map((item, i) => (
            <div key={i} className="info-detail-hover" style={detailStyle}>
              {iconMap[item] || fallbackIcon}
              {item}
              <GoArrowUpRight className="info-detail-icon" style={iconStyle} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .info-tabs-scroll::-webkit-scrollbar { display: none; }
        .info-detail-hover:hover, .info-detail-hover:focus {
          color: #3b82f6 !important;
        }
        .info-detail-hover:hover .info-detail-icon, .info-detail-hover:focus .info-detail-icon {
          color: #3b82f6 !important;
        }
        @media (max-width: 900px) {
          div[style*='display: flex'][style*='gap: 4rem'] {
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          div[style*='display: flex'][style*='gap: 4rem'] {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          h1 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default InfoTabs; 
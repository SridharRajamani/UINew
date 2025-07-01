import React, { useState, useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { 
  FaUtensils, FaBreadSlice, FaCheese, FaCoffee, FaSeedling, FaMobileAlt, FaPlug, FaTabletAlt, FaShoppingCart, FaStore, FaTshirt, FaStoreAlt, FaIndustry, FaTools, FaLaptop, FaMobile, FaLaptopCode, FaUserMd, FaCalendarCheck, FaFileMedical, FaPhoneAlt, FaBoxes, FaRegClock, FaRegListAlt, FaRegHandshake, FaRegMoneyBillAlt, FaShip, FaHotel, FaCalendarAlt, FaTicketAlt, FaSwimmer, FaSpa, FaConciergeBell, FaGlassCheers, FaChair, FaRegSmile, FaRegStar, FaRegUser, FaRegCheckCircle, FaRegCommentDots, FaTruck, FaWarehouse, FaShippingFast, FaRoute, FaUserTie, FaClipboardList, FaMapMarkedAlt, FaDolly, FaClipboardCheck, FaRegCalendarCheck, FaRegChartBar, FaRegBell, FaRegEnvelopeOpen, FaRegFileAlt, FaHeartbeat, FaPrescriptionBottleAlt, FaVials, FaMicroscope, FaStethoscope, FaSyringe, FaClinicMedical, FaProcedures, FaAmbulance, FaAppleAlt, FaCarrot, FaFish, FaCogs, FaBolt, FaChartLine, FaBoxOpen, FaBoxes as FaBoxesAlt, FaClipboardCheck as FaClipboardCheckAlt, FaRegListAlt as FaRegListAltAlt, FaParking, FaSnowflake, FaCut
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
  'Retail Store': <FaStore style={{ fontSize: '1.5rem' }} />,
  'Electronic Retailer': <FaMobileAlt style={{ fontSize: '1.5rem' }} />,
  'Mobile & Accessories': <FaPlug style={{ fontSize: '1.5rem' }} />,
  'Grocery Stories': <FaShoppingCart style={{ fontSize: '1.5rem' }} />,
  'Apparels & Textiles': <FaTshirt style={{ fontSize: '1.5rem' }} />,
  'Blue Metal Suppliers': <FaIndustry style={{ fontSize: '1.5rem' }} />,
  'Restaurant': <FaUtensils style={{ fontSize: '1.5rem' }} />,
  'Bakery': <FaBreadSlice style={{ fontSize: '1.5rem' }} />,
  'Dairy Delights': <FaCheese style={{ fontSize: '1.5rem' }} />,
  'Coffee Shop': <FaCoffee style={{ fontSize: '1.5rem' }} />,
  'Flower Shop': <FaSeedling style={{ fontSize: '1.5rem' }} />,
  'Electronics': <FaLaptop style={{ fontSize: '1.5rem' }} />,
  'Mobile Store': <FaMobile style={{ fontSize: '1.5rem' }} />,
  'Laptop Shop': <FaLaptopCode style={{ fontSize: '1.5rem' }} />,
  'Boating': <FaShip style={{ fontSize: '1.5rem' }} />,
  'Boat Rentals': <FaShip style={{ fontSize: '1.5rem' }} />,
  'Marina Management': <FaHotel style={{ fontSize: '1.5rem' }} />,
  'Online Booking': <FaCalendarAlt style={{ fontSize: '1.5rem' }} />,
  'Safety Monitoring': <FaRegCheckCircle style={{ fontSize: '1.5rem' }} />,
  'Guided Tours': <FaRegListAlt style={{ fontSize: '1.5rem' }} />,
  'Water Sports': <FaSwimmer style={{ fontSize: '1.5rem' }} />,
  'Hotels & Resorts': <FaHotel style={{ fontSize: '1.5rem' }} />,
  'Event Venues': <FaGlassCheers style={{ fontSize: '1.5rem' }} />,
  'Theme Parks': <FaRegSmile style={{ fontSize: '1.5rem' }} />,
  'Cinemas': <FaTicketAlt style={{ fontSize: '1.5rem' }} />,
  'Restaurants & Cafes': <FaUtensils style={{ fontSize: '1.5rem' }} />,
  'Room Booking': <FaCalendarAlt style={{ fontSize: '1.5rem' }} />,
  'Guest Management': <FaRegUser style={{ fontSize: '1.5rem' }} />,
  'Housekeeping Automation': <FaConciergeBell style={{ fontSize: '1.5rem' }} />,
  'Spa & Wellness': <FaSpa style={{ fontSize: '1.5rem' }} />,
  'Event Hosting': <FaGlassCheers style={{ fontSize: '1.5rem' }} />,
  'Concierge Services': <FaConciergeBell style={{ fontSize: '1.5rem' }} />,
  'Venue Booking': <FaChair style={{ fontSize: '1.5rem' }} />,
  'Event Scheduling': <FaCalendarAlt style={{ fontSize: '1.5rem' }} />,
  'Ticketing Solutions': <FaTicketAlt style={{ fontSize: '1.5rem' }} />,
  'Catering Management': <FaUtensils style={{ fontSize: '1.5rem' }} />,
  'Audio/Visual Services': <FaRegStar style={{ fontSize: '1.5rem' }} />,
  'Ride Management': <FaRegSmile style={{ fontSize: '1.5rem' }} />,
  'Queue Optimization': <FaRegClock style={{ fontSize: '1.5rem' }} />,
  'Ticketing & Passes': <FaTicketAlt style={{ fontSize: '1.5rem' }} />,
  'Guest Experience': <FaRegSmile style={{ fontSize: '1.5rem' }} />,
  'Maintenance Alerts': <FaRegClock style={{ fontSize: '1.5rem' }} />,
  'Showtimes & Booking': <FaCalendarAlt style={{ fontSize: '1.5rem' }} />,
  'Seat Selection': <FaChair style={{ fontSize: '1.5rem' }} />,
  'Concession Ordering': <FaUtensils style={{ fontSize: '1.5rem' }} />,
  'Loyalty Programs': <FaRegStar style={{ fontSize: '1.5rem' }} />,
  'Screen Management': <FaRegListAlt style={{ fontSize: '1.5rem' }} />,
  'Table Reservation': <FaChair style={{ fontSize: '1.5rem' }} />,
  'Menu Management': <FaUtensils style={{ fontSize: '1.5rem' }} />,
  'Order Tracking': <FaRegListAlt style={{ fontSize: '1.5rem' }} />,
  'Customer Feedback': <FaRegCommentDots style={{ fontSize: '1.5rem' }} />,
  'Loyalty Rewards': <FaRegMoneyBillAlt style={{ fontSize: '1.5rem' }} />,
};
const fallbackIcon = <FaStore style={{ fontSize: '1.5rem' }} />;

// Map all details to relevant Unsplash images
defaultDetails.forEach((detailArr) => {
  detailArr.forEach((detail) => {
    if (!iconMap[detail]) iconMap[detail] = fallbackIcon;
  });
});
const allDetailsImages = {
  'Retail Store': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'Electronic Retailer': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // electronics store
  'Mobile & Accessories': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80', // mobile phones
  'Grocery Stories': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // grocery store
  'Apparels & Textiles': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80', // clothes
  'Blue Metal Suppliers': 'https://images.unsplash.com/photo-1503389152951-9c3d029bd29c?auto=format&fit=crop&w=1200&q=80', // blue metal/aggregate
  'Restaurant': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  'Bakery': 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80',
  'Dairy Delights': 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80',
  'Coffee Shop': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'Flower Shop': 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80', // flower shop
  'Electronics': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  'Mobile Store': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
  'Laptop Shop': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80', // laptop
  'Mobile Accessories': 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=1200&q=80', // mobile accessories
  'Chargers': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80', // charger
  'Covers': 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=1200&q=80', // phone cover
  'Supermarket': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
  'Mini Mart': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
  'Clothing': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  'Textile Shop': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  'Blue Metal': 'https://images.unsplash.com/photo-1503389152951-9c3d029bd29c?auto=format&fit=crop&w=1200&q=80',
  'Construction Supplies': 'https://images.unsplash.com/photo-1503389152951-9c3d029bd29c?auto=format&fit=crop&w=1200&q=80',
  'Patient Management': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // hospital
  'Appointment Scheduling': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Electronic Health Records': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // medical records
  'Remote Monitoring': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // remote health
  'Asset Tracking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Infection Control': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // hospital
  'Inventory Management': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
  'Prescription Automation': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // prescription
  'Cold Chain Monitoring': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // cold storage
  'Point of Sale Integration': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Home Delivery Tracking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Sample Collection': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // lab sample
  'Test Result Automation': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // test result
  'Lab Equipment Monitoring': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // lab
  'Quality Assurance': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Data Integration': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // data
  'Device Tracking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Preventive Maintenance': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Usage Analytics': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // analytics
  'Compliance Monitoring': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Remote Diagnostics': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // diagnostics
  'Virtual Consultations': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // telemedicine
  'Remote Patient Monitoring': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // remote health
  'E-Prescriptions': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // prescription
  'Health Data Security': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // security
  'Mobile Health Apps': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80', // mobile health
  'Hospital Information Systems': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // hospital
  'Data Analytics': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  'Interoperability Solutions': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // data
  'Patient Portals': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // patient portal
  'Cybersecurity': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // cybersecurity
  'Production Line Automation': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // automation
  'Quality Control': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Predictive Maintenance': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Energy Monitoring': 'https://images.unsplash.com/photo-1503389152951-9c3d029bd29c?auto=format&fit=crop&w=1200&q=80', // energy
  'Supply Chain Integration': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
  'Fabric Cutting Automation': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80', // textile
  'Dye Process Monitoring': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80', // textile
  'Textile Quality Inspection': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80', // textile
  'Inventory Tracking': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
  'Order Management': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'PCB Assembly': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // pcb
  'Component Traceability': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // electronics
  'Defect Detection': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Asset Tracking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Production Analytics': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // analytics
  'Batch Processing': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Cold Storage Monitoring': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // cold storage
  'Food Safety Compliance': 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80', // food
  'Packaging Automation': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // packaging
  'Ingredient Traceability': 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80', // food
  'Regulatory Compliance': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // compliance
  'Batch Tracking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Temperature & Humidity Monitoring': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // temperature
  'Automated Dispensing': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // pharmacy
  'Sterilization Monitoring': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // sterilization
  'Machine Health Monitoring': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Tool Life Management': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Remote Diagnostics': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80',
  'Production Scheduling': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // scheduling
  'Downtime Analysis': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // analytics
  'Transportation': 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80',
  'Logistics': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Fleet Management': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'Warehousing': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'Supply Chain': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
  'Last Mile Delivery': 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  'Stock Level Alerts': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Order Management': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Proof of Delivery': 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80', // delivery
  'Returns Management': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Delivery Route Planning': 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80', // delivery route
  'Customer Notifications': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  'Demand Forecasting': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // analytics
  'Boating': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // boating
  'Hotels & Resorts': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // hotel
  'Event Venues': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80', // event venue
  'Theme Parks': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // theme park
  'Cinemas': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // cinema
  'Restaurants & Cafes': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // restaurant
  'Boat Rentals': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // boat rental
  'Marina Management': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // marina
  'Online Booking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // booking
  'Safety Monitoring': 'https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=1200&q=80', // safety
  'Guided Tours': 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80', // tour
  'Water Sports': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', // water sports
  'Room Booking': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // hotel room
  'Guest Management': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // guest
  'Housekeeping Automation': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // housekeeping
  'Spa & Wellness': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // spa
  'Event Hosting': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80', // event
  'Concierge Services': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // concierge
  'Venue Booking': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80', // venue
  'Event Scheduling': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // schedule
  'Ticketing Solutions': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // ticket
  'Catering Management': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // catering
  'Audio/Visual Services': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // audio visual
  'Ride Management': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // ride
  'Queue Optimization': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // queue
  'Ticketing & Passes': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // ticket
  'Guest Experience': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // guest
  'Maintenance Alerts': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // maintenance
  'Showtimes & Booking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // showtime
  'Seat Selection': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // seat
  'Concession Ordering': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // food
  'Loyalty Programs': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // loyalty
  'Screen Management': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // screen
  'Table Reservation': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // table
  'Menu Management': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // menu
  'Order Tracking': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // order
  'Customer Feedback': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80', // feedback
  'Loyalty Rewards': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', // rewards
};

const sampleDescriptions = {
  // Consumer
  'Restaurant': 'Manage restaurant orders and reservations.',
  'Bakery': 'Track bakery products and daily sales.',
  'Dairy Delights': 'Monitor dairy inventory and deliveries.',
  'Coffee Shop': 'Organize coffee shop menu and orders.',
  'Flower Shop': 'Manage flower stock and customer orders.',
  'Electronics': 'Sell and service electronic devices and gadgets.',
  'Mobile Store': 'Retail mobile phones and accessories.',
  'Laptop Shop': 'Specialize in laptops and related services.',
  'Mobile Accessories': 'Offer a variety of mobile accessories.',
  'Chargers': 'Provide charging solutions for devices.',
  'Covers': 'Protect devices with stylish covers.',
  'Supermarket': 'Comprehensive grocery and daily needs store.',
  'Mini Mart': 'Convenient store for quick purchases.',
  'Clothing': 'Retail clothing for all ages and styles.',
  'Textile Shop': 'Sell textiles and fabrics for various uses.',
  'Blue Metal': 'Supply blue metal for construction.',
  'Construction Supplies': 'Provide essential construction materials.',
  // Healthcare & Pharma
  'Patient Management': 'Oversee patient records and care.',
  'Appointment Scheduling': 'Book and manage appointments.',
  'Electronic Health Records': 'Digitally store patient health data.',
  'Remote Monitoring': 'Monitor patient health remotely.',
  'Asset Tracking': 'Track medical equipment and assets.',
  'Infection Control': 'Implement infection prevention protocols.',
  'Inventory Management': 'Manage medical inventory and supplies.',
  'Prescription Automation': 'Automate prescription processes.',
  'Cold Chain Monitoring': 'Monitor temperature-sensitive supplies.',
  'Point of Sale Integration': 'Integrate pharmacy sales systems.',
  'Home Delivery Tracking': 'Track home delivery of medicines.',
  'Sample Collection': 'Manage collection of medical samples.',
  'Test Result Automation': 'Automate lab test result delivery.',
  'Lab Equipment Monitoring': 'Monitor lab equipment status.',
  'Quality Assurance': 'Ensure quality in healthcare services.',
  'Data Integration': 'Integrate healthcare data sources.',
  'Device Tracking': 'Track medical device usage.',
  'Preventive Maintenance': 'Schedule maintenance for equipment.',
  'Usage Analytics': 'Analyze usage patterns in healthcare.',
  'Compliance Monitoring': 'Monitor regulatory compliance.',
  'Remote Diagnostics': 'Diagnose patients remotely.',
  'Virtual Consultations': 'Enable online doctor consultations.',
  'Remote Patient Monitoring': 'Track patient health at home.',
  'E-Prescriptions': 'Issue digital prescriptions.',
  'Health Data Security': 'Protect sensitive health data.',
  'Mobile Health Apps': 'Mobile apps for health management.',
  'Hospital Information Systems': 'Centralize hospital data and operations.',
  'Data Analytics': 'Analyze healthcare data for insights.',
  'Interoperability Solutions': 'Connect different healthcare systems.',
  'Patient Portals': 'Patient access to health records.',
  'Cybersecurity': 'Secure healthcare IT infrastructure.',
  // Manufacturing
  'Production Line Automation': 'Automate manufacturing processes.',
  'Quality Control': 'Ensure product quality and standards.',
  'Predictive Maintenance': 'Predict and prevent equipment failures.',
  'Energy Monitoring': 'Monitor and optimize energy use.',
  'Supply Chain Integration': 'Integrate supply chain operations.',
  'Fabric Cutting Automation': 'Automate fabric cutting processes.',
  'Dye Process Monitoring': 'Monitor textile dyeing processes.',
  'Textile Quality Inspection': 'Inspect textile quality.',
  'Inventory Tracking': 'Track inventory in real time.',
  'Order Management': 'Manage and fulfill orders.',
  'PCB Assembly': 'Assemble printed circuit boards.',
  'Component Traceability': 'Trace components through production.',
  'Defect Detection': 'Detect defects in products.',
  'Production Analytics': 'Analyze production data.',
  'Batch Processing': 'Manage batch production.',
  'Cold Storage Monitoring': 'Monitor cold storage conditions.',
  'Food Safety Compliance': 'Ensure food safety standards.',
  'Packaging Automation': 'Automate packaging processes.',
  'Ingredient Traceability': 'Trace ingredients in production.',
  'Regulatory Compliance': 'Meet regulatory requirements.',
  'Batch Tracking': 'Track production batches.',
  'Temperature & Humidity Monitoring': 'Monitor temperature and humidity.',
  'Automated Dispensing': 'Automate dispensing of materials.',
  'Sterilization Monitoring': 'Monitor sterilization processes.',
  'Machine Health Monitoring': 'Monitor machine health and status.',
  'Tool Life Management': 'Manage tool usage and lifespan.',
  'Remote Diagnostics': 'Diagnose equipment remotely.',
  'Production Scheduling': 'Schedule production activities.',
  'Downtime Analysis': 'Analyze and reduce downtime.',
  // Transportation & Logistics
  'Smart Parking': 'Manage parking for vehicles efficiently.',
  'Fleet Tracking': 'Track fleet vehicles in real time.',
  'Cargo Monitoring': 'Monitor cargo conditions and location.',
  'Route Optimization': 'Plan and optimize delivery routes.',
  'Cold Chain Monitoring': 'Monitor cold chain logistics.',
  'Warehouse Automation': 'Automate warehouse tasks and processes.',
  'Order Fulfillment': 'Fulfill customer orders efficiently.',
  'Real-time Shipment Tracking': 'Track shipments in real time.',
  'Delivery Scheduling': 'Schedule and manage deliveries.',
  'Driver Management': 'Manage drivers and assignments.',
  'Vehicle Maintenance': 'Maintain vehicles for reliability.',
  'Fuel Management': 'Monitor and manage fuel usage.',
  'Telematics': 'Use telematics for fleet insights.',
  'Dispatch Optimization': 'Optimize dispatch operations.',
  'Storage Solutions': 'Provide storage for goods.',
  'Automated Picking': 'Automate picking in warehouses.',
  'Stock Level Alerts': 'Get alerts for stock levels.',
  'Environmental Monitoring': 'Monitor environmental conditions.',
  'Supplier Collaboration': 'Collaborate with suppliers.',
  'Demand Forecasting': 'Forecast demand for logistics.',
  'Procurement Automation': 'Automate procurement processes.',
  'End-to-End Visibility': 'Gain visibility across logistics.',
  'Delivery Route Planning': 'Plan efficient delivery routes.',
  'Proof of Delivery': 'Confirm delivery with proof.',
  'Customer Notifications': 'Notify customers about deliveries.',
  'Returns Management': 'Manage product returns.',
  // Hospitality & Entertainment
  'Boating': <FaShip style={{ fontSize: '1.5rem' }} />,
  'Hotels & Resorts': <FaHotel style={{ fontSize: '1.5rem' }} />,
  'Event Venues': <FaGlassCheers style={{ fontSize: '1.5rem' }} />,
  'Theme Parks': <FaRegSmile style={{ fontSize: '1.5rem' }} />,
  'Cinemas': <FaTicketAlt style={{ fontSize: '1.5rem' }} />,
  'Restaurants & Cafes': <FaUtensils style={{ fontSize: '1.5rem' }} />,
  'Boat Rentals': 'Rent boats for leisure or events.',
  'Marina Management': 'Manage marina facilities and services.',
  'Online Booking': 'Enable online booking for boating services.',
  'Safety Monitoring': 'Monitor safety in boating and hospitality.',
  'Guided Tours': 'Organize and manage guided boat tours.',
  'Water Sports': 'Offer a range of water sports activities.',
  'Room Booking': 'Book and manage guest rooms easily.',
  'Guest Management': 'Track and assist hotel guests.',
  'Housekeeping Automation': 'Automate and schedule housekeeping tasks.',
  'Spa & Wellness': 'Offer spa and wellness services to guests.',
  'Event Hosting': 'Host and manage events at the hotel.',
  'Concierge Services': 'Provide concierge support for guests.',
  'Venue Booking': 'Book venues for events and functions.',
  'Event Scheduling': 'Schedule and organize events.',
  'Ticketing Solutions': 'Sell and manage event tickets.',
  'Catering Management': 'Manage catering services for events.',
  'Audio/Visual Services': 'Provide audio and visual support for events.',
  'Ride Management': 'Manage rides and attractions.',
  'Queue Optimization': 'Optimize queues for guests.',
  'Ticketing & Passes': 'Manage tickets and passes.',
  'Guest Experience': 'Enhance guest experience.',
  'Maintenance Alerts': 'Alert for maintenance needs.',
  'Showtimes & Booking': 'Manage showtimes and bookings.',
  'Seat Selection': 'Allow guests to select seats.',
  'Concession Ordering': 'Order concessions and snacks.',
  'Loyalty Programs': 'Manage guest loyalty programs.',
  'Screen Management': 'Manage screens and displays.',
  'Table Reservation': 'Reserve tables for guests.',
  'Menu Management': 'Manage food and drink menus.',
  'Order Tracking': 'Track guest orders.',
  'Customer Feedback': 'Collect and manage feedback.',
  'Loyalty Rewards': 'Reward loyal customers.',
};

const iconSVG = (icon) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    border: '1.5px solid #444',
    borderRadius: 12,
    marginRight: 16,
    flexShrink: 0,
    background: 'none',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    transition: 'filter 0.18s, transform 0.18s',
  }}>
    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24}}>
      {icon}
    </span>
  </span>
);

function InfoTabs({ heading = 'Sample Heading', tabs = defaultTabs, details = defaultDetails, onDetailHover, onDetailLeave, description }) {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredDetail, setHoveredDetail] = useState(null);
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

  const bgImage = hoveredDetail && allDetailsImages[hoveredDetail];

  // Blurred background image for all tabs EXCEPT hospitality tabs on hover
  const isHospitality = tabs.includes('Boating') || tabs.includes('Hotels & Resorts') || tabs.includes('Event Venues') || tabs.includes('Theme Parks') || tabs.includes('Cinemas') || tabs.includes('Restaurants & Cafes');
  const hospitalityBgImage = isHospitality ? allDetailsImages[hoveredDetail] : null;

  return (
    <>
      <style>{`
        html, body { overflow-y: auto; scrollbar-width: none; }
        body::-webkit-scrollbar, html::-webkit-scrollbar { display: none; }
        .info-tabs-heading {
          font-size:46px;
          
          margin-bottom: 0.5rem;
          -webkit-text-stroke: 0.2px #222;
          text-align: left;
          margin: 0;
          letter-spacing: -0.3px;
          line-height: 1.13;
          word-break: break-word;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.18);
        }
        .info-tabs-description {
          font-size: 16px; 
          color: #b0b0b0;
          margin: 0.2rem 0 0.7rem 0; 
          text-align: left;
          word-break: break-word; 
          font-weight:100 !important;
          max-width: 700px;
          line-height: 1.4;
          text-shadow: 0 1px 6px rgba(0,0,0,0.13);
        }
        .info-tabs-scroll span {
          font-size: 13px;
          min-width: 50px;
          flex-shrink: 0;
        }
        .info-detail-list-scroll {
          max-height: 260px;
          overflow-y: auto;
          padding-right: 4px;
        }
        .info-detail-hover {
          font-size: 13px;
        }
        .info-detail-hover div {
          font-size: 11px;
        }
        @media (max-width: 600px) {
          .info-tabs-heading {
            font-size: 15px;
          }
          .info-tabs-description {
            font-size: 10px;
          }
          .info-tabs-scroll span {
            font-size: 10px;
          }
          .info-detail-hover {
            font-size: 11px;
          }
          .info-detail-hover div {
            font-size: 9px;
          }
        }
      `}</style>
      {bgImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          background: `url(${bgImage}) center center / cover no-repeat`,
          filter: 'blur(70px) brightness(0.5)',
          opacity: 0.7,
          transition: 'opacity 0.3s',
        }} />
      )}
      <div className="InfoTabs">
        <div 
          style={{ 
            position: 'relative', 
            zIndex: 1, 
            padding: '2.5rem 3vw', 
            width: '100%', 
            maxWidth: '100vw', 
            boxSizing: 'border-box', 
            fontFamily: 'DM Sans, sans-serif', 
            overflow: 'hidden',
          }}
        >
          <h1 className="info-tabs-heading">{heading}</h1>
          {description && (
            <div className="info-tabs-description">{description}</div>
          )}
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
                    fontSize: 18, 
                    padding: '0 8px 8px 8px',
                    // borderBottom: activeTab === idx
                    //   ? `2.5px solid ${typeof window !== 'undefined' && document.body.classList.contains('light-theme') ? '#111' : '#fff'}`
                    //   : 'none',
                    color: typeof window !== 'undefined' && document.body.classList.contains('light-theme') ? '#111' : '#fff',
                    cursor: 'pointer',
                    opacity: activeTab === idx ? 1 : 0.7,
                    WebkitTextStroke: activeTab === idx
                      ? (typeof window !== 'undefined' && document.body.classList.contains('light-theme') ? '0.3px #000' : '0px #fff')
                      : (typeof window !== 'undefined' && document.body.classList.contains('dark-theme') ? '0.3px #000' : '0px #fff'),
                    transition: 'color 0.2s, border 0.2s, opacity 0.2s',
                    background: 'none',
                    outline: 'none',
                    borderRadius: 0,
                    marginRight: 0,
                    marginLeft: 0,
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
              <div className="info-detail-list-scroll">
                {col1.map((item, i) => (
                  <div
                    key={i}
                    className="info-detail-hover"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '1.2rem',
                      gap: '0.5rem',
                      borderRadius: '14px',
                      transition: 'background 0.18s, transform 0.18s',
                      cursor: 'pointer',
                      padding: '0.2rem 0.5rem',
                    }}
                    onMouseEnter={e => { setHoveredDetail(item); if (onDetailHover) onDetailHover(item); }}
                    onMouseLeave={e => { setHoveredDetail(null); if (onDetailLeave) onDetailLeave(item); }}
                  >
                    {iconSVG(iconMap[item] || fallbackIcon)}
                    <div>
                      <div style={{ fontWeight: 500, color: '#fff', fontSize: '1.08rem', marginBottom: 2, transition: 'transform 0.18s' }}>{typeof item === 'string' && item.startsWith('http') ? '' : item}</div>
                      <div style={{ color: '#b0b0b8', fontSize: '0.97rem', fontWeight: 400, transition: 'transform 0.18s' }}>
                        {typeof sampleDescriptions[item] === 'string' && sampleDescriptions[item].startsWith('http') ? '' : (sampleDescriptions[item] || '')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ minWidth: 120, flex: 1, textAlign: 'left' }}>
              <div className="info-detail-list-scroll">
                {col2.map((item, i) => (
                  <div
                    key={i}
                    className="info-detail-hover"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '1.2rem',
                      gap: '0.5rem',
                      borderRadius: '14px',
                      transition: 'background 0.18s, transform 0.18s',
                      cursor: 'pointer',
                      padding: '0.2rem 0.5rem',
                    }}
                    onMouseEnter={e => { setHoveredDetail(item); if (onDetailHover) onDetailHover(item); }}
                    onMouseLeave={e => { setHoveredDetail(null); if (onDetailLeave) onDetailLeave(item); }}
                  >
                    {iconSVG(iconMap[item] || fallbackIcon)}
                    <div>
                      <div style={{ fontWeight: 500, color: '#fff', fontSize: '1.08rem', marginBottom: 2, transition: 'transform 0.18s' }}>{typeof item === 'string' && item.startsWith('http') ? '' : item}</div>
                      <div style={{ color: '#b0b0b8', fontSize: '0.97rem', fontWeight: 400, transition: 'transform 0.18s' }}>
                        {typeof sampleDescriptions[item] === 'string' && sampleDescriptions[item].startsWith('http') ? '' : (sampleDescriptions[item] || '')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .info-tabs-scroll::-webkit-scrollbar { display: none; }
        .info-detail-hover {
          will-change: background;
          transition: background 0.18s;
        }
        .info-detail-hover:hover, .info-detail-hover:focus {
          background: rgba(255,255,255,0.08) !important;
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
    </>
  );
}

export default InfoTabs; 
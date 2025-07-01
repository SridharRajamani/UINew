<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import InfoTabs from './InfoTabs.jsx';

const GSAPHorizontalScroll = ({ theme }) => {
  console.log('GSAPHorizontalScroll theme:', theme);
=======
import React, { useEffect, useRef } from 'react';
import InfoTabs from './InfoTabs.jsx';

const GSAPHorizontalScroll = () => {
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
  const AppsContainerRef = useRef(null);
  const scrollTweenRef = useRef(null);
  const redTweenRef = useRef(null);
  const isInitialized = useRef(false);
<<<<<<< HEAD
  const [isDetailHovered, setIsDetailHovered] = useState(false);
=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized.current) return;
    isInitialized.current = true;

    const loadGSAP = async () => {
      try {
        // Check if GSAP is already loaded
        if (window.gsap && window.ScrollTrigger && window.ScrollToPlugin) {
          initializeAnimations();
          return;
        }

        // Load GSAP scripts sequentially
        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            // Check if script already exists
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve();
              return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.async = false; // Load in order
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        };

        // Load scripts in sequence
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js');

        // Wait for GSAP to be fully available
        let attempts = 0;
        const maxAttempts = 50;
        
        const waitForGSAP = () => {
          return new Promise((resolve) => {
            const checkGSAP = () => {
              attempts++;
              if (window.gsap && window.ScrollTrigger && window.ScrollToPlugin) {
                resolve();
              } else if (attempts < maxAttempts) {
                setTimeout(checkGSAP, 100);
              } else {
                console.error('GSAP failed to load after maximum attempts');
                resolve(); // Continue anyway
              }
            };
            checkGSAP();
          });
        };

        await waitForGSAP();
        initializeAnimations();

      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    const initializeAnimations = () => {
      try {
        const { gsap } = window;
        if (!gsap || !window.ScrollTrigger || !window.ScrollToPlugin) {
          console.error('GSAP not properly loaded');
          return;
        }

        // Register plugins
        gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin);

        // Clear any existing ScrollTriggers
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Helper function to get scroll position
        const getScrollPosition = (animation, progress) => {
          let p = gsap.utils.clamp(0, 1, progress || 0),
              nested = !animation.scrollTrigger,
              st = nested ? animation.parent.scrollTrigger : animation.scrollTrigger,
              AppsContainerAnimation = st.vars.AppsContainerAnimation,
              range = st.end - st.start,
              position = st.start + range * p;
          
          if (AppsContainerAnimation) {
            st = AppsContainerAnimation.scrollTrigger;
            return (st.start + (st.end - st.start) * (position / AppsContainerAnimation.duration()));
          } else if (nested) {
            let start = st.start + (animation.startTime() / animation.parent.duration()) * range,
                end = st.start + ((animation.startTime() + animation.duration()) / animation.parent.duration()) * range;
            return start + (end - start) * p;
          }
          return position;
        };

        // Get sections
        let sections = gsap.utils.toArray(".panel");
        
        if (sections.length === 0) {
          console.error('No panels found');
          return;
        }

        // Main horizontal scroll animation
        let scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".AppsContainer",
            pin: true,
            scrub: 0.1,
            end: "+=3000",
            anticipatePin: 1
          }
        });

        scrollTweenRef.current = scrollTween;

        // Set initial positions
        gsap.set(".box-1, .box-2", {y: 100});

        // Red section animation
        let redTween = gsap.to(".box-1", {
          y: -130,
          duration: 2,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: ".box-1",
            AppsContainerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reset"
          }
        });

        redTweenRef.current = redTween;

        // Gray section animation
        gsap.to(".box-2", {
          y: -120,
          backgroundColor: "#1e90ff",
          ease: "none",
          scrollTrigger: {
            trigger: ".box-2",
            AppsContainerAnimation: scrollTween,
            start: "center 80%",
            end: "center 20%",
            scrub: true
          }
        });

        // Purple section - toggle class
        window.ScrollTrigger.create({
          trigger: ".box-3",
          AppsContainerAnimation: scrollTween,
          toggleClass: "active",
          start: "center 60%"
        });

        // Green section - callbacks
        window.ScrollTrigger.create({
          trigger: ".green",
          AppsContainerAnimation: scrollTween,
          start: "center 65%",
          end: "center 51%",
          onEnter: () => console.log("🟢 Green section entered"),
          onLeave: () => console.log("🔴 Green section left"),
          onEnterBack: () => console.log("⬅️ Green section entered back"),
          onLeaveBack: () => console.log("➡️ Green section left back"),
          onToggle: self => console.log("🔄 Green section active:", self.isActive)
        });

        // Scroll to button functionality
        const setupScrollButton = () => {
          const scrollToButton = document.querySelector("#scrollTo");
          if (scrollToButton && redTween) {
            // Remove existing listeners
            scrollToButton.replaceWith(scrollToButton.cloneNode(true));
            const newButton = document.querySelector("#scrollTo");
            
            newButton.addEventListener("click", () => {
              const scrollPosition = getScrollPosition(redTween);
              gsap.to(window, {
                scrollTo: scrollPosition,
                duration: 1.5,
                ease: "power2.inOut"
              });
            });
          }
        };

        // Setup button after a short delay to ensure DOM is ready
        setTimeout(setupScrollButton, 100);

        console.log('GSAP animations initialized successfully');

      } catch (error) {
        console.error('Error initializing animations:', error);
      }
    };

    loadGSAP();

    // Cleanup function
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      isInitialized.current = false;
    };
  }, []);

  return (
    <>
      <div className="description">
        <div style={{alignItems: "center",display: "flex",flexDirection: "column"}}>
          <h1>A complete digital platform for restaurants, hotels, cafes, bars, food courts, Garments and
          more in one application</h1>
          <button id="scrollTo">Scroll to Start</button>
          <div className="scroll-down"> Scroll down <div className="arrow"></div> </div>
        </div>
      </div>

      <div className="AppsContainer" ref={AppsContainerRef}>
<<<<<<< HEAD
        {theme === 'dark' && !isDetailHovered && (
          <img
            src="https://img.freepik.com/free-photo/close-up-baker-with-machine_23-2149233717.jpg?uid=R2740650&ga=GA1.1.1997829733.1728553786&semt=ais_items_boosted&w=740"
            alt=""
            className="apps-blur-bg"
            aria-hidden="true"
            draggable="false"
          />
        )}
        <div className="panel blue"> 
          <InfoTabs
            heading="Consumer"
            description="Perfect for retail, food, and service businesses. This software is designed to streamline operations and enhance customer experience for all types of consumer-focused industries."
=======
        <div className="panel blue"> 
          <InfoTabs
            heading="Consumer"
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
            tabs={[
              "Retail Store",
              "Electronic Retailer",
              "Mobile & Accessories",
              "Grocery Stories",
              "Apparels & Textiles",
              "Blue Metal Suppliers"
            ]}
            details={[
              [
                "Restaurant",
                "Bakery",
                "Dairy Delights",
                "Coffee Shop",
                "Flower Shop"
              ],
              [
                "Electronics",
                "Mobile Store",
                "Laptop Shop"
              ],
              [
                "Mobile Accessories",
                "Chargers",
                "Covers"
              ],
              [
                "Supermarket",
                "Mini Mart"
              ],
              [
                "Clothing",
                "Textile Shop"
              ],
              [
                "Blue Metal",
                "Construction Supplies"
              ]
            ]}
<<<<<<< HEAD
            onDetailHover={() => setIsDetailHovered(true)}
            onDetailLeave={() => setIsDetailHovered(false)}
=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
          />
        </div>

        <section className="panel red">
          <div>
<<<<<<< HEAD
            <pre className="code-block"></pre> 
            <InfoTabs
              heading="Healthcare & Pharma"
              description="Ideal for hospitals, clinics, pharmacies, and labs. This software helps manage patient care, inventory, appointments, and healthcare operations efficiently."
=======
            <pre className="code-block">
              
            </pre> 
            <InfoTabs
              heading="Healthcare & Pharma"
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
              tabs={[
                "Hospitals & Clinics",
                "Pharmacies",
                "Diagnostics & Labs",
                "Medical Devices",
                "Telemedicine",
                "Healthcare IT"
              ]}
              details={[
                [
                  "Patient Management",
                  "Appointment Scheduling",
                  "Electronic Health Records",
                  "Remote Monitoring",
                  "Asset Tracking",
                  "Infection Control"
                ],
                [
                  "Inventory Management",
                  "Prescription Automation",
                  "Cold Chain Monitoring",
                  "Point of Sale Integration",
                  "Home Delivery Tracking"
                ],
                [
                  "Sample Collection",
                  "Test Result Automation",
                  "Lab Equipment Monitoring",
                  "Quality Assurance",
                  "Data Integration"
                ],
                [
                  "Device Tracking",
                  "Preventive Maintenance",
                  "Usage Analytics",
                  "Compliance Monitoring",
                  "Remote Diagnostics"
                ],
                [
                  "Virtual Consultations",
                  "Remote Patient Monitoring",
                  "E-Prescriptions",
                  "Health Data Security",
                  "Mobile Health Apps"
                ],
                [
                  "Hospital Information Systems",
                  "Data Analytics",
                  "Interoperability Solutions",
                  "Patient Portals",
                  "Cybersecurity"
                ]
              ]}
<<<<<<< HEAD
              onDetailHover={() => setIsDetailHovered(true)}
              onDetailLeave={() => setIsDetailHovered(false)}
=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
            />
          </div>
        </section>

        <section className="panel gray">
          <div>
<<<<<<< HEAD
            <pre className="code-block"></pre> 
            <InfoTabs
              heading="Manufacturing"
              description="Designed for manufacturers to automate production, track inventory, ensure quality, and optimize supply chain processes."
=======
            <pre className="code-block">
 
            </pre> 
            <InfoTabs
              heading="Manufacturing"
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
              tabs={[
                "Automotive",
                "Textiles",
                "Electronics",
                "Food & Beverage",
                "Pharmaceuticals",
                "Machinery"
              ]}
              details={[
                [
                  "Production Line Automation",
                  "Quality Control",
                  "Predictive Maintenance",
                  "Inventory Management",
                  "Energy Monitoring",
                  "Supply Chain Integration"
                ],
                [
                  "Fabric Cutting Automation",
                  "Dye Process Monitoring",
                  "Textile Quality Inspection",
                  "Inventory Tracking",
                  "Order Management"
                ],
                [
                  "PCB Assembly",
                  "Component Traceability",
                  "Defect Detection",
                  "Asset Tracking",
                  "Production Analytics"
                ],
                [
                  "Batch Processing",
                  "Cold Storage Monitoring",
                  "Food Safety Compliance",
                  "Packaging Automation",
                  "Ingredient Traceability"
                ],
                [
                  "Regulatory Compliance",
                  "Batch Tracking",
                  "Temperature & Humidity Monitoring",
                  "Automated Dispensing",
                  "Sterilization Monitoring"
                ],
                [
                  "Machine Health Monitoring",
                  "Tool Life Management",
                  "Remote Diagnostics",
                  "Production Scheduling",
                  "Downtime Analysis"
                ]
              ]}
<<<<<<< HEAD
              onDetailHover={() => setIsDetailHovered(true)}
              onDetailLeave={() => setIsDetailHovered(false)}
=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
            />
          </div>
        </section>

        <section className="panel purple">
          <div>
<<<<<<< HEAD
            <pre className="code-block"></pre> 
            <InfoTabs
              heading="Transportation & Logistics"
              description="Perfect for logistics, fleet, and supply chain management. Streamline deliveries, track assets, and optimize routes with ease."
=======
            <pre className="code-block">
 
            </pre> 
            <InfoTabs
              heading="Transportation & Logistics"
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
              tabs={[
                "Transportation",
                "Logistics",
                "Fleet Management",
                "Warehousing",
                "Supply Chain",
                "Last Mile Delivery"
              ]}
              details={[
                [
                  "Smart Parking",
                  "Fleet Tracking",
                  "Cargo Monitoring",
                  "Route Optimization",
                  "Cold Chain Monitoring",
                  "Asset Tracking"
                ],
                [
                  "Warehouse Automation",
                  "Inventory Management",
                  "Order Fulfillment",
                  "Real-time Shipment Tracking",
                  "Delivery Scheduling",
                  "Driver Management"
                ],
                [
                  "Vehicle Maintenance",
                  "Fuel Management",
                  "Telematics",
                  "Compliance Monitoring",
                  "Dispatch Optimization"
                ],
                [
                  "Storage Solutions",
                  "Automated Picking",
                  "Stock Level Alerts",
                  "Environmental Monitoring"
                ],
                [
                  "Supplier Collaboration",
                  "Demand Forecasting",
                  "Procurement Automation",
                  "End-to-End Visibility"
                ],
                [
                  "Delivery Route Planning",
                  "Proof of Delivery",
                  "Customer Notifications",
                  "Returns Management"
                ]
              ]}
<<<<<<< HEAD
              onDetailHover={() => setIsDetailHovered(true)}
              onDetailLeave={() => setIsDetailHovered(false)}
=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
            />
          </div>
        </section>

        <section className="panel green">
          <div>
<<<<<<< HEAD
            <pre className="code-block"></pre> 
            <InfoTabs
              heading="Hospitality & Entertainment"
              description="Tailored for hotels, resorts, event venues, and entertainment businesses. Manage bookings, guest experiences, and operations seamlessly."
=======
            <pre className="code-block">
 
            </pre> 
            <InfoTabs
              heading="Hospitality & Entertainment"
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
              tabs={[
                "Boating",
                "Hotels & Resorts",
                "Event Venues",
                "Theme Parks",
                "Cinemas",
                "Restaurants & Cafes"
              ]}
              details={[
                [
                  "Boat Rentals",
                  "Marina Management",
                  "Online Booking",
                  "Safety Monitoring",
                  "Guided Tours",
                  "Water Sports"
                ],
                [
                  "Room Booking",
                  "Guest Management",
                  "Housekeeping Automation",
                  "Spa & Wellness",
                  "Event Hosting",
                  "Concierge Services"
                ],
                [
                  "Venue Booking",
                  "Event Scheduling",
                  "Ticketing Solutions",
                  "Catering Management",
                  "Audio/Visual Services"
                ],
                [
                  "Ride Management",
                  "Queue Optimization",
                  "Ticketing & Passes",
                  "Guest Experience",
                  "Maintenance Alerts"
                ],
                [
                  "Showtimes & Booking",
                  "Seat Selection",
                  "Concession Ordering",
                  "Loyalty Programs",
                  "Screen Management"
                ],
                [
                  "Table Reservation",
                  "Menu Management",
                  "Order Tracking",
                  "Customer Feedback",
                  "Loyalty Rewards"
                ]
              ]}
<<<<<<< HEAD
              onDetailHover={() => setIsDetailHovered(true)}
              onDetailLeave={() => setIsDetailHovered(false)}
=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
            />
          </div>
        </section>
        
      </div>
<<<<<<< HEAD
      <p
        className='ClipHead'
        style={{
          background: theme === 'light' ? '#fff' : '#000',
          color: theme === 'light' ? '#111' : '#fff',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        Whats? Pozo
      </p>


      {/* that blured background video was here */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          position: 'relative',
          justifyContent: 'center',
          minHeight: '600px',
          background: theme === 'light' ? '#fff' : '#000',
          color: theme === 'light' ? '#111' : '#fff',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        {theme === 'dark' && (
          <video
            src="https://www.pozo.ai/home/assets/MobileMockup-280b6496.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(32px) brightness(0.7)',
              zIndex: 0,
              borderRadius: '32px',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        )}
        <div className="theme-card-bg"
          style={{
            background: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#111' : '#fff',
            borderRadius: '32px',
            boxShadow: '0 8px 40px 0 rgba(0,0,0,0.08)',
            padding: '0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div>
            {/* Foreground video (sharp) */}
            <video
              src="https://www.pozo.ai/home/assets/MobileMockup-280b6496.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '860px',
                minWidth: '580px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '32px',
                boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25)',
                position: 'relative',
                zIndex: 1,
                backdropFilter: 'blur(0px)',
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
=======
      <p className='ClipHead'>Whats? Pozo</p>


      {/* that blured background video was here */}
      <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              position: 'relative', 
              justifyContent: 'center',
              minHeight: '600px'
            }}>
              
              {/* Blurred video background */}
              <video
                src="https://www.pozo.ai/home/assets/MobileMockup-280b6496.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                tabIndex={-1}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'blur(32px) brightness(0.7)',
                  zIndex: 0,
                  borderRadius: '32px',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              />
              
      <div className=" ">
        
        <div> 
            {/* <li>The fake-scrolling animation (just the part that's moving the AppsContainer horizontally) must have no easing (<code>ease: "none"</code>).</li>
            <li>Pinning and snapping won't work on ScrollTriggers with a <code>AppsContainerAnimation</code>.</li>
            <li>The mapping of scroll position trigger points are based on the trigger element itself not being animated horizontally (inside the AppsContainer). If you need to animate the trigger, you can either wrap it in a &lt;div&gt; and use that as the trigger instead or just factor the trigger's movement into your end position.</li>
            <li>Requires ScrollTrigger 3.8.0 or later</li> */}
         
           
              {/* Foreground video (sharp) */}
            
              <video
                src="https://www.pozo.ai/home/assets/MobileMockup-280b6496.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ 
                  width: '860px',
                  minWidth: '580px',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '32px', 
                  boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25)',
                  position: 'relative',
                  zIndex: 1,
                  backdropFilter: 'blur(0px)', // video itself not blurred, but for context
                  // Responsive styles (handled in parent or via CSS for real media queries)
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
        </div>
      </div>
    </>
  );
};

export default GSAPHorizontalScroll;
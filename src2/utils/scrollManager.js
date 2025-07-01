export class ScrollManager {
  constructor() {
    this.scrollTween = null;
    this.redTween = null;
    this.isGSAPLoaded = false;
  }

  async loadGSAP() {
    if (typeof window !== 'undefined' && !window.gsap) {
      const scripts = [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
          name: 'gsap'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
          name: 'ScrollTrigger'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js',
          name: 'ScrollToPlugin'
        }
      ];

      await this.loadScripts(scripts);
      
      // Wait for GSAP to be fully available
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    if (window.gsap && window.gsap.registerPlugin) {
      window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin);
      this.isGSAPLoaded = true;
    }
  }

  loadScripts(scripts) {
    return Promise.all(
      scripts.map(script => {
        return new Promise((resolve, reject) => {
          const scriptElement = document.createElement('script');
          scriptElement.src = script.src;
          scriptElement.onload = resolve;
          scriptElement.onerror = reject;
          document.head.appendChild(scriptElement);
        });
      })
    );
  }

  createHorizontalScroll(container, sections) {
    if (!this.isGSAPLoaded || !window.gsap) return;

    const { gsap } = window;

    // Create main horizontal scroll tween
    this.scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.1,
        end: "+=3000",
        anticipatePin: 1
      }
    });

    // Set initial positions for animated boxes
    gsap.set(".box-1, .box-2", { y: 100 });
  }

  setupSectionAnimations() {
    if (!this.isGSAPLoaded || !window.gsap || !this.scrollTween) return;

    const { gsap } = window;

    // Red section animation with elastic effect
    this.redTween = gsap.to(".box-1", {
      y: -130,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: ".box-1",
        containerAnimation: this.scrollTween,
        start: "left center",
        toggleActions: "play none none reset"
      }
    });

    // Gray section scrub animation
    gsap.to(".box-2", {
      y: -120,
      backgroundColor: "#1e90ff",
      ease: "none",
      scrollTrigger: {
        trigger: ".box-2",
        containerAnimation: this.scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true
      }
    });

    // Purple section class toggle
    window.ScrollTrigger.create({
      trigger: ".box-3",
      containerAnimation: this.scrollTween,
      toggleClass: "active",
      start: "center 60%"
    });

    // Green section callbacks
    window.ScrollTrigger.create({
      trigger: ".green",
      containerAnimation: this.scrollTween,
      start: "center 65%",
      end: "center 51%",
      onEnter: () => console.log("🟢 Green section entered"),
      onLeave: () => console.log("🔴 Green section left"),
      onEnterBack: () => console.log("⬅️ Green section entered back"),
      onLeaveBack: () => console.log("➡️ Green section left back"),
      onToggle: self => console.log("🔄 Green section active:", self.isActive)
    });
  }

  getScrollPosition(animation, progress = 0) {
    if (!window.gsap || !animation) return 0;

    const { gsap } = window;
    const p = gsap.utils.clamp(0, 1, progress);
    const nested = !animation.scrollTrigger;
    const st = nested ? animation.parent.scrollTrigger : animation.scrollTrigger;
    const containerAnimation = st.vars.containerAnimation;
    const range = st.end - st.start;
    const position = st.start + range * p;
    
    if (containerAnimation) {
      const containerST = containerAnimation.scrollTrigger;
      return containerST.start + (containerST.end - containerST.start) * (position / containerAnimation.duration());
    } else if (nested) {
      const start = st.start + (animation.startTime() / animation.parent.duration()) * range;
      const end = st.start + ((animation.startTime() + animation.duration()) / animation.parent.duration()) * range;
      return start + (end - start) * p;
    }
    
    return position;
  }

  scrollToRedTween() {
    if (!window.gsap || !this.redTween) return;

    const scrollPosition = this.getScrollPosition(this.redTween);
    window.gsap.to(window, {
      scrollTo: scrollPosition,
      duration: 1.5,
      ease: "power2.inOut"
    });
  }

  cleanup() {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    this.scrollTween = null;
    this.redTween = null;
  }
}
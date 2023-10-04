// // import { useEffect, useRef } from 'react';
// import SectionWrapper from '../hoc/SectionWrapper'

// const HorizontalScrollLoop = () => {
//   // const containerRef = useRef<HTMLDivElement | null>(null);

//   // useEffect(() => {
//   //   const container = containerRef.current;

//   //   if (!container) return;

//   //   const scrollContainer = container.querySelector('.scroll-container') as HTMLDivElement | null;
//   //   const items = scrollContainer?.querySelectorAll('.item');

//   //   if (!scrollContainer || !items) return;

//   //   const totalWidth = Array.from(items).reduce(
//   //     (acc, item) => acc + (item.clientWidth || 0),
//   //     0
//   //   );

//   //   scrollContainer.style.width = `${totalWidth}px`;

//   //   let scrollLeft = 0;

//   //   const scroll = () => {
//   //     scrollLeft += 1;
//   //     if (scrollLeft >= totalWidth) {
//   //       scrollLeft = 0;
//   //     }
//   //     container.scrollLeft = scrollLeft;
//   //   };

//   //   let scrollInterval = setInterval(scroll, 30);

//   //   container.addEventListener('mouseenter', () => {
//   //     clearInterval(scrollInterval);
//   //   });

//   //   container.addEventListener('mouseleave', () => {
//   //     scrollInterval = setInterval(scroll, 30);
//   //   });

//   //   // Add event listener for mouse wheel scrolling
//   //   const handleWheel = (event: WheelEvent) => {
//   //     if (event.deltaY > 0) {
//   //       scrollLeft += 10; // Increase scroll speed when scrolling down
//   //     } else {
//   //       scrollLeft -= 10; // Increase scroll speed when scrolling up
//   //     }

//   //     if (scrollLeft >= totalWidth) {
//   //       scrollLeft = 0;
//   //     } else if (scrollLeft < 0) {
//   //       scrollLeft = totalWidth - container.clientWidth;
//   //     }

//   //     container.scrollLeft = scrollLeft;
//   //     event.preventDefault(); // Prevent default page scrolling
//   //   };

//   //   container.addEventListener('wheel', handleWheel);

//   //   return () => {
//   //     clearInterval(scrollInterval);
//   //     container.removeEventListener('wheel', handleWheel); // Remove wheel event listener
//   //   };
//   // }, []);

//   return (
//     // <div className="horizontal-scroll-loop" ref={containerRef}>
//     //   <div className="scroll-container">
//     //     <div className="item">Item 1</div>
//     //     <div className="item">Item 2</div>
//     //     <div className="item">Item 3</div>
//     //     <div className="item">Item 4</div>
//     //     <div className="item">Item 5</div>  
//     //     <div className="item">Item 6</div>
//     //     <div className="item">Item 7</div>
        
//     //     {/* Add more items here */}
//     //   </div>
//     // </div>
    

// <div className="container">
// <div className="horizontal-scrolling-items">

// <div className="horizontal-scrolling-items__item">
// Here is some horizontally scrolling text used for a tutorial. It will loop smoothly.&nbsp
// </div>

// <div className="horizontal-scrolling-items__item">
// Here is some horizontally scrolling text used for a tutorial. It will loop smoothly.&nbsp
// </div>

// </div>
  
// </div>


//   );
// };

// export default SectionWrapper(HorizontalScrollLoop, 'HorizontalScrollLoop')
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HorizontalScroll: React.FC = () => {
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollingText = railRef.current?.querySelectorAll('h4');

    if (!scrollingText) return;

    // Your horizontalLoop function code here
    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    // Observer.create code here
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play the animation when the element is in view
          tl.play();
        } else {
          // Pause the animation when the element is out of view
          tl.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(railRef.current as Element);

    return () => {
      // Clean up or pause the animation if needed
      tl.kill();
      observer.disconnect();
    };
  }, []);

  function horizontalLoop(items: NodeListOf<HTMLHeadingElement>, config: { repeat: number }) {
    // Create a GSAP timeline
    const tl = gsap.timeline({ repeat: config.repeat, paused: true });
  
    // Calculate the width of the rail to determine the animation duration
    const railWidth = railRef.current?.offsetWidth || 0;
  
    // Calculate the total duration based on the width of the rail and the animation speed
    const duration = railWidth / 300; // Adjust the 300 to control the animation speed
  
    // Animate each heading element with staggered intervals
    items.forEach((item, index) => {
      // Calculate the stagger delay for each heading
      const staggerDelay = (index * duration) / 50;
  
      // Add an initial set to position each heading off-screen on the right
      tl.set(item, {
        x: railWidth,
      });
  
      // Animate the heading to move it to the left
      tl.to(item, {
        x: -railWidth, // Move the heading to the left
        ease: 'linear',
        duration, // Duration of each heading animation
      }, staggerDelay);
  
      // Add a set method to move the heading back to its original position instantly
      tl.set(item, {
        x: railWidth,
      }, `+=${duration}`);
    });
  
    // Add a seamless transition from the last heading back to the first one
    tl.to(items, {
      x: 0, // Return headings to their original position
      ease: 'linear',
      duration: 0.01, // A very short duration for a seamless transition
      delay: duration * items.length * config.repeat, // Delay after the last heading animation completes
      onComplete: () => {
        tl.restart(); // Restart the animation when the seamless transition completes
      },
    });
  
    return tl;
  }

  return (
    <div className="scrolling-text">
      <div className="rail" ref={railRef}>
        <h4>1211</h4>
        <h4>23333</h4>
        <h4>344444</h4>
      </div>
    </div>
  );
};

export default HorizontalScroll;
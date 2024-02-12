import { useEffect, useRef } from 'react';
import './App.css';
import logo from './assets/img1.jpg';
import { TweenMax, Power3 } from 'gsap';

function App() {
  let Image = useRef<HTMLImageElement | null>(null);
  let Text = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (Image.current && Text.current) {
      TweenMax.to(
        Image.current,
        0.8,
        {
          opacity: 1,
          y: -20,
          ease: Power3.easeInOut
        }
      );

      TweenMax.to(
        Text.current,
        0.8,
        {
          opacity: 1,
          y: -20,
          ease: Power3.easeInOut,
          delay: 2
        }
      );
    }
  }, []);

  return (
    <div className="App">
      <img className='App-logo' ref={Image} src={logo} alt="renderimage" />
      <p className='App-header' ref={Text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quis molestiae vero aut ducimus a ad in voluptatum eum explicabo ipsa, voluptates temporibus dolore laborum, repudiandae, sint quidem id similique?</p>
    </div>
  );
}

export default App;

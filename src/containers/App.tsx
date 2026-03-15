import React, { useRef } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { ParallaxPage } from '../components/ParallaxPage/ParallaxPage'
import './App.css';
import type { IParallax } from '../types'; 

function App() {
        const parallaxRef = useRef<IParallax>(null);
    
        const scrollToPage = (pageIndex: number) => {
          parallaxRef.current?.scrollTo(pageIndex);
        };

    return (
        <>
            <NavigationBar scrollToPage={scrollToPage} />
                <div className='App'>
                    <ParallaxPage parallaxRef={parallaxRef} />
                </div>
        </>
    );
  }

export default App;
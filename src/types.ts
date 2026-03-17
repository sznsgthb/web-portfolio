import type { MutableRefObject } from 'react';
import type { IParallax } from '@react-spring/parallax';
export type { IParallax } from '@react-spring/parallax';


export enum Adaptive {
    xs = 'xs',
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl'
}

export enum Pages {
    home = 'home',
    moon = 'moon',
    clouds = 'clouds',
    drift = 'drift',
    tree = 'tree',
    welcome = 'welcome',
    rocks = 'rocks',
    intro = 'intro',
    background = 'background',
    portfolio = 'portfolio',
    tools = 'tools',
    about = 'about',
    contact = 'contact',
    footer = 'footer'
}
  
export  interface UseAdaptiveTriggersProps {
    onExtraSmallEnter?: () => void
    onSmallEnter?: () => void
    onMediumEnter?: () => void
    onLargeEnter?: () => void
    onExtraLargeEnter?: () => void
}

export interface PageConfig {
    offset: number
    speed: number
    scroll?: number
}

export interface LayoutConfig {
    pages: number
}


// PROPS TYPES

export type NavigationBarProps = {
    scrollToPage: (pageIndex: number) => void
}

export type ParallaxPageProps = {
    parallaxRef: MutableRefObject<IParallax | null>
}


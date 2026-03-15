import React, { useState, useLayoutEffect } from 'react';
import type { UseAdaptiveTriggersProps } from './types.js';
import { Adaptive } from './types.js';
  
export const  useAdaptiveTriggers = ({ onExtraSmallEnter, onSmallEnter, onMediumEnter, onLargeEnter, onExtraLargeEnter}: UseAdaptiveTriggersProps): Adaptive => {
    const [width, setWidth] = useState<Adaptive>(Adaptive.xl)

    useLayoutEffect(() => {
        const handleResize = () => {
            if (window?.innerWidth < 450) {
            onExtraSmallEnter?.()
            return setWidth(Adaptive.xs)
            }
            if (window?.innerWidth < 769) {
            onSmallEnter?.()
            return setWidth(Adaptive.s)
            }
            if (window?.innerWidth < 1025) {
            onMediumEnter?.()
            return setWidth(Adaptive.m)
            }
            if (window?.innerWidth < 1441) {
            onLargeEnter?.()
            return setWidth(Adaptive.l)
            }
            onExtraLargeEnter?.()
            return setWidth(Adaptive.xl)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
        }, [onSmallEnter, onMediumEnter, onLargeEnter, onExtraLargeEnter, onExtraSmallEnter]
    )
    return width
}
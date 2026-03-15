import { Adaptive, Pages } from './types.js';
import type { PageConfig, LayoutConfig } from './types.js';


export const parallaxConfig: Record<Adaptive, Record<Pages, PageConfig> & LayoutConfig> = {
    [Adaptive.xs]: {
        pages: 9.45,
        [Pages.home]: {
            offset: 0,
            speed: 0,
        },
        [Pages.moon]: {
            offset: 0.15,
            speed: -0.05,
        },
        [Pages.clouds]: {
            offset: 0.6,
            speed: -0.2,
        },
        [Pages.drift]: {
            offset: 0.1,
            speed: -0.15,
        },
        [Pages.tree]: {
            offset: 0.3,
            speed: -0.25,
        },
        [Pages.welcome]: {
            offset: 0.1,
            speed: -0.15,
        },
        [Pages.rocks]: {
            offset: 0.6,
            speed: -0.05,
        },
        [Pages.intro]: {
            offset: 1.5,
            speed: 0.2,
            scroll: 1.2
        },
        [Pages.background]: {
            offset: 3,
            speed: 0.05,
        },
        [Pages.portfolio]: {
            offset: 2.6,
            speed: 0.5,
            scroll: 2.3,
        },
        [Pages.tools]: {
            offset: 6,
            speed: 0.5,
            scroll: 5.9,
        },
        [Pages.about]: {
            offset: 7.3,
            speed: 0.5,
            scroll: 7.1,
        },
        [Pages.contact]: {
            offset: 8.6,
            speed: 0.5,
            scroll: 8.3,
        },
        [Pages.footer]: {
            offset: 9.4,
            speed: 0,
        }
    },
    [Adaptive.s]: {
        pages: 9.25,
        [Pages.home]: {
            offset: 0,
            speed: 0,
        },
        [Pages.moon]: {
            offset: 0.1,
            speed: -0.05,
        },
        [Pages.clouds]: {
            offset: 0.6,
            speed: -0.2,
        },
        [Pages.drift]: {
            offset: 0.1,
            speed: -0.15,
        },
        [Pages.tree]: {
            offset: 0.3,
            speed: -0.25,
        },
        [Pages.welcome]: {
            offset: 0.1,
            speed: -0.15,
        },
        [Pages.rocks]: {
            offset: 0.6,
            speed: -0.05,
        },
        [Pages.intro]: {
            offset: 1.5,
            speed: 0.2,
            scroll: 1.2
        },
        [Pages.background]: {
            offset: 2.9,
            speed: 0.05,
        },
        [Pages.portfolio]: {
            offset: 2.5,
            speed: 0.5,
            scroll: 2.2,
        },
        [Pages.tools]: {
            offset: 6.5,
            speed: 0.5,
            scroll: 6.2,
        },
        [Pages.about]: {
            offset: 7.5,
            speed: 0.5,
            scroll: 7.3,
        },
        [Pages.contact]: {
            offset: 8.5,
            speed: 0.5,
            scroll: 8.3,
        },
        [Pages.footer]: {
            offset: 9.2,
            speed: 0,
        }
    },
    [Adaptive.m]: {
        pages: 9.35,
        [Pages.home]: {
            offset: 0,
            speed: 0,
        },
        [Pages.moon]: {
            offset: 0.1,
            speed: -0.05,
        },
        [Pages.clouds]: {
            offset: 0.6,
            speed: -0.15,
        },
        [Pages.drift]: {
            offset: 0.1,
            speed: -0.15,
        },
        [Pages.tree]: {
            offset: 0.3,
            speed: -0.35,
        },
        [Pages.welcome]: {
            offset: 0.2,
            speed: -0.15,
        },
        [Pages.rocks]: {
            offset: 0.5,
            speed: -0.15,
        },
        [Pages.intro]: {
            offset: 1.4,
            speed: 0.4,
            scroll: 1.1
        },
        [Pages.background]: {
            offset: 2.9,
            speed: 0.05,
        },
        [Pages.portfolio]: {
            offset: 2.1,
            speed: 0.5,
            scroll: 2.0,
        },
        [Pages.tools]: {
            offset: 6.9,
            speed: 0.5,
            scroll: 6.5,
        },
        [Pages.about]: {
            offset: 7.7,
            speed: 0.5,
            scroll: 7.5,
        },
        [Pages.contact]: {
            offset: 8.7,
            speed: 0.5,
            scroll: 8.5,
        },
        [Pages.footer]: {
            offset: 9.3,
            speed: 0,
            scroll: 9.1,
        }
    },
    [Adaptive.l]: {
        pages: 10.45,
        [Pages.home]: {
            offset: 0,
            speed: 0,
        },
        [Pages.moon]: {
            offset: 0.1,
            speed: -0.05,
        },
        [Pages.clouds]: {
            offset: 0.6,
            speed: -0.15,
        },
        [Pages.drift]: {
            offset: 0.05,
            speed: -0.15,
        },
        [Pages.tree]: {
            offset: 0.3,
            speed: -0.35,
        },
        [Pages.welcome]: {
            offset: 0.2,
            speed: -0.2,
        },
        [Pages.rocks]: {
            offset: 0.5,
            speed: -0.05,
        },
        [Pages.intro]: {
            offset: 1.7,
            speed: 0.4,
            scroll: 1.3
        },
        [Pages.background]: {
            offset: 3.8,
            speed: 0.05,
        },
        [Pages.portfolio]: {
            offset: 2.5,
            speed: 0.5,
            scroll: 2.2,
        },
        [Pages.tools]: {
            offset: 7.9,
            speed: 0.5,
            scroll: 7.5,
        },
        [Pages.about]: {
            offset: 8.9,
            speed: 0.5,
            scroll: 8.5,
        },
        [Pages.contact]: {
            offset: 9.8,
            speed: 0.5,
            scroll: 9.4,
        },
        [Pages.footer]: {
            offset: 10.4,
            speed: 0,
        }
    },

    [Adaptive.xl]: {
        pages: 10.95,
        [Pages.home]: {
            offset: 0,
            speed: 0,
        },
        [Pages.moon]: {
            offset: 0,
            speed: -0.05,
        },
        [Pages.clouds]: {
            offset: 0.5,
            speed: -0.15,
        },
        [Pages.drift]: {
            offset: 0.05,
            speed: -0.15,
        },
        [Pages.tree]: {
            offset: 0.2,
            speed: -0.35,
        },
        [Pages.welcome]: {
            offset: 0.4,
            speed: -0.2,
        },
        [Pages.rocks]: {
            offset: 0.1,
            speed: -0.2,
        },
        [Pages.intro]: {
            offset: 1.7,
            speed: 0.3,
            scroll: 1.3,
        },
        [Pages.background]: {
            offset: 3.8,
            speed: 0.05,
        },
        [Pages.portfolio]: {
            offset: 2.7,
            speed: 0.5,
            scroll: 2.4,
        },
        [Pages.tools]: {
            offset: 8,
            speed: 0.5,
            scroll: 7.9,
        },
        [Pages.about]: {
            offset: 9,
            speed: 0.5,
            scroll: 8.9,
        },
        [Pages.contact]: {
            offset: 10,
            speed: 0.5,
            scroll: 9.9,
        },
        [Pages.footer]: {
            offset: 10.9,
            speed: 0,
        }
    }
}
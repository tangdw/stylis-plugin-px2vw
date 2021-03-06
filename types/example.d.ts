export declare const flush: () => void, hydrate: (ids: string[]) => void, cx: (...classNames: import("@emotion/css/create-instance").ClassNamesArg[]) => string, merge: (className: string) => string, getRegisteredStyles: (registeredStyles: string[], className: string) => string, injectGlobal: {
    (template: TemplateStringsArray, ...args: import("@emotion/serialize").CSSInterpolation[]): void;
    (...args: import("@emotion/serialize").CSSInterpolation[]): void;
}, keyframes: {
    (template: TemplateStringsArray, ...args: import("@emotion/serialize").CSSInterpolation[]): string;
    (...args: import("@emotion/serialize").CSSInterpolation[]): string;
}, css: {
    (template: TemplateStringsArray, ...args: import("@emotion/serialize").CSSInterpolation[]): string;
    (...args: import("@emotion/serialize").CSSInterpolation[]): string;
}, sheet: import("@emotion/css/create-instance").CSSStyleSheet, cache: import("@emotion/utils").EmotionCache;

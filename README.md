## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

## Resize Observer Hook
I found myself in this rabbit hole after reading: https://css-tricks.com/a-better-api-for-the-resize-observer/?ref=dailydev
I wanted to play around with the resizeObserver.
https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver

## Purpose of useSquareResize hook
-To track the width and height of multiple DOM elements (squares) in real time using ResizeObserver.
-Returns an array of refs (to attach to elements) and an array of size objects (with width and height).

## When would you use it...

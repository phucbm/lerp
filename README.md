# 🎯 Lerp

A lightweight TypeScript utility function for linear interpolation.

[![npm version](https://badgen.net/npm/v/@phucbm/lerp?icon=npm)](https://www.npmjs.com/package/@phucbm/lerp)
[![npm downloads](https://badgen.net/npm/dm/@phucbm/lerp?icon=npm)](https://www.npmjs.com/package/@phucbm/lerp)
[![license](https://badgen.net/github/license/phucbm/lerp?icon=github)](https://github.com/phucbm/lerp/blob/main/LICENSE)

## Installation

```bash
npm install @phucbm/lerp
```

## Usage

```typescript
import { lerp } from '@phucbm/lerp'
// or
import lerp from '@phucbm/lerp'

// Basic usage
lerp(0, 100, 0.5)  // 50

// With default fraction (0.1)
lerp(0, 100)       // 10

// Smooth animation
let current = 0
const target = 100
current = lerp(current, target, 0.2)  // Moves 20% closer to target
```

## API

```typescript
lerp(start: number, end: number, fraction?: number): number
```

- `start` - Starting value
- `end` - Target value  
- `fraction` - Interpolation factor (default: 0.1)
  - `0` = no change
  - `1` = instant change
  - `0.1` = move 10% closer to target

## License

MIT © [phucbm](https://github.com/phucbm)
/**
 * Linear interpolation function for smooth animation
 * @param start - Starting value
 * @param end - Target value
 * @param fraction - Interpolation factor (0 = no change, 1 = instant change), default: 0.1
 * @returns Interpolated value between start and end
 */
export function lerp(start: number, end: number, fraction: number = 0.1): number {
    return start * (1 - fraction) + end * fraction;
}

// Default export for convenience
export default lerp;

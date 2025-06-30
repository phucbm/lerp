/**
 * Linear interpolation function for smooth animation
 * @param start - Starting value
 * @param end - Target value
 * @param fraction - Interpolation factor (0 = no change, 1 = instant change), default: 0.1
 * @returns Interpolated value between start and end
 */
declare function lerp(start: number, end: number, fraction?: number): number;

export { lerp as default, lerp };

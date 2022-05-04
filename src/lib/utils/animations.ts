function getValue(startValue: number, endValue: number, percentage: number): number {
	return (endValue - startValue) / percentage;
}
export function center(_node, { delay = 0, duration = 300 }) {
	const initScale = 0.8;
	const scaleMax = 1.1;
	const tMax = 0.75;
	return {
		delay,
		duration,
		css: (t) => {
			let scale;
			if (t <= tMax) {
				scale = initScale + getValue(initScale, scaleMax, tMax) * t;
			} else {
				scale = scaleMax + getValue(scaleMax, 1, 1 - tMax) * (t - tMax);
			}
			return `
          opacity: ${t};
          transform: scale(${scale}) translate(-50%, -50%);
        `;
		}
	};
}

export function top(_node, { delay = 0, duration = 300 }) {
	return {
		delay,
		duration,
		css: (t) => {
			return `
          transform: translateY(${t * 100 - 100}%);
        `;
		}
	};
}

export function right(_node, { delay = 0, duration = 300 }) {
	return {
		delay,
		duration,
		css: (t) => {
			return `
          transform: translateX(${100 - t * 100}%);
        `;
		}
	};
}

export function bottom(_node, { delay = 0, duration = 300 }) {
	return {
		delay,
		duration,
		css: (t) => {
			return `
          transform: translateY(${100 - t * 100}%);
        `;
		}
	};
}

export function left(_node, { delay = 0, duration = 300 }) {
	return {
		delay,
		duration,
		css: (t) => {
			return `
          transform: translateX(${t * 100 - 100}%);
        `;
		}
	};
}

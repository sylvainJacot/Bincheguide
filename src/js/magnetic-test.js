// Elements
const magneticAreaEl = document.querySelector('.magnetic-area');
const buttonEl = magneticAreaEl.querySelector('.button--magnetic');

// Cached sizes of things, so we don't force reflow
const buttonBounds = buttonEl.getBoundingClientRect();
const buttonWidth = buttonBounds.width;
const buttonHeight = buttonBounds.height;

const magneticBounds = magneticAreaEl.getBoundingClientRect();
const magneticWidth = magneticBounds.width;
const magneticHeight = magneticBounds.height;
const magneticRadius = magneticWidth / 2;

// ReboundJS stuff for the springy goodness
const springSystem = new rebound.SpringSystem();
const spring = springSystem.createSpring(100, 7);

const cursorPosition = {
	x: 0,
	y: 0,
}

spring.addListener({
	onSpringUpdate: (spring) => {
		let val = spring.getCurrentValue();
		val = rebound.MathUtil.mapValueInRange(val, 0, 1, 0, 1);
		move(buttonEl, val);
	},
});

magneticAreaEl.addEventListener('mousemove', (ev) => {
	cursorPosition.x = (ev.pageX - ev.currentTarget.offsetLeft) - (magneticWidth/2);
	cursorPosition.y = (ev.pageY - ev.currentTarget.offsetTop) - (magneticHeight/2);
	
	const distance = Math.sqrt(Math.pow(cursorPosition.x, 2) + Math.pow(cursorPosition.y, 2)) // Cursor distance from original centre
	
	if (distance > magneticRadius) {
		spring.setEndValue(0);
		return;
	}
	
	const distanceRatio = 1 - (distance / magneticRadius);
	let attraction = Math.abs(1 / (1 - Math.pow(distanceRatio * 10, 2)) - 1); // inverse-square style falloff - rapid increase in attraction as the distance decreases
	attraction = Math.max(0, Math.min(1, attraction)); // Bound to reasonable values
	spring.setEndValue(attraction);
	
	if (spring.isAtRest()) {
		// wake up the spring
		// TODO: this may not be be the best way to do this
		spring.setVelocity(1)
	}
});

function move(el, val) {
	const x = val * cursorPosition.x;
	const y = val * cursorPosition.y;

	el.style.transform = `translate(${x}px, ${y}px)`;
}

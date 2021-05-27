// Chrome Dev Tools Breakpoint

// const size = {
// 	mobileS: "320px",
// 	mobileM: "375px",
// 	mobileL: "425px",
// 	tablet: "768px",
// 	laptop: "1024px",
// 	laptopL: "1440px",
// 	desktop: "2560px",
// };

// Bootstrap Breakpoint

const size = {
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
};

export const device = {
	mobile: `(max-width: ${size.sm})`,
	tablet: `(max-width: ${size.md})`,
	laptop: `(max-width: ${size.lg})`,
	desktop: `(max-width: ${size.xl})`,
};

const sizes = {
    phone: "375px",
    phoneL: "480px",
    tablet: "768px",
    lapTop: "1024px",
    lapTopL: "1440px",
    desktop: "1600px",
};

export const device = {
    phone: `(min-width: ${sizes.phone})`,
    phoneL: `(min-width: ${sizes.phoneL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    lapTop: `(min-width: ${sizes.lapTop})`,
    lapTopL: `(min-width: ${sizes.lapTopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
}

export default device
const BREAKPOINTS = {
  mobile: {
    small: "375px",
    large: "580px"
  },
  tablet: {
    small: "840px",
    large: "1140px"
  },
  desktop: {
    small: "1280px",
    large: "1440px"
  }
};

const GRID = {
  wrapper: `
    display: block;
    margin: 0 auto;
    width: calc(100vw - 4rem - 12.5rem);
    max-width: 960px;
    transform: translateX(6.25rem);

    @media (max-width: ${BREAKPOINTS.tablet.large}) {
      max-width: calc(100vw - 4rem);
    }

    @media (max-width: ${BREAKPOINTS.mobile.large}) {
      max-width: calc(100vw - 2rem);
    }
  `,
  container: `
    display: grid;
    max-width: 60rem;
    margin: 0 auto;
    grid-template-columns: repeat( 12, 1fr );
    grid-gap: 1.5rem;

    @media (max-width: ${BREAKPOINTS.tablet.large}) {
      max-width: calc(100vw - 4rem);
      grid-template-columns: repeat( 8, 1fr );
    }

    @media (max-width: ${BREAKPOINTS.mobile.large}) {
      max-width: calc(100vw - 2rem);
      grid-template-columns: repeat( 4, 1fr );
    }
  `
};

const MARKETING_GRID = {
  wrapper: `
    display: block;
    margin: 0 auto;
    width: calc(100vw - 4rem);
    max-width: 960px;

    @media (max-width: ${BREAKPOINTS.tablet.large}) {
      max-width: calc(100vw - 4rem);
    }

    @media (max-width: ${BREAKPOINTS.mobile.large}) {
      max-width: calc(100vw - 2rem);
    }
  `,
  container: `
    display: grid;
    max-width: 60rem;
    margin: 0 auto;
    grid-template-columns: repeat( 12, 1fr );
    grid-gap: 1.5rem;

    @media (max-width: ${BREAKPOINTS.tablet.large}) {
      max-width: calc(100vw - 4rem);
      grid-template-columns: repeat( 8, 1fr );
    }

    @media (max-width: ${BREAKPOINTS.mobile.large}) {
      max-width: calc(100vw - 2rem);
      grid-template-columns: repeat( 4, 1fr );
    }
  `
};

export { GRID, MARKETING_GRID, BREAKPOINTS };

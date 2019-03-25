import THEME from "./Theme";

const TYPE = {
  displayLarge: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 3.375rem;
        line-height: 5.0625rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 1rem 0 2rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 3.375rem;
        line-height: 5.0625rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 1rem 0 2rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 3.375rem;
        line-height: 5.0625rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 1rem 0 2rem;
      `
    }
  },
  displaySmall: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 2.25rem;
        line-height: 3.375rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: .5rem 0 1.5rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 2.25rem;
        line-height: 3.375rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: .5rem 0 1.5rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 2.25rem;
        line-height: 3.375rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: .5rem 0 1.5rem;
      `
    }
  },
  heading: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: .5rem 0 1.5rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: .5rem 0 1.5rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: .5rem 0 1.5rem;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Lato';
        font-weight: 700;
        margin: .5rem 0 1.5rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Lato';
        font-weight: 700;
        margin: .5rem 0 1.5rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Lato';
        font-weight: 700;
        margin: .5rem 0 1.5rem;
      `
    }
  },
  subheading: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: .5rem 0 1rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: .5rem 0 1rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: .5rem 0 1rem;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 700;
        letter-spacing: .0375rem;
        text-transform: uppercase;
        margin: .5rem 0 1rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 700;
        letter-spacing: .0375rem;
        text-transform: uppercase;
        margin: .5rem 0 1rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 700;
        letter-spacing: .0375rem;
        text-transform: uppercase;
        margin: .5rem 0 1rem;
      `
    }
  },
  body: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0 0 1rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0 0 1rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0 0 1rem;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0 0 1rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0 0 1rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0 0 1rem;
      `
    }
  },
  caption: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0 0 .5rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0 0 .5rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0 0 .5rem;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0 0 .5rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0 0 .5rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0 0 .5rem;
      `
    }
  }
};

export default TYPE;

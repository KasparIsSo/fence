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
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 3.375rem;
        line-height: 5.0625rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 3.375rem;
        line-height: 5.0625rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 0;
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
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 2.25rem;
        line-height: 3.375rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 2.25rem;
        line-height: 3.375rem;
        font-family: 'Crimson Text';
        font-weight: 600;
        margin: 0;
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
        margin: 0;
        letter-spacing: -.01875rem;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: 0;
        letter-spacing: -.01875rem;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Crimson Text';
        font-weight: 700;
        margin: 0;
        letter-spacing: -.01875rem;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Lato';
        font-weight: 700;
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Lato';
        font-weight: 700;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-family: 'Lato';
        font-weight: 700;
        margin: 0;
      `
    }
  },
  subheading: {
    feature: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
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
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 700;
        letter-spacing: .0375rem;
        text-transform: uppercase;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 700;
        letter-spacing: .0375rem;
        text-transform: uppercase;
        margin: 0;
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
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0;
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
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Crimson Text';
        font-weight: 400;
        margin: 0;
      `
    },
    primary: {
      white: `
        color: ${THEME.color.gray.white};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0;
      `,
      subdued: `
        color: ${THEME.color.gray.subdued};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0;
      `,
      ink: `
        color: ${THEME.color.gray.ink};
        font-size: .6875rem;
        line-height: 1rem;
        font-family: 'Lato';
        font-weight: 400;
        margin: 0;
      `
    }
  }
};

export default TYPE;

import Typography from "typography";

const typography = new Typography({
  bodyColor: '#262626',
  baseFontSize: "16px",
  bodyFontFamily: [
    // refer: https://munyagu.com/2094/
    "游ゴシック Medium", // win
    "Yu Gothic Medium", // win
    "游ゴシック体", // mac
    'YuGothic', // mac
  ],
  headerColor: '#262626',
  headerFontFamily: [
    "游ゴシック Medium", // win
    "Yu Gothic Medium", // win
    "游ゴシック体", // mac
    'YuGothic', // mac
  ],
  overrideStyles: () => {
    return {
      'ul, li': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      'h1, h2, h3': {
        textAlign: 'center',
      },
      'img': {
        margin: 0,
      },
    }
  },
});

export default typography;
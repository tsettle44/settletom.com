import Typography from 'typography'
import fairGatesTheme from 'typography-theme-fairy-gates'
fairGatesTheme.baseFontSize = '16px'
fairGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    textShadow: rhythm(0),
    backgroundImage: rhythm('none'),
  },
})

const typography = new Typography(fairGatesTheme)

export default typography

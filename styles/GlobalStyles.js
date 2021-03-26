import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  * {
    outline: none !important;
    text-decoration: none;
    list-style: none;
    font-family: IRANSans;
    direction: rtl;
  }
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased bg-blue-50`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles

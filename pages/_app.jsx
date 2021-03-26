import GlobalStyles from 'styles/GlobalStyles'
import { RecoilRoot } from 'recoil'
const App = ({ Component, pageProps }) => (
  <RecoilRoot>
    <GlobalStyles />
    <Component {...pageProps} />
  </RecoilRoot>
)

export default App

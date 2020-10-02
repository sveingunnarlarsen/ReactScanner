import { useMediaQuery } from 'react-responsive'
import { MOBILE_MAX_SCREEN_WIDTH } from '../../../lib/screenConstants'

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_SCREEN_WIDTH })
  return isMobile ? children : null
}

export default Mobile

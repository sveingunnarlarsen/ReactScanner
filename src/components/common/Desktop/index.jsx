import { useMediaQuery } from 'react-responsive'
import { DESKTOP_MIN_SCREEN_WIDTH } from '../../../lib/screenConstants'

const Desktop = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: DESKTOP_MIN_SCREEN_WIDTH })
  return isMobile ? children : null
}

export default Desktop

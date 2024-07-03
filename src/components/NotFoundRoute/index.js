import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFoundRoute = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundNote>
      We are sorry, the page you requested could not be found.
    </NotFoundNote>
  </NotFoundContainer>
)
export default NotFoundRoute

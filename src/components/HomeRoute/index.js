import {Link} from 'react-router-dom'

import RegisterContext from '../../MeetupContext/RegisterContext'

import {
  HomeContainer,
  HeaderContainer,
  MeetupLogo,
  RegisteredHome,
  RegisteredHeading,
  RegisteredTopic,
  RegisterButton,
  RegisteredMeetupImage,
  RegisterHome,
  RegisterHeading,
  RegisterTopicNote,
  RegisterMeetupImage,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <MeetupLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderContainer>
)

const HomeRoute = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, activeTopic, isRegistered} = value

        const topic = topicsList.find(eachTopic => eachTopic.id === activeTopic)

        return (
          <HomeContainer>
            <Header />
            {isRegistered ? (
              <RegisteredHome>
                <RegisteredHeading>Hello {name}</RegisteredHeading>
                <RegisteredTopic>
                  Welcome to {topic.displayText}
                </RegisteredTopic>
                <RegisteredMeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </RegisteredHome>
            ) : (
              <RegisterHome>
                <RegisterHeading>Welcome to Meetup</RegisterHeading>
                <RegisterTopicNote>
                  Please Register for the topic
                </RegisterTopicNote>
                <Link to="/register">
                  <RegisterButton type="button" onClick={onClickRegister}>
                    Register
                  </RegisterButton>
                </Link>
                <RegisterMeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </RegisterHome>
            )}
          </HomeContainer>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default HomeRoute

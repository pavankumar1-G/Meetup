import {Link} from 'react-router-dom'

import RegisterContext from '../../MeetupContext/RegisterContext'

import {
  RegisterFormContainer,
  HeaderContainer,
  MeetupLogo,
  RegisterContent,
  RegisterImage,
  RegisterForm,
  FormHeading,
  FormLabel,
  FormInput,
  SelectInput,
  Option,
  RegisterFormButton,
  ErrorMsg,
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

const RegisterRoute = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        isRegisterError,
        activeTopic,
        changeName,
        changeTopic,
        updateError,
        updateHome,
      } = value

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeOption = event => {
        changeTopic(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '') {
          const {history} = props
          history.replace('/')
          updateHome()
        } else {
          updateError()
        }
      }

      return (
        <RegisterFormContainer>
          <Header />
          <RegisterContent>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterForm onSubmit={onSubmitForm}>
              <FormHeading>Let us join</FormHeading>
              <FormLabel htmlFor="name">NAME</FormLabel>
              <FormInput
                id="name"
                type="text"
                value={name}
                onChange={onChangeName}
                placeholder="Your name"
              />

              <FormLabel htmlFor="topic">TOPICS</FormLabel>
              <SelectInput
                id="topic"
                value={activeTopic}
                onChange={onChangeOption}
              >
                {topicsList.map(eachTopic => (
                  <Option value={eachTopic.id} key={eachTopic.id}>
                    {eachTopic.displayText}
                  </Option>
                ))}
              </SelectInput>

              <RegisterFormButton type="submit">
                Register Now
              </RegisterFormButton>
              {isRegisterError && <ErrorMsg>Please enter your name</ErrorMsg>}
            </RegisterForm>
          </RegisterContent>
        </RegisterFormContainer>
      )
    }}
  </RegisterContext.Consumer>
)
export default RegisterRoute

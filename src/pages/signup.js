import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory()
  const { projectFirebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || emailAddress === '' || password === ''

  const handleSignup = (event) => {
    event.preventDefault()
      
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input 
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're 
            not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  )
}

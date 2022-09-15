
import SignUpForm from '../../components/sign-up-form/sign-up-form.xomponent';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainrt } from './authentication-in.styles';

const Authentication = () => {

  return (
    <AuthenticationContainrt>
    <SignInForm/>
    <SignUpForm/>
    </AuthenticationContainrt>
  )
}

export default Authentication
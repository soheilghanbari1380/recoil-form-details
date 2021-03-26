import { stepState } from 'atoms'
import { useRecoilValue } from 'recoil'
import tw from 'twin.macro'
import Details from 'views/forms/Details'
import PersonalForm from 'views/forms/PersonalForm'
import UserForm from 'views/forms/UserForm'

export default () => {
  const step = useRecoilValue(stepState)

  switch (step) {
    case 0:
      return <PersonalForm />
    case 1:
      return <UserForm />
    case 2:
      return <Details />
    default:
      return
  }
}

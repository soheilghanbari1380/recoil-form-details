import tw from 'twin.macro'
import TextField from 'components/forms/TextField'
import Button from 'components/forms/Button'
import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState, stepState } from 'atoms'
import FormCard from 'components/forms/FormCard'
import FadeIn from 'react-fade-in'
import Wrapper from 'components/Wrapper'
export default () => {
  const { register, handleSubmit } = useForm()

  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)

  const setStep = useSetRecoilState(stepState)

  const nextStep = data => {
    setUser({ ...user, ...data })
    setStep(prevStep => prevStep + 1)
  }

  const prevStep = () => setStep(prevStep => prevStep - 1)

  return (
    <FadeIn>
      <FormCard onSubmit={handleSubmit(nextStep)}>
        <TextField ref={register} defaultValue={user.username} name="username" label="نام کاربری" />
        <TextField ref={register} defaultValue={user.email} name="email" type="email" label="ایمیل" />
        <TextField
          ref={register}
          name="password"
          type="password"
          defaultValue={user.password}
          label="رمز عبور"
        />
        <Wrapper>
          <Button block>بعدی</Button>
          <Button onClick={prevStep} block color='default'>قبلی</Button>
        </Wrapper>
      </FormCard>
    </FadeIn>
  )
}

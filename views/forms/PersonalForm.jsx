import tw from 'twin.macro'
import TextField from 'components/forms/TextField'
import Button from 'components/forms/Button'
import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState, stepState } from 'atoms'
import FormCard from 'components/forms/FormCard'
import FadeIn from 'react-fade-in'
export default () => {
  const { register, handleSubmit } = useForm()

  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)

  const setStep = useSetRecoilState(stepState)

  const nextStep = data => {
    setUser({ ...user, ...data })
    setStep(prevStep => prevStep + 1)
  }

  return (
    <FadeIn>
      <FormCard onSubmit={handleSubmit(nextStep)}>
        <TextField ref={register} defaultValue={user.firstname} name="firstname" label="نام و نام خانوادگی" />
        <TextField ref={register} defaultValue={user.age} name="age" type="number" label="سن" />
        <TextField
          ref={register}
          name="phone"
          type="tel"
          defaultValue={user.phone}
          label="شماره تلفن"
        />
        <Button block>بعدی</Button>
      </FormCard>
    </FadeIn>
  )
}

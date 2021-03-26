import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const FormGroup = styled.div(_ => [
    tw`flex flex-col gap-2`
])

const Label = styled.label(_ => [
    tw`text-gray-400 mx-2`
])

const TextInput = styled.input(_ => [
  tw`py-2 px-4 rounded-md border text-base border-gray-400 text-gray-500 w-full`,
  tw`focus:ring-4 ring-red-200 duration-150`,
])

const TextField = forwardRef((props, ref) => {

  const { label ,name, type, ...rest } = props

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <TextInput autocomplete="off" type={type ? type : 'text' } name={name} ref={ref} id={name} {...rest} />
    </FormGroup>
  )
})

export default TextField

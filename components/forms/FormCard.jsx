import tw, { styled } from 'twin.macro'

const Card = styled.div(_ => [
  tw`bg-white shadow-md mt-32 flex flex-col gap-4 rounded-md p-10`,
])

const Form = styled.form(_ => [tw`max-w-md lg:m-auto md:mx-3 mx-3`])

export default ({ onSubmit, children }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Card>{children}</Card>
    </Form>
  )
}

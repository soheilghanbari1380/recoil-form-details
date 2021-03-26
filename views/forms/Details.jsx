import { userState } from 'atoms'
import Button from 'components/forms/Button'
import FadeIn from 'react-fade-in'
import { useRecoilValue } from 'recoil'
import tw, { styled } from 'twin.macro'

const DetailsCard = styled.div(_ => [
  tw`bg-white shadow-md mt-32 flex flex-col gap-3 rounded-md p-10 max-w-md lg:m-auto md:mx-3 mx-3`,
])

const DetailsItem = styled.div(_ => [tw`flex justify-between`])

const DetailsSpan = styled.div(_ => tw`text-gray-400`)

const DetailsText = styled.h3(_ => tw`font-bold text-gray-600`)

export default () => {
  const user = useRecoilValue(userState)
  const { firstname, age, phone, username, email } = user

  return (
    <FadeIn>
      <DetailsCard>
        <DetailsItem>
          <DetailsSpan>نام شما : </DetailsSpan>
          <DetailsText>{firstname}</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsSpan>سن شما : </DetailsSpan>
          <DetailsText>{age}</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsSpan>شماره تلفن : </DetailsSpan>
          <DetailsText>{phone}</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsSpan>نام کاربری : </DetailsSpan>
          <DetailsText>{username}</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <DetailsSpan>ایمیل : </DetailsSpan>
          <DetailsText>{email}</DetailsText>
        </DetailsItem>
        <div tw="mt-10">
          <Button block>ثبت</Button>
        </div>
      </DetailsCard>
    </FadeIn>
  )
}

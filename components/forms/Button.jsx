import tw, { styled ,css } from 'twin.macro'

export default styled.button(({ block , color }) => [
  tw`py-2 px-5 text-lg text-white w-28 bg-red-600 rounded-md`,
  tw`focus:ring-4 ring-red-200 duration-150`,
  block && tw`w-full`,
  color === 'default' && css`background-color: #C1C0C9;`
])

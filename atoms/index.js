import { atom } from 'recoil'

const userState = atom({
  key: 'user',
  default: {
    firstname: '',
    age: '',
    phone: '',
    username: '',
    email: '',
    password: '',
  },
})

const stepState = atom({
  key: 'step',
  default: 0,
})

export { userState , stepState }

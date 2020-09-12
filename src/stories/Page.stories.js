import * as HeaderStories from './Header.stories'

import MyPage from '@/components/Page'

export default {
  title: 'Example/Page',
  component: MyPage
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template:
    '<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />'
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
}

import { ThemeProvider } from 'styled-components'
import { CommentsProvider } from '../CommentsContext'
import { CommentsDispatchProvider } from '../CommentsDispatchContext'
import CounterButton from '../CounterButton'
import GlobalStyles from '../styles/GlobalStyles'
import { Theme } from '../styles/Theme'

export default {
   title: 'Counter Button',
   component: CounterButton,
   argTypes: {
      numberOfChildren: {
         type: 'number',
         defaultValue: 4,
      },
   },
}

export const Template = (args) => (
   <ThemeProvider theme={Theme}>
      <CommentsProvider comments={[]}>
         <CommentsDispatchProvider dispatch={() => {}}>
            <GlobalStyles />
            <CounterButton {...args} />
         </CommentsDispatchProvider>
      </CommentsProvider>
   </ThemeProvider>
)

export const Grey = Template.bind({})
Grey.args = {
   id: 0,
   idx: 0,
   action: 'increment',
}

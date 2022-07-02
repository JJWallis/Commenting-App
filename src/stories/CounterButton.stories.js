import { ThemeProvider } from 'styled-components'
import { CommentsProvider } from '../CommentsContext'
import { CommentsDispatchProvider } from '../CommentsDispatchContext'
import CounterButton from '../CounterButton'
import GlobalStyles from '../styles/GlobalStyles'
import { Theme } from '../styles/Theme'

export default {
   title: 'Counter Button',
   component: CounterButton,
}

export const Grey = () => (
   <ThemeProvider theme={Theme}>
      <CommentsProvider comments={[]}>
         <CommentsDispatchProvider dispatch={() => {}}>
            <GlobalStyles />
            <CounterButton id={0} idx={0} action={'increment'} score={5} />
         </CommentsDispatchProvider>
      </CommentsProvider>
   </ThemeProvider>
)

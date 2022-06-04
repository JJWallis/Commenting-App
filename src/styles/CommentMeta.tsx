import styled from 'styled-components'

interface Props {
   header?: boolean
}

export default styled.div<Props>`
   display: flex;
   justify-content: ${({ header }) => header && 'space-between'};
   align-items: center;
   gap: 0.7rem;
`

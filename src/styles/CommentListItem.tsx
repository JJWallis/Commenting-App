import styled from 'styled-components'

interface Props {
   reply?: boolean
}

export default styled.li<Props>`
   position: relative;
   background-color: ${({ theme }) => theme.softWhite};
   padding: 1rem 1rem 1rem 5rem;
   border-radius: 5px;
   margin-block: 1rem;
   width: ${({ reply }) => reply && '85%'};
`

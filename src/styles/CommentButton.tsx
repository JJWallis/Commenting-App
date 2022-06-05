import styled from 'styled-components'

interface Props {
   delete?: boolean
   reply?: boolean
   edit?: boolean
   iconSrc: string
}

export default styled.button<Props>`
   padding-left: 1.2rem;
   color: ${({ theme, ...props }) => (props.delete ? theme.red : theme.blue)};
   background: url(${({ iconSrc }) => iconSrc}) no-repeat center left;
`

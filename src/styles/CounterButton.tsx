import styled from 'styled-components'

interface Props {
   iconSrc: string
}

export default styled.button<Props>`
   background: url(${({ iconSrc }) => iconSrc}) no-repeat center;
   display: block;
   width: 100%;
   height: 30px;
`

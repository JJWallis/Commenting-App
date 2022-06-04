import styled from 'styled-components'

export default styled.div`
   position: absolute;
   left: 15px;
   top: 50%;
   transform: translateY(-50%);
   border-radius: 5px;
   background-color: ${({ theme }) => theme.lightGrey};
   text-align: center;
   width: 30px;
`

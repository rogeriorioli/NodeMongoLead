import styled from 'styled-components';
import bg from '../../img/wash.jpeg'
export const Container = styled.div`

    background: url(${bg});
    background-size : cover;
    background-repeat : no-repeat;
    background-position : center center;
    height : 100vh;
    width : 100%;
    position: relative;
    &:after {
        content : '';
        width : 100%;
        height: 100%;
        background : rgba(0,0,0,.7);
        position : absolute;
        top : 0;
    }

  
`;

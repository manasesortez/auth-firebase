// eslint-disable-next-line
import styled from 'styled-components';

const FORM = styled.form`
  font-size: ${(props) => {
    switch (props.size) {
        case 'small':
            return '1rem';
        case 'medium':
            return '1.125rem';
        case 'large':
            return '1.5rem';
        default:
            return '1.125rem';
    }
}};
  font-weight: ${(props) => {
    switch (props.weight) {
        case 'normal':
            return '400';
        case 'bold':
            return '600';
        default:
            return '400';
    }
}};
  line-height: ${(props) => {
    switch (props.size) {
        case 'small':
            return '1.25rem';
        case 'medium':
            return '1.5rem';
        case 'large':
            return '1.75rem';
        default:
            return '1.25rem';
    }
}};
  margin: ${(props) => (props.margin ? props.margin : '25px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
`
export default FORM;

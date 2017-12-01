import styled from 'styled-components';

import { bgimg } from '../../utils/styles';

const BaseDiv = styled.div`
    ${ bgimg((props) => props['background-image'] ? props['background-image'] : '') };
    margin: 0 auto;
`;

export const Column = styled(BaseDiv)`
    max-width: 1200px;
    padding: 2px;
`;

export const Content = styled(BaseDiv)`
    max-width: 650px;
`;

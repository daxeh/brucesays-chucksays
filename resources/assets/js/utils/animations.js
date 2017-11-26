import { keyframes } from 'styled-components';

/**
 * Ex. animation: ${spin} 120s linear infinite;
 */
export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

/**
 * Ex. &:hover { animation: ${fadeIn} 2s linear; }
 */
export const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

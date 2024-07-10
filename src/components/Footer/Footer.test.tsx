import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import Footer from './Footer';

const setup = () => {
  const renderResult = render(<Footer />);
  const footerElement = renderResult.getByTestId('footer');

  return {
    footerElement,
    ...renderResult,
  };
};

describe('Header', () => {
  test('should render Header', async () => {
    const { footerElement, container } = setup();

    expect(footerElement).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({
      height: '114px',
    });
    expect(container.firstChild).toHaveStyle({
      width: '100%',
    });
  });
});

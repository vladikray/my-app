import { render, screen } from '@testing-library/react';
import BasicExample from "./BasicExample";

test('rendersk', () => {
    render(<BasicExample />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
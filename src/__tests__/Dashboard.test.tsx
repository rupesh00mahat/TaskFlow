import Dashboard from "../pages/Dashboard"
import {render, screen} from "@testing-library/react";

test('renders Dashboard with correct number of cards', () => {
    render(<Dashboard/>);

    const cards = screen.getAllByTestId('dashboard-card');
    expect(cards.length).toBe(3);
})
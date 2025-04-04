import { fireEvent, render, screen } from "@testing-library/react"
import MainLayout from "../layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";

test("Renders Sidebar and toggles visibility", () => {
    render(<BrowserRouter><MainLayout/></BrowserRouter>);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", {name: /toggle sidebar/i});
    fireEvent.click(toggleButton);
    expect(sidebar).toBeVisible();
})

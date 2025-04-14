import { render, screen } from "@testing-library/react";
import TaskCard from "../components/TaskCard";
import userEvent from "@testing-library/user-event";

describe('test taskCard Component', () => {
    const renderTaskCard = () => {
        render(<TaskCard status="todo" title="First Title" description="First Description" dueDate="2025-02-15" id={"1"} />);
    }
    it('ensures it renders title, description, status', () => {
        renderTaskCard();
        expect(screen.getByTestId('taskcard-title')).toHaveTextContent('First Title');
        expect(screen.getByTestId('taskcard-description')).toHaveTextContent('First Description');
        expect(screen.getByTestId('taskcard-status')).toHaveTextContent('todo');

    });
    it('check that hover style', async () => {
        renderTaskCard();
        const taskCard = screen.getByTestId('task-card');
        await userEvent.hover(taskCard);
        expect(taskCard).toHaveStyle({ backgroundColor: expect.stringContaining('#eeeeee'), transform: 'scale(1.02)' })
    })
});
import { fireEvent, render, screen } from '@testing-library/react';
import CreateProjectDialog from '../components/CreateProjectDialog';
import MiniContextProvider, { MiniContext } from '../context/MiniContext';
import { useContext } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from '../pages/ProjectDetail';
import Projects from '../pages/Projects';
import ProjectCard from '../components/ProjectCard';

describe('Project Card render Test', () => {
  it('Renders Correctly', () => {
    render(<Projects />);
    const projectCardList = screen.getAllByTestId('project-card');
    expect(projectCardList.length).toBe(5);
  });
  it('Project Card renders with props', () => {
    render(<ProjectCard id="1" title="Task 1" createdAt="2024-10-12" status="completed" />);
    const headingText = screen.getByText('Task 1');
    expect(headingText).toBeInTheDocument();
  });
});

describe('Create Project Dialog renders properly', () => {
  it('textfields render correctly in createProjectDialog', () => {
    render(<CreateProjectDialog open={true} handleClose={jest.fn()} setData={jest.fn()} />);
    expect(screen.getByText('Title (required)')).toBeInTheDocument();
    expect(screen.getByText('Description (optional)')).toBeInTheDocument();
  });
  it('fn calls on submit btn click and form fill', () => {
    const mockSetData = jest.fn();
    render(<CreateProjectDialog open={true} handleClose={jest.fn()} setData={mockSetData} />);
    fireEvent.change(screen.getByRole('textbox', { name: /title/i }), {
      target: { value: 'new Task 1' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /description/i }), {
      target: { value: 'Description 1' },
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSetData).toHaveBeenCalledTimes(1);
  });

  it('setData is not called', () => {
    const mockSetData = jest.fn();
    render(<CreateProjectDialog open={true} handleClose={jest.fn()} setData={mockSetData} />);
    fireEvent.click(screen.getByTestId('submit-btn'));
    expect(mockSetData).not.toHaveBeenCalled();
  });
});

const ConsumerComponent = () => {
  const { state } = useContext(MiniContext);
  return <div data-testid="project-count">{state.projects.length}</div>;
};

describe('Check if new project adds to context', () => {
  it('new project add to context', () => {
    const mockSetData = jest.fn();
    render(
      <MiniContextProvider>
        <>
          <CreateProjectDialog open={true} handleClose={jest.fn()} setData={mockSetData} />
          <ConsumerComponent />
        </>
      </MiniContextProvider>,
    );
    const projectCountBefore = screen.getByTestId('project-count');
    expect(projectCountBefore).toHaveTextContent('0');
    fireEvent.change(screen.getByRole('textbox', { name: /title/i }), {
      target: { value: 'New Task' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /description/i }), {
      target: { value: 'Description 1' },
    });
    const selectStatusElement = screen.getByTestId('select-status');
    fireEvent.mouseDown(selectStatusElement);
    const option = screen.getByText('Active');
    fireEvent.click(option);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    const projectCount = screen.getByTestId('project-count');

    expect(projectCount).toHaveTextContent('1');
  });
});

describe('renders dynamic page properly', () => {
  it('displays dynamic test based on route', async () => {
    render(
      <MemoryRouter initialEntries={['/projects/3333']}>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText('3333')).toBeInTheDocument();
  });
});

const TaskComponent = () => {
  const { state } = useContext(MiniContext);

  return <div data-testid="task-count">{state.tasks.length}</div>;
};

describe.only('check for taskList rendering', () => {
  it('renders tasklist', () => {
    render(
      <MiniContextProvider>
        <>
          <ProjectDetail />
          <TaskComponent />
        </>
      </MiniContextProvider>,
    );
    const taskCountBefore = screen.getByTestId('task-count');
    expect(taskCountBefore).toHaveTextContent('0');
  });
  it('renders tasklist on create New Task', () => {
    render(
      <MiniContextProvider>
        <>
          <ProjectDetail />
          <TaskComponent />
        </>
      </MiniContextProvider>,
    );
    fireEvent.click(screen.getByRole('button', { name: /i/ }));
    const taskCountAfter = screen.getByTestId('task-count');
    expect(taskCountAfter).toHaveTextContent('1');
  });
});

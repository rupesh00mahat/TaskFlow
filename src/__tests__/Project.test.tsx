import { fireEvent, render, screen } from '@testing-library/react';
import Projects from '../pages/Projects';
import ProjectCard from '../components/ProjectCard';
import CreateProjectDialog from '../components/CreateProjectDialog';

// describe('Project Card render Test', () => {
//   it('Renders Correctly', () => {
//     render(<Projects />); 
//     const projectCardList = screen.getAllByTestId('project-card');
//     expect(projectCardList.length).toBe(5);
//   });
//   it('Project Card renders with props', () => {
//     render(<ProjectCard title="Task 1" />);
//     const headingText = screen.getByText('Task 1');
//     expect(headingText).toBeInTheDocument();
//   });
// });

describe('Create Project Dialog renders properly', () => {
  it('textfields render correctly in createProjectDialog', () => {
    render(<CreateProjectDialog open={true} handleClose={jest.fn()} setData={jest.fn()} />);
    expect(screen.getByText('Title (required)')).toBeInTheDocument();
    expect(screen.getByText('Description (optional)')).toBeInTheDocument();
  });
  it('fn calls on submit btn click and form fill', () => {
    const mockSetData = jest.fn();
    render(<CreateProjectDialog open={true} handleClose={jest.fn()} setData={mockSetData} />);
    fireEvent.change(screen.getByRole('textbox', {name: /title/i}),{
      target:{value: 'new Task 1'}
    })
    fireEvent.change(screen.getByRole('textbox', {name: /description/i}),{
      target: {value: 'Description 1'}
    })
    fireEvent.click(screen.getByRole('button', {name: /submit/i}));

    expect(mockSetData).toHaveBeenCalledTimes(1);
  });

  it('setData is not called', () => {
    const mockSetData = jest.fn();
    render(<CreateProjectDialog open={true} handleClose={jest.fn()} setData={mockSetData} />);
    fireEvent.click(screen.getByTestId('submit-btn'));
    expect(mockSetData).not.toHaveBeenCalled();
  })
});

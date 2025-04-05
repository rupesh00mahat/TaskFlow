import { render, screen } from '@testing-library/react';
import Projects from '../pages/Projects';
import ProjectCard from '../components/ProjectCard';

describe('Project Card render Test', () => {
  it('Renders Correctly', () => {
    render(<Projects />);
    const projectCardList = screen.getAllByTestId('project-card');
    expect(projectCardList.length).toBe(5);
  });
  it('Project Card renders with props', () => {
    render(<ProjectCard title='Task 1'/>);
    const headingText = screen.getByText('Task 1');
    expect(headingText).toBeInTheDocument();
  })
});

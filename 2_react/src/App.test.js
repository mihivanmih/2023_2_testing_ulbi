import { fireEvent, render, screen } from '@testing-library/react'
import App from './App';
import userEvent from '@testing-library/user-event'
describe('TEST APP', () => {
  
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/Hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });
  
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    
  });
  
  test("CLICK EVENT", () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  })
  
  test("INPUT EVENT", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искуственное событие
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // })
    // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  })
})
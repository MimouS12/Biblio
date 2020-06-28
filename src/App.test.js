 import React from 'react';
//import { render } from '@testing-library/react';
//import '@testing-library/jest-dom'
import ReactDOM from 'react-dom';
import App from './App';
  import {
  toBeInTheDocument,
  toHaveClass
  
} from '@testing-library/jest-dom/matchers'

expect.extend({toBeInTheDocument, toHaveClass})   




describe("test app", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div")  
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  }) 

}) 


/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); 
 */

 


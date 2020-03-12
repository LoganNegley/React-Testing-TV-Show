import React from 'react';
import {render} from '@testing-library/react';
import App from '../../App';



test('fetching data is being rendered', () => {
    const mockGetData = jest.fn();
    const {getByText} = render(<App getData = {mockGetData} show={false}/>)
    
    const isLoading = getByText(/fetching data/i)
    expect(isLoading).toBeInTheDocument();
    expect(isLoading).toBeTruthy();
});


// test("renders greeting on Greeting component", async () => {
//   // Arrange
//   const { getByText } = render(<Greeting />);
//   // Act
//   const greeting = getByText(/hello lambdalorians!/i);
//   // Assert
//   expect(greeting).toBeInTheDocument();
// });
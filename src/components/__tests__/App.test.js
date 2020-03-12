import React from 'react';
import {render} from '@testing-library/react';
import App from '../../App';



test('Name of show is rendering', () => {
    const mockGetData = jest.fn();
    const {getByText} = render(<App getData={mockGetData} isFetchingData={false}/>);

    getByText(/Stranger Things/i)


    
});
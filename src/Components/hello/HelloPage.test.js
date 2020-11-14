import {render, screen} from '@testing-library/react';
import HelloPage from './HelloPage';
import logo from '../../logo.svg';
import React from 'react';

test('renders hello page', () => {
    render(<HelloPage logo={logo}/>);

    expect(screen.getByText(/PartyPart. Split your duties./i))
        .toBeInTheDocument();

    expect(screen.getByText(/Разделить расходы/i))
        .toBeInTheDocument();

    expect(screen.getByText(/Как это работает?/i))
        .toBeInTheDocument();

    expect(screen.getByText(/Зачем мне это?/i))
        .toBeInTheDocument();
});

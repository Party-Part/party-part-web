// import {render, screen} from '@testing-library/react';
// import HelloPage from './HelloPage';
// import logo from '../../logo.svg';
// import React from 'react';
//
// test('renders hello page', () => {
//     render(<HelloPage logo={logo}/>);
//
//     expect(screen.getByText(/PartyPart. Split your duties./i))
//         .toBeInTheDocument();
//
//     expect(screen.getByText(/Разделить расходы/i))
//         .toBeInTheDocument();
//
//     expect(screen.getByText(/Как это работает?/i))
//         .toBeInTheDocument();
//
//     expect(screen.getByText(/Зачем мне это?/i))
//         .toBeInTheDocument();
// });

import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import HelloPage from "./HelloPage";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<HelloPage/>, container);
    });
    expect(container.textContent).toBe("PartyPart. Split your duties.");
});
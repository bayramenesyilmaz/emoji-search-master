import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";
import App from "./App"


test("Header rendered", () => {
    render(<Header />);

    const header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
})

test('EmojiResultsRow render ', () => {
    render(<App />);

    const emojiResults = screen.getAllByText(/Click to copy emoji/i)
    expect(emojiResults.length).toEqual(20)

})

test('Emoji filter', () => {
    render(<App/>);

    const input = screen.getByText("100");
    expect(input).toBeInTheDocument("100")
});

test("Emoji Copy render", () => {
    render(<App/>);
    const clicks = screen.getAllByTestId("row")
    expect(clicks[0]).toHaveAttribute('data-clipboard-text');
});
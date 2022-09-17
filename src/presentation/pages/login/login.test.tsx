import React from 'react'
import { render, screen } from '@testing-library/react';
import Login from '.';


describe("Login unit test", () => {
   test("should start with initial state", () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = screen.getByRole('button', { name: /Entrar/}) as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()

   });
});

import React from 'react'
import {render, screen} from '@testing-library/react'
import Login from '.';
describe("Login unit test", () => {
  test("should start with initial state", () => {
    render(<Login />)
    expect(screen.getByTestId('error-wrap').childElementCount).toBe(0)

    const submitButton = screen.getByRole("button", {name: /Entrar/}) as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()

    const emailStatus = screen.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')

    const passwordStatus = screen.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  });
});

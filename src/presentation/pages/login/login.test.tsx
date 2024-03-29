import React from "react";
import { render, screen, RenderResult, cleanup, fireEvent } from "@testing-library/react";
import Login from ".";
import { Validation } from "@/presentation/protocols/validation";

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
};

class ValidationSpy implements Validation {
   errorMessage = '';
   input: object | undefined
   validate(input: object): string {
      this.input = input
     return this.errorMessage
   }
}

const makeSut = (): SutTypes => {
   const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy}/>);

  return {
    sut,
    validationSpy
  };
};

describe("Login unit test", () => {
  afterEach(cleanup);
  test("should start with initial state", () => {
    const { sut } = makeSut();
    const errorWrap = sut.getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = screen.getByRole("button", {
      name: /Entrar/,
    }) as HTMLButtonElement;
    expect(submitButton.disabled).toBeTruthy();

    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe("Campo obrigatório");
    expect(emailStatus.textContent).toBe("🔴");

    const passwordStatus = sut.getByTestId("password-status");
    expect(passwordStatus.title).toBe("Campo obrigatório");
    expect(passwordStatus.textContent).toBe("🔴");
  });

  test("should call validation with correct email", () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByTestId("email");
    fireEvent.input(emailInput, { target: { value: "any_email" } });
    expect(validationSpy.input).toEqual({
      email: "any_email"
    })
  });

  test("should call validation with correct password", () => {
   const { sut, validationSpy } = makeSut();
   const passwordInput = sut.getByTestId("password");
   fireEvent.input(passwordInput, { target: { value: "any_password" } });
   expect(validationSpy.input).toEqual({
     password: "any_password"
   })
 });
});

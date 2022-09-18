import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import Login from ".";

type SutTypes = {
   sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />);

  return {
   sut
  }
};

describe("Login unit test", () => {
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
});

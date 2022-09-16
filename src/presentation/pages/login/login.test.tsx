import React from 'react'
import {render} from '@testing-library/react'
import Login from '.';
describe("Login unit test", () => {
  test("should not render spinner and error by default", () => {
    const {getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  });
});

import * as React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("Button should render", () => {
    const { container } = render(<Button>Testing a Button</Button>);
    expect(container).toHaveTextContent("Tesing a Button");
  });
});

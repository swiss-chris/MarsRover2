import { isValidStart } from "./validators";

test("isValidStart: '3 3 Na'", () => {
  expect(isValidStart("3 3 Na")).toBe(false);
});

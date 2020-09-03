import { formatDate } from "./util_funcs";
describe("formatDate", () => {
  test("returns empty string", () => {
    expect(formatDate()).toBe("");
  });
  test("works for 2018-05-30T15:59:13.341Z", () => {
    expect(formatDate("2018-05-30T15:59:13.341Z")).toBe("2018/05/30, 15:59:13");
  });
  test("Does not mutate input", () => {
    const input = "2018-05-30T15:59:13.341Z";
    expect(formatDate(input)).not.toBe(input);
  });
});

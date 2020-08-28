import { formatTime } from "./util_funcs";
describe("formatTime", () => {
  test("returns empty string", () => {
    expect(formatTime()).toBe("");
  });
  test("works for 2018-05-30T15:59:13.341Z", () => {
    expect(formatTime("2018-05-30T15:59:13.341Z")).toBe("2018/05/30");
  });
});

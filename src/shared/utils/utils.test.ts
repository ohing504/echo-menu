import { getWeekNumber, getWeekNumberOfYear } from "./index";
import { humanFileSize } from "./index";

it("returns file size in human readable", () => {
  expect(humanFileSize(0)).toBe("0 Bytes");
  expect(humanFileSize(0, true)).toBe("0 Bytes");
  expect(humanFileSize(0, false)).toBe("0 Bytes");

  expect(humanFileSize(1000, true)).toBe("1.00 kB");
  expect(humanFileSize(1000, false)).toBe("1000 Bytes");

  expect(humanFileSize(2555, true)).toBe("2.56 kB");
  expect(humanFileSize(2555, false)).toBe("2.50 KiB");

  expect(humanFileSize(12341234, true)).toBe("12.34 MB");
  expect(humanFileSize(12341234, false)).toBe("11.77 MiB");
});

it("returns week number with year", () => {
  expect(getWeekNumber()).toHaveLength(2);
  expect(getWeekNumber(new Date(2017, 7, 26))).toEqual([2017, 34]);
  expect(getWeekNumber(new Date(2017, 7, 27))).toEqual([2017, 35]);
  expect(getWeekNumber(new Date(2018, 7, 18))).toEqual([2018, 33]);
  expect(getWeekNumber(new Date(2018, 7, 19))).toEqual([2018, 34]);
});

it("returns week number of year", () => {
  expect(getWeekNumberOfYear()).toBeGreaterThan(0);
  expect(getWeekNumberOfYear(new Date(2017, 7, 26))).toEqual(34);
  expect(getWeekNumberOfYear(new Date(2017, 7, 27))).toEqual(35);
  expect(getWeekNumberOfYear(new Date(2018, 7, 18))).toEqual(33);
  expect(getWeekNumberOfYear(new Date(2018, 7, 19))).toEqual(34);
});

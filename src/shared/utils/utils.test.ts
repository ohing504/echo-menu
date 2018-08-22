import { humanFileSize } from "./human";

it("renders without crashing", () => {
  expect(humanFileSize(0, true)).toBe("0 Bytes");
  expect(humanFileSize(0, false)).toBe("0 Bytes");

  expect(humanFileSize(1000, true)).toBe("1.00 kB");
  expect(humanFileSize(1000, false)).toBe("1000 Bytes");

  expect(humanFileSize(2555, true)).toBe("2.56 kB");
  expect(humanFileSize(2555, false)).toBe("2.50 KiB");

  expect(humanFileSize(12341234, true)).toBe("12.34 MB");
  expect(humanFileSize(12341234, false)).toBe("11.77 MiB");
});

import { describe, expect, it } from "vitest";
import { validateEmail, validatePassword } from "./validators";
import { validateDate, validateIPV6 } from "./validators";

describe("validateEmail", () => {
  it("should return true for valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it("should return false for invalid email", () => {
    expect(validateEmail("invalid-email")).toBe(false);
  });
});

describe("validatePassword", () => {
  it("should return true for valid password", () => {
    expect(validatePassword("Valid123!")).toBe(true);
  });

  it("should return false for invalid password", () => {
    expect(validatePassword("short")).toBe(false);
  });
});

describe("validateDate", () => {
  it("should return a valid date for a correct date string", () => {
    expect(validateDate("2023-06-15")).toEqual(new Date(2023, 5, 15));
  });

  it("should return null for an invalid date string", () => {
    expect(validateDate("2023-02-30")).toBeNull();
  });
});

describe("validateIPV6", () => {
  it("should return true for a valid IPV6 address", () => {
    expect(validateIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true);
  });

  it("should return false for an invalid IPV6 address", () => {
    expect(validateIPV6("invalid-ipv6")).toBe(false);
  });
});

const { findJobOrder } = require("./findJobOrder");

describe("findJobOrder", () => {
  it("returns single letter string when single job inserted", () => {
    expect(findJobOrder("a => ")).toBe("a");
  });
  it("returns 2 letter string when 2 jobs inserted", () => {
    expect(findJobOrder("a => \nb => ")).toBe("a, b");
  });
  it("returns an error message if job depends on itself", () => {
    expect(findJobOrder("a => \nb => b")).toBe(
      "Error, job cannot depend on itself."
    );
  });
  it("returns correctly ordered string when 3 jobs inserted with one dependency", () => {
    expect(findJobOrder("a => \nb => c\nc => ")).toBe("a, c, b");
  });
  it("returns correctly ordered string when 3 jobs inserted with 2 dependencies", () => {
    expect(findJobOrder("a => b\nb => c\nc => ")).toBe("c, b, a");
  });
  it("returns correctly ordered string for multiple jobs and dependencies 1", () => {
    expect(findJobOrder("a => \nb => c\nc => f\nd => a\ne => b\nf => ")).toBe(
      "a, d, f, c, b, e"
    );
  });
  it("returns correctly ordered string for multiple jobs and dependencies 2", () => {
    expect(findJobOrder("a => b\nb => c\nc => f\nd => a\ne => b\nf => ")).toBe(
      "f, c, b, e, a, d"
    );
  });
  it("returns an error stating that jobs can’t have circular dependencies", () => {
    expect(findJobOrder("a => \nb => c\nc => f\nd => a\ne => \nf => b")).toBe(
      "Error, jobs can’t have circular dependencies."
    );
  });
});

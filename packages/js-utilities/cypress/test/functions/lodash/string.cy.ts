import * as _ from "../../../../src/functions/lodash/string";

describe("escapeRegExp", () => {
  it("should escape special characters in a regular expression pattern", () => {
    expect(_.escapeRegExp("[github](https://github.com/)")).to.equal(
      "\\[github\\]\\(https://github\\.com/\\)"
    );
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(_.escapeRegExp("")).to.equal("");
  });

  it("should return the same string if it does not contain any special characters", () => {
    expect(_.escapeRegExp("hello")).to.equal("hello");
  });

  it("should escape all special characters in a complex pattern", () => {
    expect(_.escapeRegExp("^$.*+?()[\\]{}|")).to.equal(
      "\\^\\$\\.\\*\\+\\?\\(\\)\\[\\\\\\]\\{\\}\\|"
    );
  });

  it("should handle null input", () => {
    expect(_.escapeRegExp(null)).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.escapeRegExp(undefined)).to.equal("");
  });

  it("should handle input with only special characters", () => {
    expect(_.escapeRegExp("^$.*+?()[\\]{}|")).to.equal(
      "\\^\\$\\.\\*\\+\\?\\(\\)\\[\\\\\\]\\{\\}\\|"
    );
  });

  it("should handle input with spaces", () => {
    expect(_.escapeRegExp("hello world")).to.equal("hello world");
  });
});

describe("kebabCase", () => {
  it("should convert space-separated string to kebab case", () => {
    expect(_.kebabCase("Foo Bar")).to.equal("foo-bar");
  });

  it("should convert camel case string to kebab case", () => {
    expect(_.kebabCase("fooBar")).to.equal("foo-bar");
  });

  it("should convert snake case string to kebab case", () => {
    expect(_.kebabCase("__FOO_BAR__")).to.equal("foo-bar");
  });

  it("should return empty string for null input", () => {
    expect(_.kebabCase(null)).to.equal("");
  });

  it("should convert uppercase string to lowercase kebab case", () => {
    expect(_.kebabCase("UPPERCASE")).to.equal("uppercase");
  });

  it("should convert false boolean to kebab case", () => {
    expect(_.kebabCase(false)).to.equal("false");
  });

  it("should return empty string for undefined input", () => {
    expect(_.kebabCase(undefined)).to.equal("");
  });

  it("should convert number to string kebab case", () => {
    expect(_.kebabCase(0)).to.equal("0");
  });

  it("should convert camel case string to kebab case", () => {
    expect(_.kebabCase("camelCase")).to.equal("camel-case");
  });

  it("should return empty string for special characters", () => {
    expect(_.kebabCase("?")).to.equal("");
  });

  it("should convert custom string with special characters to kebab case", () => {
    expect(_.kebabCase("Custom*XML*Parser")).to.equal("custom-xml-parser");
  });

  it("should convert string with capital letters to kebab case", () => {
    expect(_.kebabCase("APIFinder")).to.equal("api-finder");
  });

  it("should convert string with numbers to kebab case", () => {
    expect(_.kebabCase("UserAPI20Endpoint")).to.equal("user-api-20-endpoint");
  });

  it("should convert string with numbers and letters to kebab case", () => {
    expect(_.kebabCase("30fghIJ")).to.equal("30-fgh-ij");
  });
});

describe("capitalize", () => {
  it("should capitalize the first word of the string", () => {
    expect(_.capitalize("hello")).to.equal("Hello");
  });

  it("should capitalize the first word of a multi-word string", () => {
    expect(_.capitalize("va va voom")).to.equal("Va va voom");
  });

  it("should handle empty string input", () => {
    expect(_.capitalize("")).to.equal("");
  });

  it("should handle null input", () => {
    expect(_.capitalize(null)).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.capitalize(undefined)).to.equal("");
  });

  it("should handle string with only whitespace characters", () => {
    const string = "   ";

    expect(_.capitalize(string)).to.equal("");
  });

  it("should handle string with leading and trailing whitespace characters", () => {
    expect(_.capitalize("  hello  ")).to.equal("  hello  ");
  });

  it("should handle string with special characters", () => {
    expect(_.capitalize("#hello")).to.equal("#hello");
  });

  it("should handle string with numbers", () => {
    expect(_.capitalize("123abc")).to.equal("123abc");
  });

  it("should handle string with leading space and special characters", () => {
    expect(_.capitalize(" #hello")).to.equal(" #hello");
  });
});

describe("camelCase", () => {
  it("should format the given string in camel case fashion", () => {
    expect(_.camelCase("hello world")).to.equal("helloWorld");
  });

  it("should format a string with hyphens in camel case fashion", () => {
    expect(_.camelCase("va va-VOOM")).to.equal("vaVaVoom");
  });

  it("should return the same string if already in camel case fashion", () => {
    expect(_.camelCase("helloWorld")).to.equal("helloWorld");
  });

  it("should handle empty string input", () => {
    expect(_.camelCase("")).to.equal("");
  });

  it("should handle null input", () => {
    expect(_.camelCase(null)).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.camelCase(undefined)).to.equal("");
  });

  it("should handle string with only whitespace characters", () => {
    expect(_.camelCase("   ")).to.equal("");
  });

  it("should handle string with leading and trailing whitespace characters", () => {
    expect(_.camelCase("  hello  ")).to.equal("hello");
  });

  it("should handle string with special characters", () => {
    expect(_.camelCase("#hello_world")).to.equal("helloWorld");
  });

  it("should handle string with numbers", () => {
    expect(_.camelCase("123_abc")).to.equal("123Abc");
  });

  it("should handle string with leading space and special characters", () => {
    expect(_.camelCase(" #hello")).to.equal("hello");
  });
});

describe("pascalCase", () => {
  it("should format the given string in pascal case fashion", () => {
    expect(_.pascalCase("hello world")).to.equal("HelloWorld");
  });

  it("should format a string with spaces in pascal case fashion", () => {
    expect(_.pascalCase("va va boom")).to.equal("VaVaBoom");
  });

  it("should handle empty string input", () => {
    expect(_.pascalCase("")).to.equal("");
  });

  it("should handle null input", () => {
    expect(_.pascalCase(null)).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.pascalCase(undefined)).to.equal("");
  });

  it("should handle string with only whitespace characters", () => {
    expect(_.pascalCase("   ")).to.equal("");
  });

  it("should handle string with leading and trailing whitespace characters", () => {
    expect(_.pascalCase("  hello  ")).to.equal("Hello");
  });

  it("should handle string with special characters", () => {
    expect(_.pascalCase("#hello_world")).to.equal("HelloWorld");
  });

  it("should handle string with numbers", () => {
    expect(_.pascalCase("123_abc")).to.equal("123Abc");
  });

  it("should handle string with leading space and special characters", () => {
    expect(_.pascalCase(" #hello")).to.equal("Hello");
  });
});

describe("titleCase", () => {
  it("should format the given string in title case fashion", () => {
    expect(_.titleCase("hello world")).to.equal("Hello World");
  });

  it("should format a string with underscores in title case fashion", () => {
    expect(_.titleCase("va_va_boom")).to.equal("Va Va Boom");
  });

  it("should format a string with hyphens in title case fashion", () => {
    expect(_.titleCase("root-hook")).to.equal("Root Hook");
  });

  it("should format a string with camel case in title case fashion", () => {
    expect(_.titleCase("queryItems")).to.equal("Query Items");
  });

  it("should handle empty string input", () => {
    expect(_.titleCase("")).to.equal("");
  });

  it("should handle null input", () => {
    expect(_.titleCase(null)).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.titleCase(undefined)).to.equal("");
  });

  it("should handle string with only whitespace characters", () => {
    expect(_.titleCase("   ")).to.equal("");
  });

  it("should handle string with leading and trailing whitespace characters", () => {
    expect(_.titleCase("  hello  ")).to.equal("Hello");
  });

  it("should handle string with special characters", () => {
    expect(_.titleCase("#hello_world")).to.equal("Hello World");
  });

  it("should handle string with numbers", () => {
    expect(_.titleCase("123_abc")).to.equal("123 Abc");
  });

  it("should handle string with leading space and special characters", () => {
    expect(_.titleCase(" #hello")).to.equal("Hello");
  });
});

describe("template", () => {
  it("should replace data by name in template strings using default expression", () => {
    expect(_.template("Hello, {{name}}", { name: "ray" })).to.equal("Hello, ray");
  });

  it("should replace data by name in template strings using custom expression", () => {
    expect(_.template("Hello, <name>", { name: "ray" }, /<(.+?)>/g)).to.equal("Hello, ray");
  });

  it("should handle empty string input", () => {
    expect(_.template("", { name: "ray" })).to.equal("");
  });

  it("should handle null input", () => {
    expect(_.template(null, { name: "ray" })).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.template(undefined, { name: "ray" })).to.equal("");
  });

  it("should handle empty data object", () => {
    expect(_.template("Hello, {{name}}", {})).to.equal("Hello, undefined");
  });

  it("should handle data object with values as empty string", () => {
    expect(_.template("Hello, {{name}}", { name: "" })).to.equal("Hello, ");
  });

  it("should handle data object with values as null", () => {
    expect(_.template("Hello, {{name}}", { name: null })).to.equal("Hello, null");
  });

  it("should handle data object with values as undefined", () => {
    expect(_.template("Hello, {{name}}", { name: undefined })).to.equal("Hello, undefined");
  });

  it("should handle data object with non-string values", () => {
    expect(_.template("Age: {{age}}", { age: 30 })).to.equal("Age: 30");
  });

  it("should handle data object with special characters in values", () => {
    expect(_.template("Hello, {{name}}", { name: "#ray" })).to.equal("Hello, #ray");
  });

  it("should handle data object with numbers in values", () => {
    expect(_.template("Age: {{age}}", { age: 30 })).to.equal("Age: 30");
  });

  it("should handle data object with booleans in values", () => {
    expect(_.template("Value: {{value}}", { value: true })).to.equal("Value: true");
  });

  it("should handle data object with arrays in values", () => {
    expect(_.template("Array: {{arr}}", { arr: [1, 2, 3] })).to.equal("Array: 1,2,3");
  });

  it("should handle data object with objects in values", () => {
    expect(_.template("Object: {{obj}}", { obj: { key: "value" } })).to.equal(
      "Object: [object Object]"
    );
  });
});

describe("trim function", () => {
  it("should trim prefix and suffix whitespace characters by default", () => {
    expect(_.trim("  hello ")).to.equal("hello");
  });

  it("should trim specified characters from prefix and suffix", () => {
    expect(_.trim("__hello__", "_")).to.equal("hello");
  });

  it("should trim specified characters from prefix and suffix for a URL path", () => {
    expect(_.trim("/repos/:owner/:repo/", "/")).to.equal("repos/:owner/:repo");
  });

  it("should trim multiple characters from prefix and suffix", () => {
    expect(_.trim("222222__hello__1111111", "12_")).to.equal("hello");
  });

  it("should handle empty string input", () => {
    expect(_.trim("", "_")).to.equal("");
  });

  it("should handle null input", () => {
    expect(_.trim(null, "_")).to.equal("");
  });

  it("should handle undefined input", () => {
    expect(_.trim(undefined, "_")).to.equal("");
  });

  it("should handle empty characters to trim", () => {
    expect(_.trim("hello", "")).to.equal("hello");
  });

  it("should handle whitespace characters to trim", () => {
    expect(_.trim("  hello  ", " ")).to.equal("hello");
  });

  it("should handle special characters to trim", () => {
    expect(_.trim("#hello#", "#")).to.equal("hello");
  });

  it("should handle characters to trim with regex special characters", () => {
    expect(_.trim("###hello###", "#")).to.equal("hello");
  });

  it("should handle characters to trim with regex special characters with escape", () => {
    expect(_.trim("##hello##", "#")).to.equal("hello");
  });

  it("should handle characters to trim with regex special characters at the beginning and end", () => {
    expect(_.trim("##hello##", "##")).to.equal("hello");
  });

  it("should handle characters to trim with regex special characters at the beginning and end with escape", () => {
    expect(_.trim("#hello#", "#")).to.equal("hello");
  });
});

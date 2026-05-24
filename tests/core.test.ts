import { describe, expect, it } from "vitest";
import { createSchematicDocument, createSchematicSheet } from "../src";

describe("openpcb-schematic-core", () => {
  it("exports document helpers", () => {
    const document = createSchematicDocument("schematic-1", "demo");
    const sheet = createSchematicSheet("sheet-1");

    document.sheets.push(sheet);

    expect(document.title).toBe("demo");
    expect(document.sheets[0]?.id).toBe("sheet-1");
  });
});

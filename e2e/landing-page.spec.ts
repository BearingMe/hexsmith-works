import { expect, test } from "@playwright/test";

test.describe("Hexsmith Works landing page", () => {
  test("explains Forge and presents its verification workflow", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(
      "Hexsmith Works | Software Reliability for the AI Era",
    );
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "AI writes the code.",
    );
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Who verifies it?",
    );
    await expect(
      page.getByRole("heading", {
        name: /Not another coding assistant.*A verification layer/,
      }),
    ).toBeVisible();

    for (const step of ["Inspect", "Challenge", "Repair", "Verify"]) {
      await expect(page.getByRole("heading", { name: step, exact: true })).toBeVisible();
    }
  });

  test("exposes canonical metadata and the real contact address", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /^https:\/\/pages\.hexsmith\.tech\/?$/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    await expect(
      page.getByRole("link", { name: "Contact Hexsmith" }),
    ).toHaveAttribute("href", /^mailto:bruno\.gomes@hexsmith\.tech/);
  });

  test("mobile navigation opens and follows section links", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open navigation menu" }).click();
    const menu = page.getByRole("dialog", { name: "Site navigation" });
    await expect(menu).toBeVisible();

    await menu.getByRole("link", { name: "Approach" }).click();
    await expect(page).toHaveURL(/#approach$/);
    await expect(menu).not.toBeVisible();
  });

  test("short mobile viewports can scroll to the menu email CTA", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 320 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open navigation menu" }).click();
    const menu = page.getByRole("dialog", { name: "Site navigation" });
    const emailCta = menu.getByRole("link", { name: "Get in touch" });

    await expect(menu).toBeVisible();
    await expect(emailCta).toHaveAttribute(
      "href",
      /^mailto:bruno\.gomes@hexsmith\.tech/,
    );

    const dimensions = await menu.evaluate((element) => ({
      clientHeight: element.clientHeight,
      overflowY: getComputedStyle(element).overflowY,
      scrollHeight: element.scrollHeight,
    }));
    expect(dimensions.overflowY).toBe("auto");
    expect(dimensions.scrollHeight).toBeGreaterThan(dimensions.clientHeight);

    await emailCta.scrollIntoViewIfNeeded();
    await expect(emailCta).toBeInViewport();
  });
});

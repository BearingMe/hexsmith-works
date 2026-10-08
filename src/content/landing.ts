export const navigation = [
  { label: "Product", href: "#forge" },
  { label: "Approach", href: "#approach" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
] as const;

export const workflow = [
  {
    number: "01",
    name: "Inspect",
    description:
      "Analyze implementation details, dependencies, architecture, and potential failure points.",
  },
  {
    number: "02",
    name: "Challenge",
    description:
      "Use independent reasoning processes to question assumptions and look for counterexamples.",
  },
  {
    number: "03",
    name: "Repair",
    description:
      "Propose focused changes that address identified problems without unnecessary rewriting.",
  },
  {
    number: "04",
    name: "Verify",
    description:
      "Evaluate corrections using tests, static analysis, and other deterministic checks.",
  },
] as const;

export const capabilities = [
  {
    number: "A",
    name: "Code auditing",
    description:
      "Investigate suspicious implementations and identify potential correctness or maintainability risks.",
  },
  {
    number: "B",
    name: "Architectural inspection",
    description:
      "Examine module boundaries, dependencies, responsibilities, and structural inconsistencies.",
  },
  {
    number: "C",
    name: "Adversarial verification",
    description:
      "Challenge proposed fixes through independent analysis and attempts to expose overlooked failure cases.",
  },
  {
    number: "D",
    name: "Evidence-based remediation",
    description:
      "Connect proposed corrections to concrete findings, tests, and reproducible observations.",
  },
  {
    number: "E",
    name: "Test evaluation",
    description:
      "Inspect test quality, identify gaps, and explore stronger ways to verify important behavior.",
  },
  {
    number: "F",
    name: "Explainable findings",
    description:
      "Make technical problems understandable through clear reasoning, relevant context, and actionable evidence.",
  },
] as const;

export const email = "bruno.gomes@hexsmith.tech";

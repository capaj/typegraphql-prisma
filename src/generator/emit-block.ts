export type EmitBlockKind =
  | "enums"
  | "models"
  | "crudResolvers"
  | "crudActionResolvers"
  | "relationResolvers"
  | "inputs"
  | "outputs";

export const ALL_BLOCKS: EmitBlockKind[] = [
  "enums",
  "models",
  "crudResolvers",
  "crudActionResolvers",
  "relationResolvers",
  "inputs",
  "outputs",
];

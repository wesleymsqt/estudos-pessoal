import { z } from "zod";

export function getZodErrorMessages<T>(
  error: z.ZodFormattedError<T>,
): string[] {
  const hasErrorsArray = (value: unknown): value is { _errors: unknown[] } => {
    return (
      typeof value === "object" &&
      value !== null &&
      "_errors" in value &&
      Array.isArray((value as { _errors: unknown[] })._errors)
    );
  };

  return Object.values(error)
    .map((field) => {
      if (Array.isArray(field)) return field;
      if (hasErrorsArray(field)) return field._errors;
      return [];
    })
    .flat()
    .filter(
      (value): value is string => typeof value === "string" && value.length > 0,
    );
}

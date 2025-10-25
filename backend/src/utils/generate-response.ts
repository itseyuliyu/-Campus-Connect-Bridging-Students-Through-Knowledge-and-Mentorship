export function generateResponse<T>({
  error,
  success,
  data,
}: {
  error?: string;
  success: boolean;
  data?: T | null;
}) {
  return {
    error,
    success,
    data,
  };
}

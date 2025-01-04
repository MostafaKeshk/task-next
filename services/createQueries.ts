type SearchParams = Record<
  string,
  string | number | boolean | undefined | null
>;

function createQueries(params: SearchParams): string {
  return (
    Object.entries(params)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
      )
      .join("&")
  );
}
export default createQueries;

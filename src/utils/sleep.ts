// wait for the specified amount of time and then resolve.
export async function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export default async function parallel(...callbacks: (() => Promise<unknown>)[]) {
  return Promise.all(callbacks.map(callback => callback()));
};

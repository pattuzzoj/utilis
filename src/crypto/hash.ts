type Algorithm = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
type HashOutput = "hex" | "base64" | "buffer";

export default async function hash(data: string | ArrayBuffer | DataView, algorithm: Algorithm, output: HashOutput = "buffer"): Promise<string | ArrayBuffer> {
  if (typeof data === "string") {
    data = new TextEncoder().encode(data);
  }

  const hashBuffer = await crypto.subtle.digest(algorithm, data);

  if (output === "base64") {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if(output === "hex") {
    return Array.from(new Uint8Array(hashBuffer))
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
  }
  
  return hashBuffer;
}
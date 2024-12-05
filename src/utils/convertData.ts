function jsonToObject(json: string): object {
  return JSON.parse(json);
}

function base64ToObject(base64: string): object {
  return JSON.parse(atob(base64));
}

function objectToJson(obj: object): string {
  return JSON.stringify(obj);
}

function objectToBase64(obj: object): string {
  return btoa(JSON.stringify(obj));
}
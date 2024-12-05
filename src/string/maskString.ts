export default function maskString(str: string, maskStart: number, maskEnd: number, mask: string = '*') {
  const start = str.slice(0, maskStart);
  const end = str.slice(maskEnd, str.length);
  const maskLength = maskEnd - maskStart;
  const maskString = start + mask.repeat(maskLength) + end;

  return maskString;
}
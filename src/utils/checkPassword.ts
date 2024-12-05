type PasswordStrength = "Very Weak" | "Weak" | "Moderate" | "Strong" | "Very Strong";

interface PasswordReturn {
  entropy: number;
  strength: PasswordStrength;
}

export default function checkPassword(password: string): PasswordReturn {
  password = password.replace(/[\r\n\t]/g, "");

  const characterGroups = {
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    digits: /\d/,
    symbols: /[^a-zA-Z0-9]/,
  };

  let possibleCharacters = 0;
  if (characterGroups.lowercase.test(password)) possibleCharacters += 26;
  if (characterGroups.uppercase.test(password)) possibleCharacters += 26;
  if (characterGroups.digits.test(password)) possibleCharacters += 10;
  if (characterGroups.symbols.test(password)) possibleCharacters += 32;

  const entropy = password.length * Math.log2(possibleCharacters);
  let strength: PasswordStrength = "Very Weak";

  if(entropy <= 32) {
    strength = "Very Weak";
  } else if(entropy <= 48) {
    strength = "Weak";
  } else if(entropy <= 64) {
    strength = "Moderate";
  } else if(entropy <= 80) {
    strength = "Strong";
  } else if(entropy > 80) {
    strength = "Very Strong";
  }

  return { entropy, strength };
}
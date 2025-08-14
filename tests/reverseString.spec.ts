function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

// Example usage
const original = "Playwright";
const reversed = reverseString(original);
console.log(`Original: ${original}`);
console.log(`Reversed: ${reversed}`);

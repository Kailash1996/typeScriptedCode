function reverseString(input: string): string {
  // Step 1: Convert string into array of characters
  const charArray = input.split('');

  // Step 2: Reverse the array
  const reversedArray = charArray.reverse();

  // Step 3: Convert array back to string
  const reversedString = reversedArray.join('');

  // Step 4: Return final reversed string
  return reversedString;
}

// Example usage
const result = reverseString("kailas");
console.log(result); // saliak
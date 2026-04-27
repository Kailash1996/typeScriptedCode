function isPalindrome(input:string):boolean{
    let lowercaseStr = input.toLowerCase()
    const reverseString =  lowercaseStr.split('').reverse().join('')
    return lowercaseStr === reverseString

}
const result = isPalindrome("Kailas")
console.log(result)
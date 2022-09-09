class Formatter {
  //add static methods here

  // capitalize
  static capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    // OR
    // return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // sanitize
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  // titleize
  static titleize(string){
    // Capitalize the first word
    let myString = string.charAt(0).toUpperCase() + string.slice(1);

    // split the words in the capitalized string
    const wordArray = myString.split(" ");

    // Array of words that should not be titleized
    let prepositions = ['the', 'a', 'an', 'but', 'of', 'for', 'and', 'at', 'by', 'from']

    // titleize other words except prepositions
    const words = []
    for (let word of wordArray){
      if (prepositions.includes(word)){
        words.push(word)
      } else {
        words.push(this.capitalize(word));
      }
    }
    // Return the combined the words
    return words.join(" ");
  }
}
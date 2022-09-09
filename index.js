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
    
  }
}
//Example

  export let glassPants = "real underwear"
  console.log(glassPants)

export let passcode = 5148
export let SecurityMax = "Super Dog cop"


//exports that will get "renamed when imported"
  let metalname = "fireGlass"
  let bombSquad = "Kaboom"
  export {metalname,bombSquad}

//export renamed Before hand?

  let sun = "array"
  export {sun as light}
  export {sun}
  
//🧲exporting the same "variable" again

  let greg = "lol"
  export {greg}
  //export {greg}

//Export with Default keyword  
  let frontier = "justice"
  export default frontier




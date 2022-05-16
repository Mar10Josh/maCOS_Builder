console.log("maCOS Builder")
console.log("node.js version")
const args = process.argv.slice(2)
if (args[0] == "--javascript" || args[0] == "-js") {
  if (args[1].endsWith(".js")) {
    
  } else {
   console.log("Wrong format!") 
  }
}

 const messages = [
     "Brayan",
     "Daniel",
     "Ximena",
     "Juan",
     "Alejandro",
     "Diego",

 ]
 const randomMsg = () => {
     const message = messages[Math.floor(Math.random() * messages.length)]
     console.log(message)
 }
 module.exports = {
     randomMsg
 }
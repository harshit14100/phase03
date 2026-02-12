import "./App.css";
import Card from "./components/Card";


function App() {
  // let obj = {
  //   name: "harshit",
  //   age:22
  // }

  // let arr = [1,2,3,4]
  return <><div className="flex justify-around">

  <Card username  = "Harshit"  btntext = "Maxu Playboy" img = "https://images.unsplash.com/photo-1590435026808-ec9a5b6632f9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
  <Card username  = "Dhruv" btntext = "Little Pookie" img = "https://media.istockphoto.com/id/1213326931/photo/pet-hospital.jpg?s=2048x2048&w=is&k=20&c=38ex0saGLzffyHgjtNpSIA-p4NregqYT8Bpy3IuQXoo="/>,
  <Card username  = "Varun" btntext = "Kalla Bhaalu" img = "https://images.unsplash.com/photo-1588167056840-13caf6e4562a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>,
  <Card username  = "Kakshi" btntext = "Panda Badmaas" img = "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>;
  </div>
   </>
  
}

export default App;

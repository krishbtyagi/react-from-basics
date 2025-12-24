import { useState } from "react";

function App() {

  return (
    <div style={{background: "#dfe6e9", height:"100vh", }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div> 
  )
}




const ToggleMessage = () => {
    const [notificationCount, setNotificationCount] = useState(0); 
    // defining a new state variable
    // when the value of state variable changes, the component that uses that state variables re-renders

    return (
        <div>
            <button onClick={() => setNotificationCount(notificationCount + 1)}>
                Inc Count
            </button>
            {notificationCount}
        </div>
    );
};


// const style = {width: 200, backgroundColor: "white", bortderRadius : 10, borderColor : "gray", borderWidth: 1, padding: 20 } 
// function PostComponent({name, subtitle, time, description}) {
//   return <div style={style}> 
//     <div style={{display: "flex"}}>
//       <img src={""} style={{
//         width: 30,
//         height: 30,
//         borderRadius :20 
//       }} />
//       <div style= {{fontSize: 10, marginLeft: 10}}>
//         <b>
//           {name}
//         </b>
//         <div> {subtitle} </div>
//         {(time !== undefined) ? <div>{time}</div> : null}
//       </div>
//     </div>
//     <div style={{fontSize: 12}} >
//       {description}
//     </div>
// </div>
// }

// const Greeting = ({ name }) => {
//   return <h1>Hello, {name}!</h1>
// };

export default App
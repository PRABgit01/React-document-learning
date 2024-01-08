import "../stylingcomponent/App.css";

// function Eventhandler() {
//   alert("you are dumb")
//   console.log("you are noob");
// }

//creating function for multiple button

// function Demobuuton({ message, children }) {
//   return (
//     <>
//       <button onClick={() => alert(message)}>{children}</button>
//     </>
//   );
// }


//modifying the buttons props 

function DynamicButton({smash,children}){
    return(
        <>
        <button onClick={smash}>
            {children}
        </button>
        </>
    )
}



export function IntractiveUi() {
  return (
    <>
      <div className="buttonstyle">
        {/* <button onClick={Eventhandler} className="button">i dont do any thing</button> */}
        {/* <button onClick={()=>alert("you have clicked me ")}> you click me </button> */}
        {/* <Demobuuton message="Uploading!">upload button</Demobuuton> */}
        <DynamicButton smash={()=>alert("this is bob")} > smash me   </DynamicButton>

      </div>
    </>
  );
}

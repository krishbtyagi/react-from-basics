
function App() {

  return (
    <div style={{background: "#dfe6e9", height:"100vh", }}>
      <div><h1>hi, krish</h1></div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent
            name={"krish"}
            subtitle={"20 followers"}
            time={"2m ago"}
            image={""}
            description={"very happy to announce..."}
            />
            <br />
          </div>
          <div>
            <PostComponent
            name={"ankit"}
            subtitle={"promoted"}
            image={""}
            description={"very glad to announce..."}
            />
            <br />
          </div>  
        </div>
      </div>
    </div>
  )
}

const style = {width: 200, backgroundColor: "white", bortderRadius : 10, borderColor : "gray", borderWidth: 1, padding: 20 }

function PostComponent({name, subtitle, time, description}) {
  return <div style={style}> 
    <div style={{display: "flex"}}>
      <img src={""} style={{
        width: 30,
        height: 30,
        borderRadius :20 
      }} />
      <div style= {{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div> {subtitle} </div>
        {(time !== undefined) ? <div>{time}</div> : null}
      </div>
    </div>
    <div style={{fontSize: 12}} >
      {description}
    </div>
</div>
}

export default App

function App() {

  return (
    <div style={{background: "#dfe6e9", height:"100vh", }}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>  
        </div>
      </div>
    </div>
  )
}

const style = {width: 200, backgroundColor: "white", bortderRadius : 10, borderColor : "gray", borderWidth: 1, padding: 20 }

function PostComponent() {
  return <div style={style}> 
    <div style={{display: "flex"}}>
      <img src={""} style={{
        width: 30,
        height: 30,
        borderRadius :20 
      }} />
      <div style= {{fontSize: 10, marginLeft: 10}}>
        <b>
          krish
        </b>
        <div>69 followers</div>
        <div>20m</div>
      </div>
    </div>
    <div style={{fontSize: 12}} >
      I am pleased to announce that...
    </div>
</div>
}

export default App
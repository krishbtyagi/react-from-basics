function App() {

  return <div style={{display: "flex", background: "gray"}}>
    <Card>
      <div style={{color: "green"}}>
        what to post? <br/>
      </div>
    </Card>
    <Card>
      <div>
      hellooo
      </div>
    </Card>
  </div>
}

function Card({children}) {
  return <div style={{background: "white", borderRadius: 10, color: "black", padding: 10, margin :10}}>
    upper topbar
    {children}
    lower footer
  </div>
}

export default App
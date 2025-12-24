const style = {width: 200, backgroundColor: "white", bortderRadius : 10, borderColor : "gray", borderWidth: 1, padding: 20 } 

export function PostComponent({name, subtitle, time, description}) {
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
function Calculator(){
return(
<div>
    <div className = "buttons">
        <div className = "button">
            <button onClick = { () => handleButtonCLick("c")}> </button>
            <button onClick = { () => handleButtonCLick("7")}> </button>
            <button onClick = { () => handleButtonCLick("4")}> </button>
            <button onClick = { () => handleButtonCLick("1")}> </button>
            <button onClick = { () => handleButtonCLick("00")}> </button>
        </div>
        <div className = "button">
            <button onClick = { () => handleButtonCLick("+/-")}> </button>
            <button onClick = { () => handleButtonCLick("8")}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
        </div>
        <div className = "button">
            <button onClick = { () => handleButtonCLick()}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
        </div>

    </div>
</div>
);
}
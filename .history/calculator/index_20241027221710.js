function Calculator(){
return(
<div>
    <div className = "buttons">
        <div className = "button">
            <button onClick = { () => handleButtonCLick("c")}>C </button>
            <button onClick = { () => handleButtonCLick("7")}>7 </button>
            <button onClick = { () => handleButtonCLick("4")}> 4</button>
            <button onClick = { () => handleButtonCLick("1")}>1 </button>
            <button onClick = { () => handleButtonCLick("00")}>00 </button>
        </div>
        <div className = "button">
            <button onClick = { () => handleButtonCLick("+/-")}>+/- </button>
            <button onClick = { () => handleButtonCLick("8")}> </button>
            <button onClick = { () => handleButtonCLick("5")}> </button>
            <button onClick = { () => handleButtonCLick("2")}> </button>
            <button onClick = { () => handleButtonCLick("0")}> </button>
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
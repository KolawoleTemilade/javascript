function Calculator(){
return(
<div>
    <div className = "buttons">
        <div className = "button">
            <button onClick = { () => handleButtonCLick("c")}> </button>
            <button onClick = { () => handleButtonCLick()}> </button>
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
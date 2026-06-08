let display = document.getElementById("display");

function appendValue(value)
{
    if(display.value === "0")
    {
        display.value = value;
    }
    else
    {
        display.value += value;
    }
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
}

function clearDisplay()
{
    display.value = "0";
}
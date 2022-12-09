
function showOrHide()
{
    var check = document.getElementById("hire");
    var disp = document.getElementById("show");
    var value = check.checked ? "block" : "none";
    
    disp.style.display = value;
}

function submission()
{
    alert("Thank you");
}
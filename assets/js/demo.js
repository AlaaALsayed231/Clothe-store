
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

})


function Submit() {


    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var gender = document.getElementsByName("gender");
    var sport = document.getElementsByName("check");
    var country = document.getElementById("select");
    var errorMassage = document.getElementsByClassName("errorMassage");
    var numSport = 0;
    
    if (!/^\D{3,}$/.test(name.value))
        errorMassage[0].style.display = 'block';
    else
        errorMassage[0].style.display = 'none';



    if (password.value.length < 8)
        errorMassage[1].style.display = 'block';
    else
        errorMassage[1].style.display = 'none';

    for (var i = 0; i < sport.length; i++)
        if (sport[i].checked == true) {
            numSport++;
            
        }

    if (numSport < 2)
        errorMassage[2].style.display = 'block';
    else
        errorMassage[2].style.display = 'none';


    if (!/^\S+@\S+\.\S+$/.test(email.value))
        errorMassage[3].style.display = 'block';
    else
        errorMassage[3].style.display = 'none';

        
    if (gender[0].checked == false && gender[1].checked == false)
        errorMassage[4].style.display = 'block';
    else
        errorMassage[4].style.display = 'none';



    if (country.selectedIndex == 0) {
        errorMassage[5].style.display = 'block';
    }
    else
        errorMassage[5].style.display = 'none';



}
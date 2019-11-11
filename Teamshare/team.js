let members = document.getElementsByClassName("member");

/* Inserting member Pics into placeholders and
    adding eventListener to set modalContent */
for (let i = 0; i < members.length; i++) {

    document.getElementsByClassName("imgMember")[i].src = team[i].img;

    members[i].addEventListener("click", function () {
        
        /* Setting modalBox content */
        document.getElementById("personName").textContent = team[i].name;
        document.getElementById("personJob").textContent = team[i].job;
        document.getElementById("personImg").src = team[i].img;

        /* deleting old description */
        document.getElementById("mainInfo").innerHTML = "";

        /* picetogether member description from array */
        for(paragraph of team[i].detail){
            let temp = document.createElement("p");
            temp.innerHTML = paragraph;
            document.getElementById("mainInfo").appendChild(temp);
        }
        
        /* setting display value so it's shown */
        document.getElementById("modalBackground").style.display = "flex";
    })
}

/* Adding eventListener closing modalBox on modalBackground */
document.getElementById("modalBackground").addEventListener("click", function () {
    document.getElementById("modalBackground").style.display = "none";
})

/* Adding eventListener closing modalBox on closingButton */
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("modalBackground").style.display = "none";
})

/* Adding eventListener so actual card don't close itself onClick */
document.getElementById("memberDetail").addEventListener("click", e => e.stopPropagation());
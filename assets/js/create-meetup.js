 let createMeetUp = document.getElementById("create");

 let manageMeetUp = document.getElementById("meetUpList");

 let createMeetUpDiv = document.querySelector(".create-meetup");

 let manageMeetUpDiv = document.querySelector(".manage-meetups");

 const details = ()=>{
if (manageMeetUpDiv.classList.contains("display-none")){
    if (createMeetUpDiv.classList.contains("display-none")){
        createMeetUpDiv.classList.remove("display-none");
    }
}else{
    manageMeetUpDiv.classList.add("display-none");
    if (createMeetUpDiv.classList.contains("display-none")){
        createMeetUpDiv.classList.remove("display-none");
    }
}
}

createMeetUp.addEventListener("click",
 details);

const meetUps = ()=>{
    if (createMeetUpDiv.classList.contains("display-none")){
        if(manageMeetUpDiv.classList.contains("display-none")){
            manageMeetUpDiv.classList.remove("display-none");
        }
    }else{
        createMeetUpDiv.classList.add("display-none");
        if(manageMeetUpDiv.classList.contains("display-none")){
            manageMeetUpDiv.classList.remove("display-none");
        }
    }
}

manageMeetUp.addEventListener("click", meetUps);

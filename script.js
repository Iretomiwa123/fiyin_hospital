function formatDate() {
    const date = new Date();
        
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes; 
        
        const day = date.getDate();
        const year = date.getFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        
                // Add ordinal suffix to day (st, nd, rd, th)
        const suffix = (day) => {
        if (day > 3 && day < 21) return "th"; // Covers 11-20
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
        
    return `${hours}:${minutes} ${ampm}  ${day}${suffix(day)} ${month}, ${year}`;
}
        
            // Set formatted date and time
document.getElementById("current-date").innerText = formatDate();
        

function showModal() {

    document.querySelector("main").style.opacity = "0.6";

    $('#doneModal').modal('show');

    setTimeout(function() {
        window.location.href = "complete_reg.html";
    }, 2000);
}

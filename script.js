// Changing the color of the nav buttons when clicked
const clickNavBar = (reqTabName, removeTabName) => {
    // Get the tab we are clicking on and the tab we need to remove the click from
    const clickTab = document.getElementById(reqTabName); 
    const removeTab = document.getElementById(removeTabName);

    // Now, removing the clicked class from the removeTab and adding it to the clickTab
    if (!clickTab.classList.contains("clicked")) clickTab.classList.add("clicked");
    if (removeTab.classList.contains("clicked")) removeTab.classList.remove("clicked");
}

document.getElementById("projects-tab").onclick = () => clickNavBar("projects-tab", "about-tab");
document.getElementById("about-tab").onclick = () => clickNavBar("about-tab", "projects-tab");
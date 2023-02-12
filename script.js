// Ensuring that the correct tab is highlighted on reload
window.onload = () => {
    if (document.URL.includes("index.html#profile-page")) {
        updateClassList(document.getElementById("about-tab"), document.getElementById("projects-tab"));
    } else if (document.URL.includes("index.html#projects-page")) {
        updateClassList(document.getElementById("projects-tab"), document.getElementById("about-tab"));
    }
}

// Changing the color of the nav buttons when clicked
const updateClassList = (clickTab, removeTab) => {
    if (!clickTab.classList.contains("clicked")) clickTab.classList.add("clicked");
    if (removeTab.classList.contains("clicked")) removeTab.classList.remove("clicked");
}

const clickNavBar = (reqTabName, removeTabName) => {
    // Get the tab we are clicking on and the tab we need to remove the click from
    const clickTab = document.getElementById(reqTabName); 
    const removeTab = document.getElementById(removeTabName);

    // Now, removing the clicked class from the removeTab and adding it to the clickTab
    updateClassList(clickTab, removeTab);
}

document.getElementById("projects-tab").onclick = () => clickNavBar("projects-tab", "about-tab");
document.getElementById("about-tab").onclick = () => clickNavBar("about-tab", "projects-tab");

// Fade in transitions
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.foreach((element) => observer.observe(element));

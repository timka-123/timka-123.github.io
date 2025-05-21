const usernames = ["timka", "t1wk4", "t1mka", "timka123", "timka_123"]
const usernameElement = document.getElementById("username")

usernameElement.addEventListener("click", () => {
    const currentUsername = usernameElement.innerText
    const currentIndex = usernames.indexOf(currentUsername)
    const nextIndex = (currentIndex + 1) % usernames.length
    usernameElement.innerText = usernames[nextIndex]
})

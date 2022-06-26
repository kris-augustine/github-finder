// Create a new instance of the Github class
const github = new Github()

// Create a new instance of the UI class
const ui = new UI()

// Search input
const searchUser = document.querySelector('#search-user')
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value

    if (userText !== '') {
        github.getUser(userText).then((data) => {
            if (data.profile.message === 'Not Found') {
                // Show error alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                // Display Profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    } else {
        // Clear profile
        ui.clearProfile()
    }
})

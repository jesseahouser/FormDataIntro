// let formData = new FormData()

// formData.append("name", "Bartholemew")
// formData.append("email", "barty@aol.com")

// console.log(formData.get("name")) // .get looks at the form data key and returns the value
// console.log(formData.get("email"))

const form1 = document.getElementById('form')

// Build the form data inside the event listener
form1.addEventListener("submit", (event) => { // when the user hits Submit
  event.preventDefault()
  let newFormData = new FormData(form) // grab all of the form data
  // console.log(event.target.email.value)
  
  // console.log(newFormData.get("email"))
  // console.log(newFormData.get("name"))
  // console.log(newFormData.get("bio"))
  // console.log(newFormData.get("favorite_food"))

  let newUser = { // create a new object with all of the form data
    name: newFormData.get("name"), //event.target.name.value also works
    email: newFormData.get("email"),
    bio: newFormData.get("bio"),
    fav_food: newFormData.get("favorite_food"),
  }

  console.log(newUser)
  form1.reset()

})

// let whyForm = new FormData(form)
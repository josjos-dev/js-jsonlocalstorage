// User Form buttons
let btnOpenModal = document.getElementById("btnOpenModal")
let btnCloseForm = document.getElementById("btnCloseForm")
let btnNextStep = document.getElementById("btnNextStep")
let btnSaveUser = document.getElementById("btnSaveUser")

// User Form
let userModal = new bootstrap.Modal(document.getElementById('userModal'), {})
let userForm = document.getElementById("userForm")
let formStep1 = document.getElementById("formStep1")
let formStep2 = document.getElementById("formStep2")
let userTableBody = document.getElementById("userTableBody")
let currentOperation = document.getElementById("currentOperation").value  

// Functions

function toggleStepForm() {  
    if (formStep1.hidden) {
      formStep1.toggleAttribute("hidden")
      formStep2.toggleAttribute("hidden")
      btnSaveUser.toggleAttribute("hidden")
      btnNextStep.innerHTML = "Next"
    } else {
      formStep1.toggleAttribute("hidden")
      formStep2.toggleAttribute("hidden")
      btnSaveUser.toggleAttribute("hidden")
      btnNextStep.innerHTML = "Previous"
    }
}

function getUserFromForm() {
  // User fields
  let userFullName = document.getElementById("fullName").value
  let userPhoneNumber = document.getElementById("phoneNumber").value
  let userAddress = document.getElementById("address").value
  let userName = document.getElementById("userName").value
  let userRole = document.getElementById("userRole").value
  let userId = document.getElementById("userId").value    
  
  return new User(userId, userFullName, userPhoneNumber, userAddress, userName, userRole, new Date(), "photo")
}

function validateUserFields(userFormToValidate) {  
  let invalidFields = new Array()
  if (userFormToValidate.fullName == '' || userFormToValidate.fullName == null) {
    invalidFields.push("Full Name")
  }

  if (userFormToValidate.phoneNumber == '' || userFormToValidate.phoneNumber == null) {
    invalidFields.push("Phone Number")
  }

  if (userFormToValidate.address == '' || userFormToValidate.address == null) {
    invalidFields.push("Address")
  }

  if (userFormToValidate.userName == '' || userFormToValidate.userName == null) {
    invalidFields.push("Username")
  }

  if (userFormToValidate.userRole == '' || userFormToValidate.userRole == null) {
    invalidFields.push("Role")
  }

  return invalidFields
}

function listUsers() {
  let users = new User().getAllUsers()
  let userTableBodyToList = ''
  let counter = 0
  if (users != null && users.length > 0) {
    userTableBody.innerHTML = ''
    users.map(user => {
      counter ++
      userTableBodyToList += `<tr>
      <th scope="row">${counter}</th>              
      <td><img src="http://lorempixel.com/30/30/" class="img-fluid rounded-circle" alt="..."></td>
      <td>${user.fullName == null ? 'fullName' : user.fullName}</td>
      <td>${user.registerDate == null ? 'registerDate' : user.registerDate} </td>              
      <td>
        <div class="dropdown">
          <button class="btn btn-sm btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">                    
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>          
              <a class="dropdown-item d-flex justify-content-between" onClick="watchUser('${user.id}')">
                <span>Watch</span><i class="bi bi-eye text-dark"></i>
              </a>                                  
            </li>
            <li>
              <a class="dropdown-item d-flex justify-content-between" onClick="deleteUser('${user.id}')">
                <span>Delete</span><i class="bi bi-trash-fill"></i>
              </a>                        
            </li>
          </ul>
        </div>
      </td>
    </tr>`
    })
    userTableBody.innerHTML = userTableBodyToList
  }
}

function watchUser(id) {
  let userToWatch = new User()
  if (userToWatch == null) { 
    alert("The user with the id, does not exist")
  } else {
    userToWatch = userToWatch.getUserById(id)
    document.getElementById("fullName").value = userToWatch.fullName
    document.getElementById("phoneNumber").value = userToWatch.phoneNumber
    document.getElementById("address").value = userToWatch.address
    document.getElementById("userName").value = userToWatch.userName
    document.getElementById("userRole").value = userToWatch.userRole
    document.getElementById("userId").value  = userToWatch.id
    document.getElementById("currentOperation").value = 'watching'
    userModal.show()
  }
}

function deleteUser(id) {
  let userToDelete = new User()  
  userToDelete.deleteUser(id)
  listUsers()
}

function cleanUserForm() {
  toggleStepForm()
  userForm.reset()
}

btnCloseForm.addEventListener("click", function(e) {  
  userModal.hide()
})

btnOpenModal.addEventListener("click", function(e) {
  userModal.show()
})

btnNextStep.addEventListener("click", function(e) {
  toggleStepForm();
})

btnSaveUser.addEventListener("click", function(e) { 
  let userToSave = getUserFromForm()
  let invalidFields = validateUserFields(userToSave)
  let invalidMessage = ''
  if (invalidFields.length > 0) {    
    invalidMessage += "Please check the next input user fields...\n"
    invalidFields.map(invalidField => invalidMessage += `\n * ${invalidField}`) 
    alert(invalidMessage)   
  } else {    
    if (currentOperation == 'watching') {
      let userToUpdate = new User()
      if (userToUpdate.updateUser(userToSave)) {
        userModal.hide()
        cleanUserForm()    
        listUsers()
        console.log("User updated successfully...")
      } else {
        alert("There was an error... :( try it later...")
      }
    } else {
      let newUser = new User(
        userToSave.id,
        userToSave.fullName,
        userToSave.phoneNumber,
        userToSave.address,
        userToSave.userName,
        userToSave.userRole,
        userToSave.registerDate,
        userToSave.photo)

      if(newUser.saveUser()) {
        userModal.hide()
        cleanUserForm()    
        listUsers()
        console.log("User saved successfully...")
      } else {
        alert("There was an error... :( try it later...")
      }
    }  
  }  
})

listUsers()
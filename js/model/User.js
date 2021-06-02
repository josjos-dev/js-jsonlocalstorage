class User {
    constructor(id, fullName, phoneNumber, address, userName, userRole, registerDate, photo) {
        this.id = id;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber
        this.address = address
        this.userName = userName
        this.userRole = userRole
        this.registerDate = registerDate
        this.photo = photo
    }

    saveUser() {
        let storedUsers = sessionStorage.getItem('admin.temporal.users')
        this.id = this.generateUserId()
        if (storedUsers != '' && storedUsers != null) {
          let jsonStoredUsers = JSON.parse(storedUsers)
          jsonStoredUsers.push(this)
          sessionStorage.setItem('admin.temporal.users', JSON.stringify(jsonStoredUsers))
        } else {
          sessionStorage.setItem('admin.temporal.users', '[' + JSON.stringify(this) + ']')
        }
        
        return true;
    }

    updateUser(userToUpdate) {
      let storedUsers = sessionStorage.getItem('admin.temporal.users')
      this.id = this.generateUserId()
      if (storedUsers != '' && storedUsers != null) {
        let jsonStoredUsers = JSON.parse(storedUsers)
        let newUsersToStore = jsonStoredUsers.map(storedUser => userToUpdate.id == storedUser.id ? userToUpdate : storedUser)
        sessionStorage.setItem('admin.temporal.users', JSON.stringify(newUsersToStore))
      }
      
      return true;
  }

    deleteUser(id) {
      if (id == '' || id == null) {
        return false
      } else {
        let storedUsers = JSON.parse(sessionStorage.getItem('admin.temporal.users'))
        let newStoredUsers = storedUsers.filter(storedUser => storedUser.id != id)
        sessionStorage.setItem('admin.temporal.users', JSON.stringify(newStoredUsers))
        return true;
      }
    }

    getAllUsers() {
        return JSON.parse(sessionStorage.getItem('admin.temporal.users'))
    }

    getUserById(id) {
      let userFound = null
      if (id == '' || id == null) {
        return null
      } else {
        let storedUsers = JSON.parse(sessionStorage.getItem('admin.temporal.users'))        
        userFound = storedUsers.filter(storedUser => storedUser.id == id)[0]
        return userFound;
      }
    }

    generateUserId() {
     return "_" + Math.random().toString(20).substr(4,19) 
    }
}
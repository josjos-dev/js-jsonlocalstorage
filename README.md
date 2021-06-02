1. Creamos el archivo index.html con la estructura html base
2. Luego accedemos a bootstrap https://getbootstrap.com/docs/5.0/getting-started/introduction/
3. Copiamos la sección Starter Template dentro del archivo index.html, además añadimos los links de javascript (jquery)
4. Empezar a maquetar la sección nav de la pagina.
5. Añadir el link de iconos de bootstrap <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
6. Se empieza a maquetar la tabla de facturas y se añade un registro de prueba
    ```html
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>              
                <th></th>
                <th scope="col">Full name</th>
                <th scope="col">Register date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>              
                <td><img src="http://lorempixel.com/30/30/" class="img-fluid rounded-circle" alt="..."></td>
                <td>Mark</td>
                <td>29-05-2021 12:46:01</td>              
                <td></td>
            </tr>
        </tbody>
    </table>
    ```
7. Añadimos los botones de acciones al registro y organizamos la imagen del usuario
```html
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>              
            <th></th>
            <th scope="col">Full name</th>
            <th scope="col">Register date</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>              
            <td><img src="http://lorempixel.com/30/30/" class="img-fluid rounded-circle" alt="..."></td>
            <td>Mark</td>
            <td>29-05-2021 12:46:01</td>              
            <td>
            <div class="dropdown">
                <button class="btn btn-sm btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">                    
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>          
                    <a class="dropdown-item d-flex justify-content-between" href="#">
                    <span>Watch</span><i class="bi bi-eye text-dark"></i>
                    </a>                                  
                </li>
                <li>
                    <a class="dropdown-item d-flex justify-content-between" href="#">
                    <span>Delete</span><i class="bi bi-trash-fill"></i>
                    </a>                        
                </li>
                </ul>
            </div>
            </td>
        </tr>
        </tbody>
    </table>
```
8. Añadimos modal del formulario para poder crear una nueva venta, para eso revisamos la documentación de bootstrap https://getbootstrap.com/docs/4.0/components/modal/
```html
<div class="modal fade" id="UsersModal" tabindex="-1" role="dialog" aria-labelledby="UsersModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="UsersModalLongTitle">User Form</h5>            
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="btnSaveUser">Next</button>
            <button type="button" class="btn btn-primary" id="btnSaveUser">Save</button>
          </div>
        </div>
      </div>
    </div>
```
9. Validar los links de javascript que necesita bootstrap para hacer uso de modal
10. Se maqueta el formulario de ventas dentro del modal
```html
<div class="container">
    <div class="row">
    <form>
        <div class="container" id="step-form-1" hidden>
        <div class="form-group">
            <label for="exampleInputEmail1">Full name</label>
            <input type="text" class="form-control" id="idNumber" aria-describedby="userName" placeholder="Example: Mark Sol">
            <small id="emailHelp" class="form-text text-muted">Type the user name.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Phone Number</label>
            <input type="text" class="form-control" id="idNumber" aria-describedby="phoneNumber" placeholder="Example: 992 546 023">
            <small id="emailHelp" class="form-text text-muted">Type  the user phone Number.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input type="text" class="form-control" id="idNumber" aria-describedby="address" placeholder="Example: Av. Green Linux">
            <small id="emailHelp" class="form-text text-muted">Type  the user address.</small>
        </div>
        </div>   
        <div class="container" id="step-form-2">
        <div class="form-group">
            <label for="exampleInputEmail1">User name</label>
            <input type="text" class="form-control" id="idNumber" aria-describedby="userName" placeholder="Example: msol">
            <small id="emailHelp" class="form-text text-muted">Type the user name.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Role</label>
            <select class="form-select" aria-label=".form-select-sm example">
            <option selected>Select the Role</option>
            <option value="1">Basic</option>
            <option value="2">Medium</option>
            <option value="3">Master</option>
            </select>                      
        </div>
        </div>                
    </form>
    </div>
</div>
```
11. Creamos el archivo app.js
12. Mapeamos los botones del formulario
```javascript
    let btnNextStep = document.getElementById("btnNextStep")
    let btnSaveUser = document.getElementById("btnSaveUser")
```
13. Mapeamos los contenedores de pasos del formulario
```javascript
    let formStep1 = document.getElementById("formStep1")
    let formStep2 = document.getElementById("formStep2")
```
14. Mapeamos los inputs del formulario
```javascript
    let userFullName = document.getElementById("fullName")
    let userPhoneNumber = document.getElementById("phoneNumber")
    let userAddress = document.getElementById("address")
    let userName = document.getElementById("userName")
    let userRole = document.getElementById("userRole")
```
15. Se crea la función para realizar el cambio entre pasos del formulario
```javascript
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
```
16. Se asigna la función al botón btnNextStep
```javascript
btnNextStep.addEventListener("click", function(e) {
  toggleStepForm();
})
```
17. Se crea la clase de usuario y el constructor
```javascript
class User {
    constructor(fullName, phoneNumber, address, userName, userRole, registerDate, photo) {
        this.fullName = fullName
        this.phoneNumber = phoneNumber
        this.address = address
        this.userName = userName
        this.userRole = userRole
        this.registerDate = registerDate
        this.photo = photo
    }
}
```
18. Se agrega el metodo para crear un nuevo usuario y se hace uso del sessionStorage
```javascript
saveUser() {
        sessionStorage.setItem('admin.temporal,users', JSON.stringify(this))
        return true;
}
```
19. Se asigna la función de crear usuario al btnSaveUser
```javascript
btnSaveUser.addEventListener("click", function(e) {
  let user = new User(userFullName, userPhoneNumber, userAddress, userName, userRole, new Date(), "photo")
  if(user.saveUser()) {
    console.log("User saved successfully...")
  }
})
```
20. El alamacenar a los usuarios de esta forma solo nos permite guardar uno a la vez, entonces se tiene que cambiar la estructura para que tenga forma de un array de objetos Json,
¿cómo se hace esto? agregando corchetes al rededor de lo que guardaremos en el sessionStorage
```javascript
saveUser() {
        let storedUsers = sessionStorage.getItem('admin.temporal,users')
        if (storedUsers != '' && storedUsers != null) {
          let jsonStoredUsers = JSON.parse(storedUsers)
          jsonStoredUsers.push(this)
          sessionStorage.setItem('admin.temporal,users', JSON.stringify(jsonStoredUsers))
        } else {
          sessionStorage.setItem('admin.temporal,users', '[' + JSON.stringify(this) + ']')
        }
        
        return true;
    }
```
21. Se crea la función listar usuarios
```javascript
getAllUsers() {
        return JSON.parse(sessionStorage.getItem('admin.temporal,users'))
    }
```
22. 
1. Creamos el archivo index.html con la estructura html base
2. Luego accedemos a bootstrap https://getbootstrap.com/docs/5.0/getting-started/introduction/
3. Copiamos la sección Starter Template dentro del archivo index.html
4. Empezar a maquetar la sección nav de la paginade.
5. Añadir el link de iconos de bootstrap <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
6. Se empieza a maquetar la tabla de facturas y se añade un registro de prueba
    ```html
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Factura</th>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha</th>
            <th scope="col">Total</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>FE00000043</td>
            <td><img src="http://lorempixel.com/30/30/" class="img-fluid rounded-circle" alt="..."> Mark</td>
            <td>29-05-2021 12:46:01</td>
            <td>S/. 200.00</td>
        </tr>
        </tbody>
    </table>
    ```
7. Añadimos los botones de acciones al registro y organizamos la imagen del cliente
```html
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Invoice</th>
            <th></th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Total</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>FE00000043</td>
            <td><img src="http://lorempixel.com/30/30/" class="img-fluid rounded-circle" alt="..."></td>
            <td>Mark</td>
            <td>29-05-2021 12:46:01</td>
            <td>S/. 200.99</td>
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

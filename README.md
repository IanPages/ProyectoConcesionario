# ProyectoConcesionario
Para comenzar, clonaremos todo el repositorio en nuestro dispositivo local para trabajar con lo creado.

 ## Preparación del docker de la base de datos.
 
 Para ello primero tendremos que coger la última imagen de mysql:  
 --dockermysqlimg--
 
Después crearemos el contenedor de mysql con la sintaxis en cmd:  

  `docker run --name mysqlbase -e MYSQL_ROOT_PASSWORD=1234 -p 3306:3306 -d mysql:latest`

Y descargaremos esta base de datos que ya contiene algunos datos para que se pueda ver. (Posteriormente explicaré como insertar datos,...)
link al drive con el .sql
Después nos situaremos en el directorio donde tenemos el .sql y abriremos el cmd sobre el directorio:    
 
  `docker cp concesionario.sql mysqlbase:/concesionario.sql`  
  
Nos metemos en el contenedor del mysql para importar la base de datos.    

 `docker exec -it mysqlbase mysql -u root -p`   
 (En la password escribiremos 1234)  

 ```CREATE DATABASE concesionario;
 USE concesionario;
 source /concesionario.sql;
 exit;
```

## Arrancar tanto el frontend como el backend


# Backend
_(Puerto 4000)_

Para ello abriremos la terminal del framework que queramos, usaré el visual studio y sobre la carpeta del backend escribiremos en la terminal:  

`npm run dev`
  
--imgdearrancadobackend


# Frontend
_(Puerto 4200)_
Haremos lo mismo que el caso anterior, abriremos la terminal y e inicializaremos el servicio:  

`ng serve -o`
  
--imgdearrancadofrontend


## Manipulación de datos (Creación de coches, modificación, eliminación, Creación y eliminado de marcas y categorias, Login/Register Usuarios)

Para ello podremos usar el PostMan para realizar el envío de peticiones a nuestro backend & base de datos.
* Si hay duda sobre ello, consultar "routes" que es donde estan desarrolladas todas las funciones.

# Visualización marca y categoria

Para ver todas las marcas ejecutaremos un GET a /marcas para ver todas las marcas que tengamos creadas:

--imgvisualizacionmarca

También la puedes hacer de una marca específica dandole el /"id":

--imgvisualizacionmarcadetallada.

Lo mismo podremos hacer con categoria.

--imgvisualizacioncategoria

--imgvisualizacioncategoriadetallada

# Creación marca y categoria
Para la creación enviaremos un POST a /marcas con las columas designadas en la base de datos:

--imgcreacionmarca

Y para la categoría haremos lo mismo que hicimos con la marca:

--imgcreacioncategoria

# Borrado marca y categoria

Para borrar una marca o categoria enviaremos un DELETE con el /id que queramos borrar.
--imgborradocategoria

--imgborradomarca


# Visualización Coche
Para ver todos los coches que tenemos en nuestra base de datos ejecutaremos un GET a /coches para que nos muestre todos los resultados de la base de datos:

--imgvisualizacioncoche

También podemos ver un coche por un /"id" específico que queramos:

--imgvisualizacióndetalladacoche

# Creación Coche
Para la creación de coche ejecutaremos un POST a /coches con todas las columnas desarrolladas en la base de datos, como sale en la imagen de referencia.  

--imgcreacióncoche  

_JSON_
``` {
  "modelo": "Audi A1",
  "a_salida": 2012,
  "precio": "38250.00",
  "precioalquiler": "46.0",
  "tipo_combustible": "Diesel",
  "kilometraje": 2500,
  "imagen": "audia1sb2018frontview.png",
  "marcaId": 4,
  "categoriaId": 2
}
 ```
 
* No olvidar añadir la imagen descrita en "imagen" sobre la carpeta /src/imagenes


# Modificación Coche
Para la modificación enviaremos un PUT sobre el id del coche /coches/"id" y escribiremos la columna con el resultado que queramos modificar:  

--imgedicióncoche  

_JSON_
``` {
  "kilometraje": 12000
}
```  


# Eliminación Coche
Para el borrado de coche enviaremos un DELETE con el id del coche /coches/"id" y lo enviaremos, como resultado nos debe dar un "204 No Content" indicando que se ha realizado correctamente.  

--imgborradocoche  


# Register User
Para el registro del usuario enviaremos un POST sobre /signup con las columnas desarrolladas:  

--imgcreacionususario  

_JSON_
``` {
  "email": "intento@intento.com",
  "password": "Intento84+"
}
```

En el frontend deberia de salir un resultado tal que así.  

--imgcreacionusuarioenfront


# Login User 
Para el login del usuario enviaremos un POST sobre /login con los datos del usuario creado previamente:  

--imgloginusuario

_JSON_
```{
  "email": "intento@intento.com",
  "password": "Intento84+"
}
```

En el frontend debería de salir un resultado tal que así.  

--imgloginusuarioenfrontend


## Aclaración

No se ha podido hacer un docker sobre el backend debido a problemas relacionados con bcrypt que no han hecho posible la creación del docker como tal para el backend y su funcionamiento.

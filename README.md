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
Para ello abriremos la terminal del framework que queramos, usaré el visual studio y sobre la carpeta del backend escribiremos en la terminal:  

`npm run dev`
  
--imgdearrancadobackend


# Frontend
Haremos lo mismo que el caso anterior, abriremos la terminal y e inicializaremos el servicio:  

`ng serve -o`
  
--imgdearrancadofrontend


## Manipulación de datos (Creación de coches, modificación, eliminación, Login/Register Usuarios)

Para ello podremos usar el PostMan para realizar el envío de peticiones a nuestro backend & base de datos.
* Si hay duda sobre ello, consultar "routes" que es donde estan desarrolladas todas las funciones.


# Creación
Para la creación de coche ejecutaremos un POST a /coches con todas las columnas desarrolladas en la base de datos, como sale en la imagen de referencia.  

--imgcreacióncoche  

++jsonescrito++
``` x ```  
* No olvidar añadir la imagen descrita en "imagen" sobre la carpeta /src/imagenes


# Modificación
Para la modificación enviaremos un PUT sobre el id del coche /coches/"id" y escribiremos la columna con el resultado que queramos modificar:  

--imgedicióncoche  

++jsonescrito++
``` x ```  


# Eliminación
Para el borrado de coche enviaremos un DELETE con el id del coche /coches/"id" y lo enviaremos, como resultado nos debe dar un "204 No Content" indicando que se ha realizado correctamente.  

--imgborradocoche  

++jsonescrito++
``` x ```


# Register User
Para el registro del usuario enviaremos un POST sobre /signup con las columnas desarrolladas:  

--imgcreacionususario  

++jsonescrito++
``` x ```

En el frontend deberia de salir un resultado tal que así.  

--imgcreacionusuarioenfront


# Login User 
Para el login del usuario enviaremos un POST sobre /login con los datos del usuario creado previamente:  

--imgloginusuario  

++jsonescrito++
``` x ```

En el frontend debería de salir un resultado tal que así.  

--imgloginusuarioenfrontend


## Aclaración

No se ha podido hacer un docker sobre el backend debido a problemas relacionados con bcrypt que no han hecho posible la creación del docker como tal para el backend y su funcionamiento.

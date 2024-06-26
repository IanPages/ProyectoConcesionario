# ProyectoConcesionario
Para comenzar, clonaremos todo el repositorio en nuestro dispositivo local para trabajar con lo creado.
# Opción 1 - Backend-DB Dockerizado
## Preparación del Docker

Para ello nos meteremos dentro de la carpeta de backend y abriremos un CMD con el directorio de nuestra carpeta de backend.
Escribiremos lo siguiente para generar un docker para la base de datos y otro para el backend.

`docker-compose up --build`

Después pararemos ambos contenedores y arrancaremos primero la base de datos y después el backend para que realice la conexión sobre ella.


![IMG](imagenesREADME/imgdockerbdybackend.png)

Ahora solo nos quedará por arrancar el frontend:

## Frontend
_(Puerto 4200)_
Haremos lo mismo que el caso anterior, abriremos la terminal y e inicializaremos el servicio:  

`ng serve -o`
  
![IMG](imagenesREADME/imgdearrancadofrontend.png)

 __ATENCION: Si se hace la primera opción, no hacer la segunda, ir directamente a la manipulación de datos__
# Opción 2 - DB Dockerizado Y backend local
 ## Preparación del docker de la base de datos.
 
 Para ello primero tendremos que coger la última imagen de mysql:  
![IMG](imagenesREADME/dockermysqlimg.png)
 
Después crearemos el contenedor de mysql con la sintaxis en cmd:  

  `docker run --name mysqlbase -e MYSQL_ROOT_PASSWORD=1234 -p 3306:3306 -d mysql:latest`

Y descargaremos esta base de datos que ya contiene algunos datos para que se pueda ver. (Posteriormente explicaré como insertar datos,...)

[Descarga de la base de datos .sql](https://drive.google.com/file/d/1ARo3Fijuy7A1u36-jCvtkCfIHG0_6ur6/view?usp=sharing)

Después nos situaremos en el directorio donde tenemos el .sql y abriremos el cmd sobre el directorio:    
 
  `docker cp concesionario.sql mysqlbase:/concesionario.sql`  
  
Nos metemos en el contenedor del mysql para importar la base de datos.    

 `docker exec -it mysqlbase mysql -u root -p`   
 (En la password escribiremos 1234)  

 ```
CREATE DATABASE concesionario;
 USE concesionario;
 source /concesionario.sql;
 exit;
```

# Arrancar tanto el frontend como el backend


## Backend
_(Puerto 4000)_

Para ello abriremos la terminal del framework que queramos, usaré el visual studio y sobre la carpeta del backend escribiremos en la terminal:  

`npm install`

`npm run dev`
  
![IMG](imagenesREADME/imgdearrancadobackend.png)


## Frontend
_(Puerto 4200)_
Haremos lo mismo que el caso anterior, abriremos la terminal y e inicializaremos el servicio:  

`ng serve -o`
  
![IMG](imagenesREADME/imgdearrancadofrontend.png)


# Manipulación de datos (Creación de coches, modificación, eliminación, Creación y eliminado de marcas y categorias, Login/Register Usuarios)

Para ello podremos usar el PostMan para realizar el envío de peticiones a nuestro backend & base de datos.
* Si hay duda sobre ello, consultar "routes" que es donde estan desarrolladas todas las funciones.

## Visualización marca y categoria

Para ver todas las marcas ejecutaremos un GET a /marcas para ver todas las marcas que tengamos creadas:

![IMG](imagenesREADME/visualizacionmarca.png)

También la puedes hacer de una marca específica dandole el /"id":

![IMG](imagenesREADME/visualizacionmarcadetallada.png)

Lo mismo podremos hacer con categoria.

![IMG](imagenesREADME/visualizacioncategoria.png)

![IMG](imagenesREADME/visualizacioncategoriadetallada.png)

## Creación marca y categoria
Para la creación enviaremos un POST a /marcas con las columas designadas en la base de datos:

![IMG](imagenesREADME/imgcreacionmarca.png)

_JSON_
```
{
 "nombre": "Mitsubishi"
}
```

Y para la categoría haremos lo mismo que hicimos con la marca:

![IMG](imagenesREADME/imgcreacioncategoria.png)

_JSON_
```
{
 "nombre": "Categoria"
}
```

## Borrado marca y categoria

Para borrar una marca o categoria enviaremos un DELETE con el /id que queramos borrar.

![IMG](imagenesREADME/imgborradocategoria.png)

![IMG](imagenesREADME/imgborradomarca.png)


## Visualización Coche
Para ver todos los coches que tenemos en nuestra base de datos ejecutaremos un GET a /coches para que nos muestre todos los resultados de la base de datos:

![IMG](imagenesREADME/imgvisualizacioncoche.png)

También podemos ver un coche por un /"id" específico que queramos:

![IMG](imagenesREADME/imgvisualizacioncochedetallada.png)

## Creación Coche
Para la creación de coche ejecutaremos un POST a /coches con todas las columnas desarrolladas en la base de datos, como sale en la imagen de referencia.  

![IMG](imagenesREADME/imgcreacioncoche.png)

_JSON_
```
{
  "modelo": "Audi A1",
  "a_salida": 2012,
  "precio": "38250.00",
  "precioalquiler": "46.0",
  "tipo_combustible": "Diesel",
  "kilometraje": 2500,
  "imagen": "audia1sb2018frontview.jpg",
  "marcaId": 4,
  "categoriaId": 2
}
 ```
 
* No olvidar añadir la imagen descrita en "imagen" sobre la carpeta /src/imagenes, ya que si no, no se verán las fotos de los coches en el front en el apartado coches.


## Modificación Coche
Para la modificación enviaremos un PUT sobre el id del coche /coches/"id" y escribiremos la columna con el resultado que queramos modificar:  

![IMG](imagenesREADME/imgedicioncoche.png) 

_JSON_
```
 {
  "kilometraje": 12000
}
```  


## Eliminación Coche
Para el borrado de coche enviaremos un DELETE con el id del coche /coches/"id" y lo enviaremos, como resultado nos debe dar un "204 No Content" indicando que se ha realizado correctamente.  

![IMG](imagenesREADME/imgborradocoche.png)


## Register User
Para el registro del usuario enviaremos un POST sobre /signup con las columnas desarrolladas:  

![IMG](imagenesREADME/imgcreacionusuario.png)

_JSON_
```
{
  "email": "intento@intento.com",
  "password": "Intento84+"
}
```

En el frontend deberia de salir un resultado tal que así.  

![IMG](imagenesREADME/imgcreacionusuarioenfront.png)


## Login User 
Para el login del usuario enviaremos un POST sobre /login con los datos del usuario creado previamente:  

![IMG](imagenesREADME/imgloginusuario.png)

_JSON_
```
{
  "email": "intento@intento.com",
  "password": "Intento84+"
}
```

En el frontend debería de salir un resultado tal que así.  

![IMG](imagenesREADME/imgloginusuarioenfrontend.png)




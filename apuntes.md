En este apartado voy a estar dejando mis apuntes de lo que voy aprendiendo y leyendo sobre los temas necesarios para aprender backend.


---Backend--------------------------------------------------------------------------------------------

1- HTTP (protocolo de transferencia de hipertexto)

- Este protocolo define las reglas de transferencia de datos entre el navegador (pagina) y el servidor por medio de peticiones y respuestas llamadas Request/Response.



Este modelo se define cuando un cliente(NAVEGADOR) envía una solicitud con un METODO o ACCION conocidos como:

GET: para leer
POST: para crear
PUT: para actualizar
DELETE: para borrar

El servidor responde con un mensaje que incluye un codigo de estado de la solicitud (200 - ok, 404 - not found) junto con los datos solicitados por la acción o un mensaje de error caso que no se pueda realizar la solicitud

Siempre haciendo referencia a los datos dentro del servidor o base de datos.


API REST

API REST (interfaz de programacion de aplicaciones de transferencia de estado representaciones)
Es un conjunto dee reglas y un estilo arquitectónico para construir servicios web permitiendo asi la comunicación entre sistemas a través de la web utilizando los métodos HTTP mencionados anteriormente para interactuar con los “recursos” (datos) de manera simple, sin estado y escaladle, devolviendo información en formatos como JSON o XML.


JSON

Son las siglas de JavaScript Object Notation, que representan un formato de repsentacion de datos.
Usados muy comun en APIS y configuraciones, tamaño ligero y fácil de leer.

Vamos a poder encontrar datos tales como los de JavaScript:

* Strings
* Numbers
* Boolean
* Null
* Arrays
* Objects

El JSON utiliza para la notación datos pares como 
“Key”: “valor”

¿Cómo funciona en la práctica?

1. Tú haces una solicitud (Petición): Tu aplicación (web, móvil, etc.) envía una petición a la API de un servicio (por ejemplo, para obtener el clima, datos de usuarios, etc.).
2. 
3. La API procesa y responde (Respuesta): El servidor recibe tu petición, busca los datos solicitados y los empaqueta en un objeto JSON.
4. 
5. Tú recibes el JSON: Tu aplicación recibe este JSON y lo "desempaqueta" (parsea) para usar los datos (nombres, números, listas, etc.) en tu código, mostrándolos al usuario o usándolos para otras funciones. 

Ejemplo:
* Tú (App): "¡Hola API de clima! ¿Cuál es la temperatura en Madrid?"
* API (Servidor): { "ciudad": "Madrid", "temperatura": "20°C", "condicion": "Soleado" }
* Tú (App): ¡Genial! Muestro "Madrid: 20°C, Soleado" en la pantalla.


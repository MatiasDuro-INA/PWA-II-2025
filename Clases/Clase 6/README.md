## Consigna B

Siguiendo con el ejercicio realizado la clase pasada, donde se creó un JSON de bicis y un módulo propio donde se lo convierte a otro tipo de dato, ahora realizar las siguientes tareas:

- a. Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de la bicicleta y devuelva la bici que corresponde. En caso de no encontrarla, deberá retornar null. (Utilizar el método filter.)


- b. Crear una funcionalidad de (venderBici) que reciba el (id). En caso de encontrar la bicicleta, debe asignarle el estado de vendida (true) y retornar todos los datos de la bicicleta. En el caso de no encontrar la bicicleta, debe retornar al usuario: “Bicicleta no encontrada”. ( Tip: Se puede aprovechar la función buscarBici.)


- c. Crear la funcionalidad (biciParaLaVenta). Tendrá la responsabilidad de devolver todas aquellas bicicletas que aún no estén vendidas. (Utilizar el método filter)

Crear funcion biciParaLaVenta,
que devuelva si se puede vender o no


- d. Finalmente desarrollar una funcionalidad (totalDeVentas) que retorne la suma del valor de todas las ventas realizadas. (Utilizar la función reduce.)
#__________________________________________________________________________________________
Diccionario de datos

1. id
    a. tipo: number
    b. registro de venta

2. fecha
    a. tipo: string
    b. fecha de la venta

3. cliente
    a. tipo: string
    b. identificación de los clientes

4. producto
    a. tipo: string
    b. descripción del producto vendido

5. ciudad
    a. tipo: string
    b. origen de la compra

6. cantidad
    a. tipo: number
    b. precio unitario del producto

#_______________________________________________________________________________
CASOS BORDE DETECTADOS

1. Ciudades: se encuentra escrito Medellín y medellín
2. Cantidades:En el registro 8, se encuentra cantidad = 0
3. Clientes: Dado que medellín no cuenta con la misma estructura se le asignó a otro cliente, Medellín C01 y medellín C04


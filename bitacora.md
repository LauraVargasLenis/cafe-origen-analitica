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

#________________________________________________________________________________
CICLOS

1. Cuánto se vendió en total?
    a. inicio
        const total = 0

        f


# Bitácora de Análisis - Café Origen v0.1

## 1. Diccionario de datos (Minirreto 1)

| Propiedad | Tipo de dato | Significado |
| :--- | :--- | :--- |
| `id` | | |
| `fecha` | | |
| `cliente` | | |
| `producto` | | |
| `ciudad` | | |
| `cantidad` | | |
| `precio` | | |

---

## 2. Casos borde detectados en los datos (Minirreto 1)

### Hallazgo 1: Diferencias de mayúsculas en el nombre de una ciudad
- **Descripción**: En el registro 5, la ciudad aparece como "medellín", mientras que en los registros 1, 4 y 11 aparece como "Medellín". Una comparación directa podría dejar el registro 5 fuera del total de Medellín
- **¿Cómo se debe tratar en el análisis?**:Aplicar .trim().toLowerCase() tanto a la ciudad buscada como a la ciudad de cada registro. Así, una búsqueda como "  MEDELLÍN  " incluye las cuatro ventas y devuelve $356.000 COP, igual que la suma manual

### Hallazgo 2: Registro con cantidad igual a cero
- **Descripción**: El registro 8, de Cali, tiene cantidad: 0 y precio: 42000. Su subtotal es $0 COP, pero si se cuenta como compra, cambia el ticket promedio
- **¿Cómo se debe tratar en el análisis?**: Conservar el registro en los datos originales y aplicar la condición venta.cantidad > 0 al calcular los indicadores de ventas válidas. Así se cuentan 11 compras válidas y el ticket esperado es $985.000 ÷ 11 = $89.545,45 COP. Tu función ya suma y cuenta esas compras, pero necesita devolver la división después del ciclo

---

## 3. Patrones con ciclos manuales (Minirreto 2)

- **`totalVendido(ventas)`**:
  - *Patrón usado (contador, acumulador, filtro, extremo)*:
- **`totalUnidades(ventas)`**:
  - *Patrón usado*:
- **`ventaMayorValor(ventas)`**:
  - *Patrón usado*:
- **`ventasDeCiudad(ventas, ciudad)`**:
  - *Patrón usado*:
- **`promedioPorVenta(ventas)`**:
  - *Patrón usado*:

---

## 4. Del ciclo al método: Preguntas de transformación y agrupación (Minirreto 3)

- **¿Qué filtro? (`.filter`)**:
- **¿Qué transformo? (`.map`)**:
- **¿Qué reduzco / acumulo? (`.reduce`)**:
- **¿Cómo agrupo en un diccionario?**:
- **¿Cómo ordeno sin modificar el arreglo original? (`.sort`)**:

---

## 5. Verificación del reporte y pureza de funciones (Minirreto 4)

- **¿Cómo comprobaste que el arreglo `ventas` original no fue modificado?**:
- **Comando para ejecutar el reporte**:

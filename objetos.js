const persona =
{
    nombre: "Benjamin",
    balanceTotal: 0,
    porcentualBilletera: 0,
    moneda: "Arg",
    ingresos: {
        movimientos: [
            {
                motivo: 'Sueldo',
                monto: 250000,
                fecha: new Date('06/01/23').toLocaleDateString()
            },
            {
                motivo: 'Aguinaldo',
                monto: 125000,
                fecha: new Date('07/01/23').toLocaleDateString()
            }
        ]

    },
    gastos: {
        movimientos: [
            {
                motivo: 'Supermercado',
                monto: 18450,
                fecha: new Date('06/02/23').toLocaleDateString()
            },
            {
                motivo: 'Tarjeta de credito',
                monto: 32333,
                fecha: new Date('06/05/23').toLocaleDateString()
            },
            {
                motivo: 'Tarjeta de credito',
                monto: 18234,
                fecha: new Date('06/07/23').toLocaleDateString()
            },
            {
                motivo: 'Impuestos',
                monto: 4300,
                fecha: new Date('06/01/23').toLocaleDateString()
            },
            {
                motivo: 'Vehiculo',
                monto: 15300,
                fecha: new Date('06/04/23').toLocaleDateString()
            },
            {
                motivo: 'Extra',
                monto: 1200,
                fecha: new Date('06/04/23').toLocaleDateString()
            },
            {
                motivo: 'Extra',
                monto: 3500,
                fecha: new Date('06/06/23').toLocaleDateString()
            }
        ],
    },
    //  metodos para agregar al gastos/ingresoss
    agregarIngreso(ingreso) {
        this.ingresos.movimientos.push(ingreso);
    },
    agregarGasto(gasto) {
        this.gastos.movimientos.push(gasto);
    },
    //  metodos para mostrar el total de gastos/ingresos
    sumaIngreso() {
        const totalIngresos = this.ingresos.movimientos.reduce((acumulador, ingreso) => acumulador + ingreso.monto, 0)
        return totalIngresos;
    },
    sumaGasto() {
        const totalGastos = this.gastos.movimientos.reduce((acumulador, gasto) => acumulador + gasto.monto, 0)
        return totalGastos;

    },

}
import React, { useState } from 'react';

const Operaciones = () => {
  const [result, setResult] = useState('');
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [viewData, setViewData] = useState([]);

  const handleCallProcedure = async () => {
    try {
      const response = await fetch('/api/call_procedure', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
      } else {
        console.error('Error al llamar al procedimiento almacenado');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleTransaction = async () => {
    try {
      const response = await fetch('/api/transaction_1', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
        setCustomers(data.customers);
        setProducts(data.products);
      } else {
        console.error('Error al ejecutar la transacción');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/search_products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        console.error('Error al buscar productos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleViewData = async () => {
    try {
      const response = await fetch('/api/view_data');
      if (response.ok) {
        const data = await response.json();
        setViewData(data.viewData);
      } else {
        console.error('Error al consultar la vista');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleTransaction2 = async () => {
    try {
      const response = await fetch('/api/transaction_2', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
        setCustomers(data.customers);
      } else {
        console.error('Error al ejecutar la transacción 2');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div>
      {/* <button
        onClick={handleCallProcedure}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Llamar al procedimiento almacenado
      </button> */}
      <div className="mt-4">
        Resultado del procedimiento almacenado: <span>{result}</span>
      </div>
      <button
        onClick={handleTransaction}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Ejecutar transacción (Agregar laptop)
      </button>
      <div className="mt-4">
        Resultado de la transacción: <span>{result}</span>
      </div>
      {/* <button
        onClick={handleSearch}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar productos
      </button> */}
      {products.length > 0 && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td className="border px-4 py-2">{product.product_id}</td>
                <td className="border px-4 py-2">{product.product_name}</td>
                <td className="border px-4 py-2">{product.product_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <button
        onClick={handleViewData}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Consultar vista de productos
      </button> */}
      {viewData.length > 0 && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">RFC</th>
              <th className="px-4 py-2">Calle</th>
              <th className="px-4 py-2">Número de calle</th>
              <th className="px-4 py-2">Ciudad</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Código postal</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {viewData.map((data) => (
              <tr key={data.product_id}>
                <td className="border px-4 py-2">{data.product_id}</td>
                <td className="border px-4 py-2">{data.product_name}</td>
                <td className="border px-4 py-2">{data.product_description}</td>
                <td className="border px-4 py-2">{data.rfc_customer}</td>
                <td className="border px-4 py-2">{data.street}</td>
                <td className="border px-4 py-2">{data.number_street}</td>
                <td className="border px-4 py-2">{data.city}</td>
                <td className="border px-4 py-2">{data.state}</td>
                <td className="border px-4 py-2">{data.zip_code}</td>
                <td className="border px-4 py-2">{data.email}</td>
                <td className="border px-4 py-2">{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={handleTransaction2}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ejecutar transacción 2 (Modificar cliente)
      </button>
      {customers.length > 0 && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Apellido Paterno</th>
              <th className="px-4 py-2">Apellido Materno</th>
              <th className="px-4 py-2">RFC</th>
              <th className="px-4 py-2">Calle</th>
              <th className="px-4 py-2">Número de calle</th>
              <th className="px-4 py-2">Ciudad</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Código postal</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td className="border px-4 py-2">{customer.customer_id}</td>
                <td className="border px-4 py-2">{customer.first_name}</td>
                <td className="border px-4 py-2">{customer.paternal_surname}</td>
                <td className="border px-4 py-2">{customer.maternal_surname}</td>
                <td className="border px-4 py-2">{customer.rfc_customer}</td>
                <td className="border px-4 py-2">{customer.street}</td>
                <td className="border px-4 py-2">{customer.number_street}</td>
                <td className="border px-4 py-2">{customer.city}</td>
                <td className="border px-4 py-2">{customer.state}</td>
                <td className="border px-4 py-2">{customer.zip_code}</td>
                <td className="border px-4 py-2">{customer.email}</td>
                <td className="border px-4 py-2">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Operaciones;

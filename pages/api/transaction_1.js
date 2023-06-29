import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        const customer = await prisma.customer.create({
          data: {
            first_name: 'John',
            paternal_surname: 'Doe',
            maternal_surname: 'Smith',
            rfc_customer: 'ABC123',
            street: '123 Main St',
            number_street: 'Apt 4B',
            city: 'New York',
            state: 'NY',
            zip_code: '10001',
            email: 'john.doe@example.com',
            phone: '555-1234',
          },
        });

        const product = await prisma.product.create({
          data: {
            product_name: 'Laptop',
            product_description: 'High-performance laptop',
            brand_id: 1,
            category_id: 1,
            model_year: 2023,
            list_price: 1999.99,
          },
        });

        const customers = await prisma.customer.findMany();
        const products = await prisma.product.findMany();

        return {
          customer,
          product,
          customers,
          products,
        };
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al ejecutar la transacción' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

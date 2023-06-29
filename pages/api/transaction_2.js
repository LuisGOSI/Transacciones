import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        const customer = await prisma.customer.update({
          where: { customer_id: 1 },
          data: {
            first_name: 'Jane',
            paternal_surname: 'Smith',
            maternal_surname: 'Doe',
            rfc_customer: 'XYZ789',
            street: '456 Elm St',
            number_street: 'Apt 2C',
            city: 'Los Angeles',
            state: 'CA',
            zip_code: '90001',
            email: 'jane.smith@example.com',
            phone: '555-5678',
          },
        });

        const customers = await prisma.customer.findMany();

        return {
          customer,
          customers,
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

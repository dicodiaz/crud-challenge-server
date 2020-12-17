const createCustomerQuery = 'INSERT INTO public.customers ' +
  '(customer_id,firstname,lastname,email,phone,username,password) ' +
  'VALUES($1,$2,$3,$4,$5,$6,$7)';

const getAllCustomersQuery = 'SELECT * FROM customers';

const createDriverQuery = 'INSERT INTO public.drivers ' +
  '(driver_id,firstname,lastname,age,phone,username,password) ' +
  'VALUES($1,$2,$3,$4,$5,$6,$7)';

const getAllDriversQuery = 'SELECT * FROM drivers';

const createCarQuery = 'INSERT INTO public.cars ' +
  '(plate,model,motor,chassis,color) ' +
  'VALUES($1,$2,$3,$4,$5)';

const getAllCarsQuery = 'SELECT * FROM cars';

const createRideQuery = 'INSERT INTO public.rides ' +
  '(first_point,target_point,customer_id,driver_id,time) ' +
  'VALUES($1,$2,$3,$4,$5)';

const getAllRidesQuery = 'SELECT * FROM rides';

module.exports = {
  createCustomerQuery,
  getAllCustomersQuery,
  createDriverQuery,
  getAllDriversQuery,
  createCarQuery,
  getAllCarsQuery,
  createRideQuery,
  getAllRidesQuery
};

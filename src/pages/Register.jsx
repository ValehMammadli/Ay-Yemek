import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  birthDate: yup.date().required('Birth Date is required'),
  password: yup.string().required('Password is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  address: yup.string().required('Address is required'),
});

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsLoggedIn(true);
    alert('Registration successful!');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, logged-in user!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Registration</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name</label>
              <input type="text" name="name" {...register('name')} />
              {errors && errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
              <label>Surname</label>
              <input type="text" name="surname" {...register('surname')} />
              {errors && errors.surname && <p>{errors.surname.message}</p>}
            </div>

            <div>
              <label>Birth Date</label>
              <input type="date" name="birthDate" {...register('birthDate')} />
              {errors && errors.birthDate && <p>{errors.birthDate.message}</p>}
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="password" {...register('password')} />
              {errors && errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
              <label>Email</label>
              <input type="text" name="email" {...register('email')} />
              {errors && errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <label>Address</label>
              <input type="text" name="address" {...register('address')} />
              {errors && errors.address && <p>{errors.address.message}</p>}
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;

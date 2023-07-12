import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsLoggedIn(true);
    alert('Login successful!');
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
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email</label>
              <input type="text" name="email" {...register('email')} />
              {errors && errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <label>Password</label>
              <input type="password" name="password" {...register('password')} />
              {errors && errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

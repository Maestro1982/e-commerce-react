import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import * as yup from 'yup';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email('Email should be valid')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user === null || isSuccess) {
      navigate('admin');
    }
  }, [user, isLoading, isError, isSuccess, message]);

  return (
    <div className='py-5' style={{ background: '#efe7da', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Login</h3>
        <p className='text-center'>Login to your account to continue.</p>
        <form onSubmit={formik.handleSubmit}>
          <div className='error mb-1'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type='email'
            name='email'
            label='Email Address'
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange('email')}
          />
          <div className='error mb-1'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <CustomInput
            type='password'
            name='password'
            label='Password'
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange('password')}
          />
          <div className='mb-3 text-end'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            style={{ background: '#0e4749' }}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

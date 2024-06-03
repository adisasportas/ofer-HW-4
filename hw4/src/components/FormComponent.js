import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/FormComponent.css';

function FormComponent({ onSubmit }) {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);
  
  const handleFormSubmit = data => {
    setFormData(data);
    onSubmit(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
        <div className="form-field">
          <label className="form-label">Name:</label>
          <input className="form-input" {...register('name', { 
            required: "Name is required", 
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only English letters are allowed"
            },
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters"
            }
          })} />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        
        <div className="form-field">
          <label className="form-label">Email:</label>
          <input className="form-input" {...register('email', { 
            required: "Email is required", 
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format"
            }
          })} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        
        <div className="form-field">
          <label className="form-label">Confirm Email:</label>
          <input className="form-input" {...register('confirmEmail', { 
            required: "Confirm Email is required",
            validate: (value) => value === getValues('email') || "Emails do not match"
          })} />
          {errors.confirmEmail && <p className="form-error">{errors.confirmEmail.message}</p>}
        </div>
        
        <div className="form-field">
          <label className="form-label">Password:</label>
          <input className="form-input" type="password" {...register('password', { 
            required: "Password is required", 
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })} />
          {errors.password && <p className="form-error">{errors.password.message}</p>}
        </div>

        <input type="submit" className="form-submitButton" />
      </form>

      {formData && (
        <div className="form-modal">
          <h2>Entered Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Confirm Email: {formData.confirmEmail}</p>
          <p>Password: {formData.password}</p>
          <button onClick={() => setFormData(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default FormComponent;

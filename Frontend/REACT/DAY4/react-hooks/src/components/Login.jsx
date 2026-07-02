import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
      const {setUser}=useContext(UserContext);
  // State management for form fields
  const [formData, setFormData] = useState({
    name: '',
  
  });



  // Handle text and checkbox input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
      setUser(formData.name)
   
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Welcome Back</h2>

       

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* name Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Name </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name@example.com"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

        

         

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Change User
          </button>
        </form>

        {/* Footer Link */}
        <div style={styles.footerText}>
          Don't have an account? <a href="#signup" style={styles.link}>Sign up</a>
        </div>
      </div>
    </div>
  );
};

// Extracted Inline Styles Object
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: '20px',
    boxSizing: 'border-box'
  },
  container: {
    border:"2px solid green",
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box'
  },
  title: {
    marginTop: 0,
    marginBottom: '24px',
  
    fontSize: '28px',
    fontWeight: 600,
    textAlign: 'center'
  },
  errorMsg: {
    backgroundColor: '#ffebe6',
   
    padding: '10px',
    borderRadius: '4px',
    fontSize: '14px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 500
  },
  form: {
    margin: 0
  },
  inputGroup: {
    marginBottom: '20px'
  },
  passwordHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  label: {
    display: 'block',
   
    fontSize: '14px',
    fontWeight: 500,
    margin: 0
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #cccccc',
    borderRadius: '6px',
    fontSize: '16px',
   
    boxSizing: 'border-box',
    outline: 'none'
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  },
  checkbox: {
    width: '16px',
    height: '16px',
    margin: '0 10px 0 0',
    cursor: 'pointer'
  },
  checkboxLabel: {
   
    fontSize: '14px',
    cursor: 'pointer',
    userSelect: 'none'
  },
  button: {
    width: '100%',
    padding: '14px',
   
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 102, 204, 0.2)'
  },
  link: {
    fontSize: '13px',
    textDecoration: 'none',
    fontWeight: 500
  },
  footerText: {
    marginTop: '28px',
    textAlign: 'center',
    fontSize: '14px'
  }
};

export default Login;

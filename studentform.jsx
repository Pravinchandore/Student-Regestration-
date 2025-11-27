import React, { useState } from "react";
import "./StudentForm.css";

export default function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Registered!\nName: ${form.name}\nEmail: ${form.email}\nCourse: ${form.course}`);
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="form-box">
        
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />

        <label>Course</label>
        <select 
          name="course" 
          value={form.course} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

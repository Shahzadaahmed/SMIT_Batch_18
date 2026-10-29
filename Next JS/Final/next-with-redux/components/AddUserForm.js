"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userAction";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

export default function AddUserForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addUser({ ...form, id: Date.now() }));
    setForm(initialForm);
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Username</span>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Enter username" required />
      </label>
      <label className="form-field">
        <span>Email</span>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
      </label>
      <label className="form-field">
        <span>Password</span>
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter password" required />
      </label>
      <button className="form-submit" type="submit">Add User</button>
    </form>
  );
}

import React, { useState } from "react";
import "./App.css";

const countryCodes = ["+91", "+1", "+44", "+61", "+971"];

const initialForm = {
  fullName: "",
  username: "",
  email: "",
  countryCode: "+91",
  phone: "",
  password: "",
  confirmPassword: "",
  gender: "",
  dob: "",
  permanentAddress: "",
  sameAsPermanent: false,
  currentAddress: "",
  city: "",
  state: "",
  pincode: "",
  altPhone: "",
  photo: null,
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [photoName, setPhotoName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckbox = (e) => {
    const checked = e.target.checked;
    setForm({
      ...form,
      sameAsPermanent: checked,
      currentAddress: checked ? form.permanentAddress : "",
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, photo: file });
      setPhotoName(file.name);
    }
  };

  // Only the * (required) fields below are validated, as per requirement
  const validate = () => {
    const err = {};

    if (!/^[A-Za-z ]{3,50}$/.test(form.fullName.trim()))
      err.fullName = "Enter a valid name (letters only, min 3 chars)";

    if (!/^[A-Za-z0-9_]{4,20}$/.test(form.username.trim()))
      err.username = "Username must be 4-20 chars (letters, numbers, _)";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      err.email = "Enter a valid email address";

    if (!form.countryCode) err.countryCode = "Select a country code";

    if (!/^\d{10}$/.test(form.phone.trim()))
      err.phone = "Phone number must be exactly 10 digits";

    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(form.password))
      err.password = "Password: min 6 chars, letters + numbers";

    if (form.confirmPassword !== form.password)
      err.confirmPassword = "Passwords do not match";

    if (form.permanentAddress.trim().length < 5)
      err.permanentAddress = "Enter your permanent address";

    if (!form.sameAsPermanent && form.currentAddress.trim().length < 5)
      err.currentAddress =
        "Enter current address, or tick same-as-permanent";

    if (!form.photo) {
      err.photo = "Photo is required";
    } else if (form.photo.size > 2 * 1024 * 1024) {
      err.photo = "Photo must be under 2 MB";
    } else if (!form.photo.type.startsWith("image/")) {
      err.photo = "Only image files are allowed";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleClear = () => {
    setForm(initialForm);
    setErrors({});
    setPhotoName("");
    setSubmitted(false);
  };

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>Registration Form</h1>
        <p className="note">Fields marked * are required and validated.</p>

        <label>Full Name *</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} />
        {errors.fullName && <span className="error">{errors.fullName}</span>}

        <label>Username *</label>
        <input name="username" value={form.username} onChange={handleChange} />
        {errors.username && <span className="error">{errors.username}</span>}

        <label>Email *</label>
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <div className="row">
          <div className="col-small">
            <label>Country Code *</label>
            <select name="countryCode" value={form.countryCode} onChange={handleChange}>
              {countryCodes.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.countryCode && <span className="error">{errors.countryCode}</span>}
          </div>
          <div className="col-large">
            <label>Phone Number *</label>
            <input name="phone" value={form.phone} onChange={handleChange} maxLength="10" />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <label>Password *</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}

        <label>Confirm Password *</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

        <label>Gender</label>
        <div className="radio-group">
          <label><input type="radio" name="gender" value="Male" checked={form.gender === "Male"} onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="Female" checked={form.gender === "Female"} onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="Other" checked={form.gender === "Other"} onChange={handleChange} /> Other</label>
        </div>

        <label>Date of Birth</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} />

        <label>Permanent Address *</label>
        <textarea name="permanentAddress" value={form.permanentAddress} onChange={handleChange} />
        {errors.permanentAddress && <span className="error">{errors.permanentAddress}</span>}

        <label className="checkbox-label">
          <input type="checkbox" checked={form.sameAsPermanent} onChange={handleCheckbox} />
          Current address same as permanent
        </label>

        {!form.sameAsPermanent && (
          <>
            <label>Current Address *</label>
            <textarea name="currentAddress" value={form.currentAddress} onChange={handleChange} />
            {errors.currentAddress && <span className="error">{errors.currentAddress}</span>}
          </>
        )}

        <div className="row">
          <div className="col-large">
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} />
          </div>
          <div className="col-small">
            <label>State</label>
            <input name="state" value={form.state} onChange={handleChange} />
          </div>
          <div className="col-small">
            <label>Pincode</label>
            <input name="pincode" value={form.pincode} onChange={handleChange} />
          </div>
        </div>

        <label>Alternate Phone Number (optional)</label>
        <input name="altPhone" value={form.altPhone} onChange={handleChange} />

        <label>Upload Photo * (max 2 MB)</label>
        <input type="file" accept="image/*" onChange={handlePhoto} />
        {photoName && <span className="fileName">{photoName}</span>}
        {errors.photo && <span className="error">{errors.photo}</span>}

        <div className="btnRow">
          <button type="submit" className="submitBtn">Submit</button>
          <button type="button" className="clearBtn" onClick={handleClear}>Clear</button>
        </div>

        {submitted && (
          <p className="success">Registration submitted successfully!</p>
        )}
      </form>
    </div>
  );
}

export default App;

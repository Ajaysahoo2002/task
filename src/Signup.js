import React, { useState } from 'react'
import "./signup.css";
import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState(0);
    const [designation, setDesignation] = useState("");

    // Signin
    const handleSubmit = () => {

    }

    return (
        <div className="signup-page">

            <form onSubmit={handleSubmit}>
                <h1 style={{ textAlign: "center" }}>Employee Signup</h1>
                <div id="name">
                    <label>Name</label>
                    <input type="text" value={name} placeholder='Employee Name' onChange={(e) => { setName(e.target.value) }} required />
                </div>
                <div id="phoneNumber">
                    <label>Phone Number</label>
                    <input type="tel" value={phoneNumber} placeholder='Employee phoneNumber' onChange={(e) => { setphoneNumber(e.target.value) }} required />
                </div>
                <div id="address">
                    <label>Email</label>
                    <input type="email" value={email} placeholder='Email' onChange={(e) => { setemail(e.target.value) }} required />
                </div>

                <div id="age">
                    <label>Age</label>
                    <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} required />
                </div>
                <div id="designation">
                    <label>Designation</label>
                    <select name="designation" id="">
                        <option value={designation} onChange={(e) => { setDesignation(e.target.value) }}>HTML Developer</option>
                        <option value={designation} onChange={(e) => { setDesignation(e.target.value) }}>Frontend Developer</option>
                        <option value={designation} onChange={(e) => { setDesignation(e.target.value) }}>Backend Developer</option>
                        <option value={designation} onChange={(e) => { setDesignation(e.target.value) }}>Full Stack Developer</option>
                        <option value={designation} onChange={(e) => { setDesignation(e.target.value) }}>.Net Developer</option>
                        <option value={designation} onChange={(e) => { setDesignation(e.target.value) }}>Java Developer</option>
                    </select>
                </div>
                <div id="address">
                    <label>Address</label>
                    <textarea cols={50} placeholder='Address...' value={address} onChange={(e) => { setAddress(e.target.value) }} required />
                </div>
                <button variant="primary" type="submit">Signup</button>
            </form>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
        </div>
    )
}

export default Signup

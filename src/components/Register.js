import React, { useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Register = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('Uzbekistan')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('male')

    const navigate = useNavigate()

    let isValidate = () => {
        let isproceed = true;
        let errormessage = "Please enter the value in "
        if (id === null || id === '') {
            isproceed = false
            errormessage += "Username"
        }
        if (name === null || name === '') {
            isproceed = false
            errormessage += "Fullname"
        }
        if (password === null || password === '') {
            isproceed = false
            errormessage += "Password"
        }
        if (email === null || email === '') {
            isproceed = false
            errormessage += "Email"
        }
        if (!isproceed) {
            toast.warning(errormessage)
        }
        return isproceed
    }
    const handlesubmit = (e) => {

        e.preventDefault()
        let regObj = { id, name, email, password, phone, country, address, gender };
        // console.log(regObj);
        if (isValidate()) {
            fetch('http://localhost:8000/user', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(regObj)
            }).then((res) => {
                toast.success('registered successfully')
                navigate('/login')
            }).catch((err) => {
                toast.error("Failed" + err.message)
            })
        }
    }
    return (
        <div>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handlesubmit}>
                    <div className='card'>
                        <div className='card-header'>
                            <h2>User Register</h2>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Username <span className='errmsg'>*</span></label>
                                        <input value={id} onChange={(e) => setId(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password <span className='errmsg'>*</span></label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full name <span className='errmsg'>*</span></label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email <span className='errmsg'>*</span></label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Phone <span className='errmsg'>*</span></label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label value={country} onChange={(e) => setCountry(e.target.value)}>Country <span className='errmsg'>*</span></label>
                                        <select className='form-control'>
                                            <option value={"Uzbekistan"}>Uzbekistan</option>
                                            <option value={"Germany"}>Germany</option>
                                            <option value={"Russia"}>Russia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6 w-100'>
                                    <div className='form-group'>
                                        <label>Address</label>
                                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} className='form-control'></textarea>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Gender</label>
                                        <br />
                                        <input checked={gender === "male"} onChange={(e) => setGender(e.target.value)} type='radio' name='gender' value={'male'} className='app-check'></input>
                                        <label>Male</label>
                                        <input checked={gender === "female"} onChange={(e) => setGender(e.target.value)} type='radio' name='gender' value={'female'} className='app-check'></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary'>Register</button>
                            <Link className='btn btn-danger'>Back </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
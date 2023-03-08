import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen/MainScreen";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
  );
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if(userInfo){
      navigate('/mynotes')
    }
  }, [navigate]);
  const submitHandler = async(e)=>{
    setMessage(null)
    setError(null)
    e.preventDefault();
    if(password!==confirmPassword){
      setMessage('Passwords do not match')
    }else if(!name){
      setMessage('Name is mandatory')
    } else if(!email){
      setMessage('Email is mandatory')
    }else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        }
        setLoading(true)
        const {data} = await axios.post('/api/users/register',
          {
            name,
            email,
            password,
            pic
          },
          config
        )
        // console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false)
        navigate('/mynotes')
        
      } catch (error) {
        console.error(error.response.data);
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  }

  const postDetails = (pics)=>{
    if(!pics){
      return setPicMessage("Please select an image.")
    }
    setPicMessage(null)
    if(pics.type === 'image/jpeg' || pics.type === 'image/png'){
      const data = new FormData();
      data.append('file', pics)
      data.append('upload_preset', 'notebuddy')
      setPicMessage('uploading image, please wait...')
      fetch('https://api.cloudinary.com/v1_1/joyal/image/upload',{

        method : 'post',
        body: data
    })
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        // console.log(data)
        setPic(data.secure_url.toString())
        setPicMessage('Image uploaded successfully')
      })
      .catch((error)=>{
        console.log(error)
        setPicMessage('Image could not be uploaded')
      })
      

    }else {
      return setPicMessage("Please select an image.")
    }
  }

  return (
    <MainScreen title={"REGISTER"}>
      <div className="register-container">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading/>}
        <Form onSubmit={(e)=>submitHandler(e)}>
          <Form.Group className="mb-3" id="formName">
            <Form.Label className="register-required-field-label">Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formBasicEmail">
            <Form.Label className="register-required-field-label">Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formBasicPassword">
            <Form.Label className="register-required-field-label">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formBasicPasswordConfirm">
            <Form.Label className="register-required-field-label">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Form.Group id="formFile" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              onChange={(e)=>postDetails(e.target.files[0])}
              type="file"
              id="custom-file"
              placeholder="Upload Profile Picture"
              accept="image/png, image/jpeg"
            />
            <Form.Text className="text-info ps-2" style={{ fontSize: "16px" }}>
                {picMessage}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" className="my-3 px-4" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const UploadPage = ()=>{
  const [file,setFile]=useState(null);
  const [preview,setPreview]=useState(null);
  const navigate = useNavigate();

  const handleFile = (e)=>{
    const f = e.target.files[0];
    setFile(f);
    if(f){
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else setPreview(null);
  };

  const handleUpload = async ()=>{
    if(!file) return alert("Please upload a plant image");
    const fd = new FormData();
    fd.append("image", file);
    try{
      const res = await api.post("/api/analyze", fd, {headers: {"Content-Type":"multipart/form-data"}});
      localStorage.setItem("result", JSON.stringify(res.data));
      navigate("/result");
    }catch(err){
      console.error(err);
      alert("Error analyzing image. Make sure backend is running.");
    }
  };

  return (
    <div className="form-container">
      <h2>Upload Plant Image 🌱</h2>
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && <img src={preview} alt="preview" className="preview" />}
      <button onClick={handleUpload}>Analyze</button>
    </div>
  );
};

export default UploadPage;

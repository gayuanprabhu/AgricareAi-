import React, {useEffect, useState} from "react";

const ResultPage = ()=>{
  const [data,setData]=useState(null);
  useEffect(()=>{
    const r = JSON.parse(localStorage.getItem("result"));
    setData(r);
  },[]);

  if(!data) return <p className="form-container">No data found. Please upload again.</p>;

  return (
    <div className="result-container">
      <h2>Plant Diagnosis 🌿</h2>
      <div className="result-grid">
        <div>
          <p><b>Plant:</b> {data.plant || "Unknown"}</p>
          <p><b>Status:</b> {data.status}</p>
          <p><b>Problem:</b> {data.problem}</p>
          {data.confidence && <p><b>Confidence:</b> {data.confidence}</p>}
        </div>
        {data.image_url && <div><img src={data.image_url} alt="uploaded" className="uploaded-img" /></div>}
      </div>

      {data.causes && data.causes.length>0 && (
        <>
          <h4>Possible Causes:</h4>
          <ul>{data.causes.map((c,i)=><li key={i}>{c}</li>)}</ul>
        </>
      )}

      {data.solutions && data.solutions.length>0 && (
        <>
          <h4>Suggested Solutions:</h4>
          <ul>{data.solutions.map((s,i)=><li key={i}>{s}</li>)}</ul>
        </>
      )}
    </div>
  );
};

export default ResultPage;

import Sidebar from "./Sidebar";
import "../assets/css/Documentos.css"
import React, { useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import { Alert } from "bootstrap";

export default function Documentos(){

  const [link_documento, setlink_documento] = useState('');

  function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbzBr-rSNOj5BOxy2CCs81B7viy4pOOn1AkiVrq_8xFet_aNDZ4odqcjTME23lsiHVIW/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          alert(`Este es el link del archivo ${a.url}`) //See response
        }).catch(e => console.log(e)) // Or Error in console
    }
  }

  async function guardarBD(url) {
    const datos = {link_documento: link_documento}
    try {
        window.open(url, '_blank');
        await axios.post(`${Apiurl}/Documento`, datos);
    } catch (error) {
        console.log("Error: ", error.response.data);
        return error;
    }
  }


    return(
        <>
        <div className="flex">
        <Sidebar/>
        <div className="h-screen flex-1 p-7" id="hp">
        <div className="file-upload" id = "drag">
        <input className="file-upload-btn" type="file" accept="application/pdf"  onChange={(e) => guardarArchivo(e)} />

            <div className="file-upload-content">
                <img className="file-upload-image" src="#" alt="your image" />
                <div className="image-title-wrap">
                <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}
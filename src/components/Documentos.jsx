import Sidebar from "./Sidebar";
import "../assets/css/Documentos.css"
import FileUpload from '../class/FileUpload';
import FileList from '../class/FileList';
import React, { useState } from 'react';

export default function Documentos(){

    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
      setFiles(files.filter(file => file.name !== filename))
    }
  
    return (
        <>
        <div className="flex">
        <Sidebar/>
        <div className="h-screen flex-1 p-7" id="hp">
      <div>
        <div className="title">Upload file</div>
        <FileUpload files={files} setFiles={setFiles}
          removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
        </div>
        </div>
        </div>
      </>
    );
    /*return(
        <>
        <div className="flex">
        <Sidebar/>
        <div className="h-screen flex-1 p-7" id="hp">
        <div className="file-upload" id = "drag">
            <button className="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Agregar Archivo</button>

            <div className="image-upload-wrap">
                <input className="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                <div className="drag-text">
                <h3>Arrastre el archivo aqui</h3>
                </div>
            </div>
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
    );*/
}
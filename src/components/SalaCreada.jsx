import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref,uploadBytes, listAll, getDownloadURL } from "@firebase/storage";
import {v4 } from 'uuid'

export function SalaCreada() {
  
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}` );
    uploadBytes(imageRef, imageUpload).then((snapshot) =>{
      getDownloadURL(snapshot.ref).then((url) =>{
        setImageList((prev) => [...prev, url])
      })
    })
  };

  useEffect(()=> {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    });
  }, []);

  return (
    <div className="">
      {/*Prueba de subida de archivo sin estilo  */}

      <input type="file" onChange={(event) => {
        setImageUpload(event.target.files[0]);
      }} />
      
      <button className="text-white absolute  bottom-2.5 
                bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
              onClick={uploadImage}>
        subir imagen
      </button>
      {imageList.map((url) => {
        return <img src={url}/>
      })}
      {/* <form>
        <label htmlFor="chat" className="sr-only">
          Mensaje...
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <label
            htmlFor="fileInput"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                fill="currentColor"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
            </svg>
          </label>
          <input type="file" id="fileInput" className="hidden" />
          <textarea
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mensaje..."
          ></textarea>
          <button
           
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5 rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Enviar Mensaje</span>
          </button>
        </div>
      </form> */}
    </div>
  );
}

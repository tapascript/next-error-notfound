"use client"

import {useState} from "react";

import { downloadCourse } from "@/app/actions/course"

export const DownloadCourse = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  async function download(e) {
    e.preventDefault();
    try {
      const response = await downloadCourse(123);
      setSuccessMessage(response);

    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  }

  return (
    <form onSubmit={download}>
      {successMessage && <p className="text-green-700 my-2">{successMessage}</p>}
      {errorMessage && <p className="text-red-700 my-2">{errorMessage}</p>}
      <button type="submit" className="bg-black text-white p-1 rounded">Download</button>
    </form>
  )
}


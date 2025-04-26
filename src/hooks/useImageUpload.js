// hooks/useImageUpload.js
import { useState, useRef } from "react";

export function useImageUpload({ cloudName, uploadPreset }) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("Sin archivos seleccionados");
  const fileInputRef = useRef(null);

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event, onUploadSuccess) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData },
      );

      const data = await response.json();
      if (data.secure_url) {
        onUploadSuccess(data.secure_url);
      }
    } catch (err) {
      console.error("Error uploading image", err);
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    fileName,
    fileInputRef,
    triggerFileSelect,
    handleFileChange,
  };
}

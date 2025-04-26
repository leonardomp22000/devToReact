// components/ImageUploader.js
import Button from "@/components/Button";
import { useImageUpload } from "@/hooks/useImageUpload";
import { CLOUDINARY_CONFIG } from "@/config/cloudinary";

export default function ImageUploader({ setFieldValue }) {
  const {
    uploading,
    fileName,
    fileInputRef,
    triggerFileSelect,
    handleFileChange,
  } = useImageUpload({
    cloudName: CLOUDINARY_CONFIG.cloudName,
    uploadPreset: CLOUDINARY_CONFIG.uploadPreset,
  });

  return (
    <div>
      <p>Profile image</p>
      <div className="flex items-center gap-3.5 rounded-xl border border-black/10 p-3">
        <Button variant="outlined" type="button" onClick={triggerFileSelect}>
          {uploading ? "Uploading..." : "Select file"}
        </Button>
        <p className="text-black/75">{fileName}</p>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        hidden
        accept="image/*"
        onChange={(e) =>
          handleFileChange(e, (url) => setFieldValue("profilePic", url))
        }
      />
    </div>
  );
}

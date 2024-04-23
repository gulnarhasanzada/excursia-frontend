import { useCallback, useEffect, useRef } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  interface Window {
    cloudinary: any; 
  }
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  values: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, values}) => {
  const cloudinaryRef = useRef<any>(null);  
  const widgetRef = useRef<any>(null); 

  useEffect(()=>{
    cloudinaryRef.current = window.cloudinary;
    if (cloudinaryRef.current) {
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
            uploadPreset: process.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET
          },
          (error: any, result: any) => {
            if(result.info.secure_url){
              handleUpload(result.info.secure_url);
            }
          }
        );
      }
  },[])

  const handleUpload = useCallback((url: any)=>{
    onChange(url)
  },[onChange])


  return (
    <div>
    <div onClick={() => {widgetRef.current.open()}} className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center text-neutral-600 text-center">
      <TbPhotoPlus size={50} className="mx-auto"/>
      <div className="font-semibold text-lg">Click to upload</div>
    </div>
    {values.length > 0 && (
        <div className="d-flex flex-row gap-1 flex-wrap">
          {values.map((image: string, index: number) => (
            <img src={image} alt="Upload" style={{width:'19.5%'}} key={index} className="border-solid border-1 border-neutral-300 p-2 mt-1"/>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUpload





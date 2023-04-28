import {useEffect, useRef} from 'react';

const UploadWidget = ({setImageData}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dwcfr7fta',
      uploadPreset: 'zkfqkrlo',
      sources: ['local','url','camera']
    }, function(error, result) {
      if(result.info.url){
      console.log(result.info.url);
      setImageData(result.info.url);}
    })
  }, [])
  return (
    <button type='button' onClick={()=> widgetRef.current.open()}>
      Upload
    </button>
  )
}

export default UploadWidget;
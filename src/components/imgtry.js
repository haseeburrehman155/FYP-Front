import axios from "axios";
import { useState } from "react";

function Imgtry(){
    const [image,setimage] = useState({ preview: '', data: '' });
    const [base64Arr,setimageBase64Arr] = useState([]);
     
    const handlechange=(e)=>{
        console.log(e.target.files);

       // setimage(e.targat.files[0]);

        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
          }

   
          getBase64(img.data, (result) => {
              // 
              // idCardBase64 = result;
               img.base64 = result;
              // setimage(img);
               base64Arr[parseInt(e.target.name)] = img;
               setimageBase64Arr(base64Arr);
          });

         //coppy below
          
    }
    
    const handleApi=()=>{
       // 
       
        // 
    }

   function getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }





    return(
        <div className="app">
            {image.base64 && <img src={image.base64} width='100' height='100' />}
            {[0,1,2,3,4,5].map(el=>
                <input key={el} name={el.toString()} type="file" onChange={handlechange} />
            )
            }
            
            <button onClick={handleApi} > Submit</button>
        </div>
    )
}

export default Imgtry;

 //setimage(img);
        //   const url='http://localhost:4000/api/image';
        //   const formData=new FormData();
        //   formData.append('image',img.data);
  
        //   axios.post(url,formData).then((res)=>{
        //       console.log(res);
        //       setimage(img)
        //   }).catch((err)=>{
        //       console.log(err);
        //   })
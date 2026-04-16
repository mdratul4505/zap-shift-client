import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";



const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();


  const {user} = useAuth()

  const axiosSecure = useAxiosSecure()

  const handelSendParsel = (data) => {
    // console.log(data)
    const isDocument = data.parcelType === 'document'
    const parcelWeight = parseFloat(data.percelWait) 
    
    const isSameDistricts = data.senderDistricts === data.receiverDistricts ;

    let cost = 0;
    if(isDocument){
      cost = isSameDistricts ? 60 : 80 ; 
    } else{
      if(parcelWeight < 3 ){
        cost = isSameDistricts ? 110 : 150;
      }else{
        const minCharge = isSameDistricts ? 110 : 150;
        const extraaWeight = parcelWeight - 3;
        const extraCharge = isSameDistricts ? extraaWeight * 40 : extraaWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    
    Swal.fire({
  title: "Agree with the cost?",
  text: `You will be charged ${cost} taka!`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take it!"
}).then((result) => {
  if (result.isConfirmed) 
    // save the parcel info to the data base
  axiosSecure.post('/parcels', data)
  .then(res =>{
    console.log(res.data)
  })
    
  //   Swal.fire({
  //   title: "Deleted!",
  //   text: "Your file has been deleted.",
  //   icon: "success"
  // });
});



  };

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map(c =>c.region);
  const regions = [...new Set(regionsDuplicate)]

  const receiverRegion = useWatch({name: 'receiverRegion', control})
 const senderRegion = useWatch({name:'senderRegion' , control});
  const districtsByRegion = region =>{
    const regionDistricts = serviceCenter.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  }




  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parsel</h2>

      <div className="mt-12 p-4">
        <h5 className="text-2xl font-bold">Enter your parcel details</h5>
        <form
          onSubmit={handleSubmit(handelSendParsel)}
          className="mt-5 text-black"
        >
          {/* document */}
          <div>
            <label className="label mr-15">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                className="radio"
                defaultChecked
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="Non-document"
                className="radio"
              />
              Non-Document
            </label>
          </div>

          {/* parsel info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <fieldset className="fieldset">
              <label className="label">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full"
                placeholder="Parcel Name"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Parcel Weight(kg)</label>
              <input
                type="number"
                className="input w-full"
                {...register("percelWait")}
                placeholder="Parcel Weight (KG)"
              />
            </fieldset>
          </div>
          {/* two collam */}
          <div className="flex gap-10 mt-10">
            {/* sender info */}

            <fieldset className="fieldset w-full">
              <h4 className="text-2xl mb-4 font-semibold">Sender Details</h4>
              <label className="label font-bold text-xl mt-4 ">
                Sender Name
              </label>
              <input
                type="text"
                {...register("SenderName")}
                defaultValue={user?.displayName}
                className="input w-full"
                placeholder="Sender Name"
              />
              {/* sender email */}
              <label className="label font-bold text-xl mt-4 ">
                Sender Email
              </label>
              <input
                type="text"
                {...register("SenderEmail")}
                defaultValue={user?.email}
                className="input w-full"
                placeholder="Sender Email"
              />
              
              {/* phone  */}
              <label className="label font-bold text-xl mt-4 ">
                Sender Phone No
              </label>
              <input
                type="text"
                {...register("SenderPhoneNo")}
                className="input w-full"
                placeholder="Sender Phone NO"
              />
              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold text-xl mt-4">Sender Regions</legend>
                <select {...register('senderRegion')} defaultValue="Pick a Resions" className="select">
                  <option disabled={true}>Pick a Resions</option>
                  {
                    regions.map((res, i)=><option key={i} value={res}>{res}</option>)
                  }
                  
                  
                </select>
  
              </fieldset>
              {/* Sender District */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold text-xl mt-4">Sender Districts</legend>
                <select {...register('senderDistricts')} defaultValue="Pick a Districts" className="select">
                  <option disabled={true}>Pick a Districts</option>
                  {
                    districtsByRegion(senderRegion).map((res, i)=><option key={i} value={res}>{res}</option>)
                  }
                  
                  
                </select>
  
              </fieldset>
              {/* sender address */}
              <label className="label font-bold text-xl mt-4">
                Sender Address
              </label>
              <input
                type="text"
                {...register("SenderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />

              {/* pickup */}
              <label className="label font-bold text-xl mt-4 ">
                Pickup Instruction
              </label>
              <textarea
                name=""
                id=""
                rows={5}
                className="border p-1 border-[#ccc] w-full rounded resize-none "
                placeholder="Pickup Instruction"
              />
            </fieldset>

            {/* resever info */}
            <fieldset className="fieldset w-full">
              <h4 className="text-2xl mb-4 font-semibold">Receiver Details</h4>
              <label className="label font-bold text-xl mt-4 ">
                Receiver Name
              </label>
              <input
                type="text"
                {...register("ReceiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
              {/* receiver email address */}
              <label className="label font-bold text-xl mt-4 ">
                Receiver Email
              </label>
              <input
                type="text"
                {...register("ReceiverEmail")}
                className="input w-full"
                placeholder="Receiver Email "
              />
              
              {/* phone  */}
              <label className="label font-bold text-xl mt-4 ">
                Receiver Phone No
              </label>
              <input
                type="text"
                {...register("ReceiverPhoneNo")}
                className="input w-full"
                placeholder="Receiver Phone NO"
              />

              {/*Receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold text-xl mt-4">Receiver Regions</legend>
                <select {...register('receiverRegion')} defaultValue="Pick a Resions" className="select">
                  <option disabled={true}>Pick a Resions</option>
                  {
                    regions.map((res, i)=><option key={i} value={res}>{res}</option>)
                  }
                  
                  
                </select>
  
              </fieldset>
              {/* Receiver District */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold text-xl mt-4">Receiver Districts</legend>
                <select {...register('receiverDistricts')} defaultValue="Pick a Districts" className="select">
                  <option disabled={true}>Pick a Districts</option>
                  {
                    districtsByRegion(receiverRegion).map((d, i)=><option key={i} value={d}>{d}</option>)
                  
                  }
                  
                  
                </select>
  
              </fieldset>

              {/* Receiver address */}
              <label className="label font-bold text-xl  mt-4">
                Receiver Address
              </label>
              <input
                type="text"
                {...register("ReceiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
              {/* pickup */}
              <label className="label font-bold text-xl mt-4 ">
                Delivery Instruction
              </label>
              <textarea
                name=""
                id=""
                rows={5}
                className="border p-1 border-[#ccc] w-full rounded resize-none "
                placeholder="Delivery Instruction"
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="btn w-full mt-5 mb-10 btn-primary text-black"
            value="Send Parcel"
          />
        </form>
      </div>
    </div>
  );
};

export default SendParcel;

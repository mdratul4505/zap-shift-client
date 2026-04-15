import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const {register , handleSubmit , formState:{errors}} = useForm()
    
    const handelSendParsel = data =>{
        console.log(data)
    }

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parsel</h2>

            <div  className='mt-12 p-4'>
                <h5 className='text-2xl font-bold'>Enter your parcel details</h5>
            <form onSubmit={handleSubmit(handelSendParsel)} className='mt-5 text-black'>
                {/* document */}
                <div>
                <label className="label mr-15">
                    <input type="radio" {...register('parcelType')} value='document' className="radio" defaultChecked />

                    Document</label>
                    <label className="label">
                    <input type="radio" {...register('parcelType')} value='Non-document' className="radio"  />

                    Non-Document</label>
                </div>

                {/* parsel info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-8'>
                    <fieldset className="fieldset">
          <label className="label">Parcel Name</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
          </fieldset>

        <fieldset className="fieldset">
          <label className="label">Parcel Weight(kg)</label>
          <input type="number" className="input w-full" {...register('percelWait')} placeholder="Parcel Weight (KG)" />
          
          
        </fieldset>
                </div>
                {/* two collam */}
                <div>
                    {/* sender info */}
                    <h4 className="text-2xl font-semibold">Sender Details</h4>
                    <fieldset className="fieldset">
          <label className="label ">Sender Name</label>
          <input type="text" {...register('SenderName')} className="input w-full" placeholder="Sender Name" />
          {/* sender address */}
          <label className="label my-4">Sender Address</label>
          <input type="text" {...register('SenderAddress')} className="input w-full" placeholder="Sender Address" />
            {/* phone  */}
          <label className="label ">Sender Phone No</label>
          <input type="text" {...register('SenderPhoneNo')} className="input w-full" placeholder="Sender Phone NO" />
            {/*  */}
          <label className="label ">Sender District</label>
          <input type="text" {...register('SenderDistrict')} className="input w-full" placeholder="Sender Dristict" />

          </fieldset>
          
                    {/* resever info */}
                    <div></div>
                </div>
                 <input type="submit" className='btn btn-primary text-black' value="Send Parcel" />
            </form>
           
            </div>
        </div>
    );
};

export default SendParcel;
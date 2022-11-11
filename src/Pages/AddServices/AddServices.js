import React from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';

const AddServices = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const details = form.details.value;
        const date = new Date().getTime();
        const service = {
            title: title,
            img: img,
            price: price,
            description: details,
            date: date
        }
        fetch('https://gamingable-server-e8mcnhjtb-s0vers.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added successfully')
                    form.reset();
                }
            })
            .catch(err => console.log(err))

    }
    return (
        <div >
            <Helmet>
                <title>Gamingable || Add Service</title>
                <meta name="Gamingable" content="Website" ></meta>
            </Helmet>
            <form onSubmit={handleAddService} className='flex flex-col justify-center items-center'>
                <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">Add Service</h1>
                <div className='text-center w-full grid grid=cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name='title' type="text" placeholder="title" className="input input-bordered w-full" required />
                    <input name='price' type="text" placeholder="price" className="input input-bordered w-full" required />
                </div>
                <input name='img' type="text" placeholder="Image" className="input input-bordered w-full" required />
                <textarea name='details' className="textarea textarea-bordered w-full mt-5" placeholder="Add Details" required ></textarea>
                <input className='btn btn-primary my-10' type="submit" value="Place Your Order" />
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddServices;
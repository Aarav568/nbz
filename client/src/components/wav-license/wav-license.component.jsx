import React from 'react';
import images from '../../utils/image-links';
const MP3License = () => {
  return (
    <>
      <div className='flex flex-col space-y-8' >
        <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${images.exploreBG})` }} >
          <div className='px-4 py-36 flex flex-col space-y-4' >
            <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >MP3 Agreement</h1>
          </div>
        </div>
        <div>
        </div>

        <div className='mx-auto p-8 flex flex-col space-y-8 text-white line leading-8'  >
        <h1 className="text-3xl font-bold mb-4">WAV Beat Lease Agreement</h1>
        <p className="mb-6">
            This MP3 Beat Lease Agreement ("Agreement") is entered into between KULTURE BEATS ("Licensor") and the individual or entity purchasing or leasing an MP3 beat ("Licensee"). This Agreement sets forth the terms and conditions governing the lease and use of the MP3 beat produced by KULTURE BEATS.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. Grant of License</h2>
        <p className="mb-6">
            Subject to the terms and conditions of this Agreement, the Licensor grants the Licensee a non-exclusive, non-transferable license to use the MP3 beat for the purpose of creating a new musical composition ("New Composition").
        </p>
        <h2 className="text-2xl font-bold mb-4">2. License Terms</h2>
        <h3 className="text-xl font-bold mb-2">2.1 License Type</h3>
        <p className="mb-4">
            The Licensee is purchasing a lease license, which grants the Licensee the right to use the MP3 beat for one commercial recording or synchronization.
        </p>
        <h3 className="text-xl font-bold mb-2">2.2 Usage Limitations</h3>
        <p className="mb-4">
            The Licensee may distribute the New Composition created using the MP3 beat for up to [insert number] units for sale or for non-profit use. The Licensee is not permitted to exceed the stated unit limit without obtaining an additional license from the Licensor.
        </p>
        <p className="mb-4">
            <strong>Note:</strong> Customize the rest of the content according to your requirements.
        </p>
        <p className="mt-8">By purchasing or leasing the MP3 beat, the Licensee acknowledges that they have read, understood, and agreed to be bound by the terms and conditions of this MP3 Beat Lease Agreement.</p>
        </div>
      </div>
    </>
  );
};

export default MP3License;
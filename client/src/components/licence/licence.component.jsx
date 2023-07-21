import React from 'react';
import images from '../../utils/image-links';
const Licence = () => {
  return (
    <>
      <div className='flex flex-col space-y-8' >
        <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${images.exploreBG})` }} >
          <div className='px-4 py-36 flex flex-col space-y-4' >
            <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >License Agreement</h1>
          </div>
        </div>
        <div>
        </div>

        <div className='mx-auto p-8 flex flex-col space-y-8 text-white line leading-8'  >
          <h1>License Agreement</h1>
          <p>
            This License Agreement ("Agreement") is entered into between KULTURE BEATS ("Licensor") and the individual or entity accessing or using the beats provided on the website ("Licensee"). This Agreement sets forth the terms and conditions governing the use of the beats purchased from the Licensor's website ("Website").
          </p>
          <h2>1. Grant of License</h2>
          <p>
            Subject to the terms and conditions of this Agreement, the Licensor grants the Licensee a non-exclusive, non-transferable, and revocable license to use the beats purchased from the Website ("Beats") for the Licensee's personal, non-commercial use.
          </p>
          <h2>2. Scope of License</h2>
          <h3>2.1 Permitted Uses</h3>
          <p>
            The Licensee may use the Beats in the following manners:
          </p>
          <ul>
            <li>Create derivative musical compositions or recordings incorporating the Beats;</li>
            <li>Perform the derivative musical compositions or recordings publicly;</li>
            <li>Distribute the derivative musical compositions or recordings for non-commercial purposes (e.g., personal use, non-profit performances, promotional materials).</li>
          </ul>
          <h3>2.2 Prohibited Uses</h3>
          <p>
            The Licensee shall not use the Beats in any manner that:
          </p>
          <ul>
            <li>Infringes upon the Licensor's intellectual property rights or violates any applicable laws or regulations;</li>
            <li>Sells, licenses, sub-licenses, or distributes the Beats in any manner, including for commercial purposes;</li>
            <li>Creates obscene, defamatory, or unlawful content using the Beats;</li>
            <li>Allows third parties to use or access the Beats without the Licensor's prior written consent.</li>
          </ul>
          <h2>3. Intellectual Property Rights</h2>
          <p>
            The Licensor retains all ownership and intellectual property rights in and to the Beats, including any modifications, enhancements, or derivative works created by the Licensee. This Agreement does not transfer ownership of the Beats or any intellectual property rights to the Licensee.
          </p>
          <h2>4. Attribution</h2>
          <p>
            The Licensee shall provide appropriate credit to the Licensor for the use of the Beats by acknowledging the Licensor's name or alias in any derivative works or performances.
          </p>
        </div>
      </div>
    </>
  );
};

export default Licence;
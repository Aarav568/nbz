import React from 'react';
import images from '../../utils/image-links';
import SearchBar from '../../components/searchbar/searchbar.component';
import PillButton from '../../components/pill-button/pill-button.component';
const PrivacyPolicy = () => {
  return (
    <>
      <div className='flex flex-col space-y-8' >
        <div className="bg-center bg-cover w-full min-h-[550px] flex justify-around items-center" style={{ backgroundImage: `url(${images.exploreBG})` }} >
          <div className='px-4 py-36 flex flex-col space-y-4' >
            <h1 className='lg:text-8xl text-6xl text-white uppercase font-Kizard' >Privacy Policy</h1>
          </div>
        </div>
        <div>
        </div>

        <div className='mx-auto p-8 flex flex-col space-y-8 text-white line leading-8'  >
        These Terms of Service ("Terms") govern your access to and use of our website ("Website") and the services provided on the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the Website or use our services.

Acceptance of Terms
By accessing or using our Website, you represent and warrant that you are at least 18 years old and capable of entering into a legally binding agreement. If you are accessing or using the Website on behalf of a company or organization, you represent and warrant that you have the authority to bind that entity to these Terms.

Use of Website
2.1 License
Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Website for personal and non-commercial purposes.

2.2 Prohibited Conduct
You agree not to:

Use the Website in any unlawful, fraudulent, or unauthorized manner.
Modify, adapt, or hack the Website or modify another website to falsely imply an association with our Website.
Upload, transmit, or distribute any viruses, worms, or malicious code.
Interfere with or disrupt the integrity or performance of the Website or its underlying infrastructure.
Collect or harvest any personally identifiable information from the Website without our consent.
Use any automated means or scrape data from the Website without our prior written consent.
Violate any applicable laws or regulations or infringe upon the rights of others.
Intellectual Property
3.1 Ownership
All intellectual property rights in the Website, including but not limited to copyrights, trademarks, logos, and service marks, are owned by us or our licensors. You acknowledge and agree that you do not acquire any ownership or other rights in any intellectual property by using the Website.

3.2 License to User Content
By posting or submitting any content on the Website, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform such content in connection with the Website.

Payment and Purchases
4.1 Pricing and Payment
The prices for beats and other products available on the Website are listed in the applicable currency and are subject to change without notice. Payment for purchases must be made through the provided payment methods. You agree to provide accurate and complete payment information and authorize us to charge the specified amount for your purchases.

4.2 Refunds
Refunds may be provided in accordance with our Refund Policy, which can be found on the Website. The eligibility and process for refunds will be determined at our sole discretion.

Limitation of Liability
To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Website or the services provided on the Website. In no event shall our total liability to you exceed the amount paid by you, if any, for accessing or using the Website.

Modifications and Termination
We reserve the right to modify, suspend, or discontinue the Website or any part thereof at any time without prior notice. We may also update or modify these Terms from time to time, and such changes will be effective upon posting the revised Terms on the Website. Your continued use of the Website after any such changes constitutes your acceptance of the revised Terms.

Governing Law and Jurisdiction
These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any dispute arising out of or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].

Contact Us
If you have any questions or concerns regarding these Terms, please contact us at:

[Your Company Name]
[Address]
[Email Address]
[Phone Number]

By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        </div>

      </div>
    </>
  );
};

export default PrivacyPolicy;
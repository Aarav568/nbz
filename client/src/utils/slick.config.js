const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <g id="style=bulk"> <g id="arrow-short-left"> <path id="rectangle" d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25L16.75 1.25C20.0637 1.25 22.75 3.93629 22.75 7.25L22.75 16.75C22.75 20.0637 20.0637 22.75 16.75 22.75L7.25 22.75C3.93629 22.75 1.25 20.0637 1.25 16.75L1.25 7.25Z" fill="#ffffff" /> <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M15.2966 5.45397C15.5447 5.71587 15.5335 6.12932 15.2716 6.37744L10.1709 11.2096C9.94415 11.4245 9.83099 11.711 9.83099 12C9.83099 12.289 9.94415 12.5755 10.1709 12.7904L15.2716 17.6226C15.5335 17.8707 15.5447 18.2841 15.2966 18.546C15.0485 18.8079 14.635 18.8191 14.3731 18.571L9.27244 13.7388C8.77399 13.2666 8.52454 12.632 8.52454 12C8.52454 11.368 8.77399 10.7334 9.27244 10.2612L14.3731 5.42902C14.635 5.1809 15.0485 5.19208 15.2966 5.45397Z" fill="#000000" /> </g> </g> </g></svg>
    );

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_iconCarrier"> <g id="style=bulk"> <g id="arrow-short-right"> <path id="rectangle" d="M1.25 7.25006C1.25 3.93635 3.93629 1.25006 7.25 1.25006H16.75C20.0637 1.25006 22.75 3.93635 22.75 7.25006V16.7501C22.75 20.0638 20.0637 22.7501 16.75 22.7501H7.25C3.93629 22.7501 1.25 20.0638 1.25 16.7501V7.25006Z" fill="#ffffff" /> <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M8.70355 5.45404C8.45544 5.71594 8.46661 6.12938 8.72851 6.3775L13.8292 11.2097C14.056 11.4246 14.1691 11.711 14.1691 12.0001C14.1691 12.2891 14.056 12.5756 13.8292 12.7904L8.72851 17.6226C8.46661 17.8707 8.45544 18.2842 8.70355 18.5461C8.95167 18.808 9.36512 18.8192 9.62702 18.571L14.7277 13.7388C15.2261 13.2666 15.4756 12.6321 15.4756 12.0001C15.4756 11.3681 15.2261 10.7335 14.7277 10.2613L9.62702 5.42908C9.36512 5.18096 8.95167 5.19214 8.70355 5.45404Z" fill="#000000" /> </g> </g> </g></svg>
);
export const slickConfig = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft className="hover:scale-150" />,
    nextArrow: <SlickArrowRight className="hover:scale-150" />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
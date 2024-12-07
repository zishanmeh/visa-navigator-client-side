import { FaStar } from "react-icons/fa";
const WhatPeopleSay = () => {
  return (
    <div className="my-16">
      <h1 className="text-4xl text-center font-bold -rotate-2">
        See What People Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-8 mt-14">
        <div>
          <div className="flex justify-start items-center gap-2">
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
          </div>
          <div className="my-4">
            <p className="text-gray-300">
              My Visa Navigator made the entire visa application process so
              simple! The user interface is intuitive, and I could easily track
              my application. Highly recommend this service to anyone.
            </p>
          </div>
          <div>
            <small className="text-xs text-gray-600">Emily Carter</small>
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center gap-2">
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
          </div>
          <div className="my-4">
            <p className="text-gray-300">
              I was amazed at how smoothly I could find all the information I
              needed. The site even helped me gather my documents correctly.
              Excellent service!
            </p>
          </div>
          <div>
            <small className="text-xs text-gray-600">Rajesh Kumar</small>
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center gap-2">
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
            <FaStar color="#f1c40f" size={25}></FaStar>
          </div>
          <div className="my-4">
            <p className="text-gray-300">
              Great website for travelers! I loved how the recent visa updates
              were displayed so I could stay informed. Keep up the good work.
            </p>
          </div>
          <div>
            <small className="text-xs text-gray-600">Amina Abdallah</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;

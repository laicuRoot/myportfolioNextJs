import React from 'react';

const LifeCard = ({date,title,description, photo}) => {
  return(
    <>
      {/* <!-- container --> */}
      <div className="flex flex-row w-full">
        {/* <!-- left col --> */}
        <div className="w-2/5 px-10 py-10">
          <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
            <img className='w-full' src={photo} />
          </div>
        </div>
        {/* <!--end left col --> */}
        {/* <!--line column--> */}
        <div className="w-1/5 flex justify-center">
          <div className="relative flex h-full w-1 bg-green-300 items-center justify-center">
            <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
              <div>{date}</div>
            </div>
          </div>
        </div>
        {/* <!--end line column--> */}
        {/* <!--right column--> */}
        <div className="w-2/5 px-10 py-10">
          <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
            <div className="text-gray-800 mb-2 flex justify-between">
              {title}
            </div>
            <div className="text-gray-600">
              {description}
            </div>
          </div>
        </div>
        {/* <!--end right column--> */}
      </div>
      {/* <!--end container--> */}
    </>
  )
}

export default LifeCard;
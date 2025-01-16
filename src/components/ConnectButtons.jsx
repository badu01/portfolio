import React from "react";

function ConnectButtons(props) {
    const{
        title
    }=props
  return (
    <div>
      <a href="google.com">
        <div className="flex items-center gap-4 border border-black px-5 rounded-2xl hover:bg-black-main hover:text-green-main group">
          <h1 className="lg:text-xl">{title}</h1>
          <svg
            className="-rotate-[130deg] fill-black-main group-hover:fill-green-main"
            width="12"
            height="30"
            viewBox="0 0 76 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5816 63.1947C19.9423 79.1839 28.7305 90.0856 41.789 103.144L39.7206 105.213C27.515 93.007 16.5406 82.5858 0.520959 69.2553L6.5816 63.1947Z"
              
            />
            <path
              d="M75.5663 74.7206C61.1355 86.1706 51.2558 93.6535 39.7407 105.169L37.395 102.823C48.1579 92.06 57.2776 82.3129 68.6933 67.8476L75.5663 74.7206Z"
              
            />
            <path
              d="M44.7011 2.58C41.2664 21.3619 41.9381 85.501 40.6451 102.565L37.5263 101.944C38.7349 85.995 36.1371 20.3412 35.5629 0.761328L44.7011 2.58Z"
              
            />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default ConnectButtons;

import React from 'react'

function Header() {
  return (
    <>
          <div
        id="call"
        className="flex justify-between bg-[#B7985B] items-center px-2 py-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-telephone-fill text-gray-50 ms-6"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
        <div className="flex gap-2">
          <span className="text-gray-50 text-xl">پروفایل</span>
          <img
            src="https://fakeimg.pl/300/"
            alt="image"
            className="h-8 w-8 rounded-[50%]"
          />
        </div>
      </div></>
  )
}

export default Header
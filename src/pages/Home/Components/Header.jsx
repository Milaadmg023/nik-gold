import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const filterdProducts = (e) => {
    console.log(e.target.id);
    // filtering data
    filterdData = [];
  };
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
          <span className="text-gray-50 text-xl">مجوعه طلا و سکه نیک سرشت</span>
          <img
            src="https://fakeimg.pl/300/"
            alt="image"
            className="h-8 w-8 rounded-[50%]"
          />
        </div>
      </div>
      <div
        id="search__bar"
        className="flex items-center m-5 rounded border rounded-[20px] border-1 border-[#B7985B]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-search bg-[#B7985B] p-2 cursor-pointer rounded-l-[20px] h-10 w-10"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="جستجو..."
          className="w-full text-end bg-gray-100 rounded-r-[20px] h-10"
        />
      </div>
      <div id="price" className="px-4">
        <div className="flex justify-between py-2">
          <span className="text-sm text-center">
            سه شنبه 12 دی 1402 <br />
            12:31:30
          </span>
          <span className="text-orange-300 text-xl">نرخ طلا و سکه</span>
        </div>
        <div className="grid grid-cols-2 text-center gap-2 text-sm">
          <span>سکه نیم بانکی:16,200,000</span>
          <span>سکه تمام بانکی: 30,270,000</span>
          <span>قیمت روز طلا: 2,533,000</span>
          <span>سکه ربع بانکی: 10,900,000</span>
        </div>
      </div>
      <div id="socials" className="flex justify-between px-4 my-4">
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-instagram text-red-500 cursor-pointer hover:scale-[1.1] transition duration-500 ease-in-out"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-whatsapp text-green-500 cursor-pointer hover:scale-[1.1] transition duration-500 ease-in-out"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-telegram text-blue-500 cursor-pointer hover:scale-[1.1] transition duration-500 ease-in-out"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>
        </div>
        <span className="text-orange-300 text-xl">دسترسی سریع</span>
      </div>
      <div id="category" onClick={filterdProducts}>
        <Link to={"/products"} className="flex justify-around text-gray-700">
          <div className="text-center cursor-pointer">
            <img
              src="https://app.goldshiraz.com/upload/category/0eaf02e673c5d005393cd83e32bd0f1f.png"
              alt="category image"
              className="w-12 h-12 rounded-full"
              id="chain"
            />
            <span>زنجیر</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              src="https://app.goldshiraz.com/upload/category/acafe85d082cc5fd7269429803576dda.png"
              alt="category image"
              className="w-12 h-12 rounded-full"
              id="coin"
            />
            <span>سکه</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              src="https://app.goldshiraz.com/upload/category/b78639583d37bec901b9ced59355b475.png"
              alt="category image"
              className="w-12 h-12 rounded-full"
              id="medal"
            />
            <span>مدال</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              src="https://app.goldshiraz.com/upload/category/60a7412749b558bf40e4a2f5b976dd5f.png"
              alt="category image"
              className="w-12 h-12 rounded-full"
              id="men"
            />
            <span>مردانه</span>
          </div>
          <div className="text-center cursor-pointer">
            <img
              src="https://app.goldshiraz.com/upload/category/02d4ebf334c0e4097d2e9259a9fc25e1.png"
              alt="category image"
              className="w-12 h-12 rounded-full"
              id="spacial"
            />
            <span>فروش ویژه</span>
          </div>
        </Link>
      </div>
      <section>
      </section>
    </>
  );
}

export default Header;

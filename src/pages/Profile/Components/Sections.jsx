import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGolden,
  AiFillCreditCard,
  AiOutlineShop,
  AiOutlineIdcard,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineQuestion,
} from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Sections() {
  return (
    <div>
      <div id="profile">
        <div className="p-4">
          <img
            src="https://fakeimg.pl/300/"
            alt="profile image"
            className="mx-auto w-[20%] lg:w-[9%] rounded-full"
          />
        </div>
        <div
          id="sections__container"
          className="flex flex-col text-gray-600 gap-4 px-3"
          dir="rtl"
        >
          <Link to={"rules"}>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-stoplights"
                viewBox="0 0 16 16"
              >
                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                <path d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c-1.2-.4-1.833-1.5-2-2h2V8c-1.2-.4-1.833-1.5-2-2h2V4c-1.2-.4-1.833-1.5-2-2zm2-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
              </svg>
              قوانین و مقررات
            </div>
          </Link>
          <Link to={"coindeal"}>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-coin"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
              </svg>
              خرید و فروش سکه
            </div>
          </Link>
          <Link to={"golddeal"}>
            <div className="flex items-center gap-2">
              <AiFillGolden />
              خرید و فروش طلای آبشده و شمش
            </div>
          </Link>
          <Link to={"payment"}>
            <div className="flex items-center gap-2">
              <AiFillCreditCard />
              شرایط اقساط
            </div>
          </Link>
          <Link to={"waranty"}>
            <div className="flex items-center gap-2">
              <VscWorkspaceTrusted />
              گارانتی
            </div>
          </Link>
          <Link to={"branches"}>
            <div className="flex items-center gap-2">
              <AiOutlineShop />
              لیست شعب و ارتباط با ما
            </div>
          </Link>
          <Link to={"aboutus"}>
            <div className="flex items-center gap-2">
              <AiOutlineIdcard />
              درباره ما
            </div>
          </Link>
          <Link to={"favorties"}>
            <div className="flex items-center gap-2">
              <AiFillHeart />
              علاقه مندی ها
            </div>
          </Link>
          <Link to={"offers"}>
            <div className="flex items-center gap-2">
              <AiOutlineComment />
              پیشنهادات و سوال ها
            </div>
          </Link>
          <Link to={"questions"}>
            <div className="flex items-center gap-2">
              <AiOutlineQuestion />
              سوالات متداول
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sections;

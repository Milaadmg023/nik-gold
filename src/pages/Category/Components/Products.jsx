import React from "react";

function Products() {
  return (
    <section className="flex px-2 lg:px-4 py-2">
      <div
        id="all__products"
        className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-6"
      >
        <div className="w-[70%] h-fit border h-fit rounded-xl">
          <img
            src="https://fakeimg.pl/300/"
            alt="product image"
            className="rounded-t-xl"
          />
          <p className="text-center text-sm md:text-md lg:text-lg" dir="rtl">
            انگشتر K170
          </p>
        </div>
      </div>
      <div
        id="filters"
        className="flex flex-col items-center bg-[#B7985B] w-[30%]  lg:w-[6%] overflow-y-scroll overflow-x-hidden p-1 rounded-l-xl h-[83vh]"
      >
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">گردن بند</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">انگشتر</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">دستبند</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">تکپوش و النگو</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">گوشواره</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">بچگانه</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">سرویس</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">نیم ست</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">پابند</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">دستبند و انگشتر</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">سپاهان</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">مدال</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">زنجیر</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">فروش ویژه</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">ساعت</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">چرم و طلا</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">سکه</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full p-1 w-fit">
            <div className="rounded-full bg-[#B7985B] text-center">
              <img
                src="https://fakeimg.pl/300/"
                alt=""
                className="w-fit rounded-full p-1"
              />
            </div>
          </div>
          <span className="text-sm text-white font-bold">مردانه</span>
        </div>
      </div>
    </section>
  );
}

export default Products;

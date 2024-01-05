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
        className="flex flex-col items-center bg-[#B7985B] w-fit overflow-y-auto overflow-x-hidden p-2 rounded-r-xl"
      >
        <div className="rouded-full bg-white rounded-full p-1 w-[3rem]">
          <div className="rounded-full bg-[#B7985B]">
            <img src="https://fakeimg.pl/300/" alt="" className="w-fit rounded-full p-1"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

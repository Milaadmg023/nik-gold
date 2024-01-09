import React from "react";

function Products() {
  const filterHandler =(e)=>{
    console.log(e.target.id);
  }
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
        onClick={filterHandler}
      >
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
            <img
              src="https://app.goldshiraz.com/upload/category/3c9e0555984d26dc9ecaa0180c4e9668.png"
              alt=""
              className="w-fit rounded-full"
            />
          </div>
          <span className="text-sm text-white font-bold">گردن بند</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">

              <img
                src="https://app.goldshiraz.com/upload/category/d7bb89def59adf50176deeaa6a94e8c0.png"
                alt=""
                className="w-fit rounded-full"
              />

          </div>
          <span className="text-sm text-white font-bold">انگشتر</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">

              <img
                src="https://app.goldshiraz.com/upload/category/d3fa3394c115ffc5218ca87e4d4e51e3.png"
                alt=""
                className="w-fit rounded-full"
              />
            
          </div>
          <span className="text-sm text-white font-bold">دستبند</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/09123c28d501b59877392620aaa349db.png"
                alt=""
                className="w-fit rounded-full"
              />
           
          </div>
          <span className="text-sm text-white font-bold">تکپوش و النگو</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/372a210fa5ff43c8a820daf07bc6df2c.png"
                alt=""
                className="w-fit rounded-full"
              />
          </div>
          <span className="text-sm text-white font-bold">گوشواره</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/dc06b67dcb45a8984b1ef1d628acb656.png"
                alt=""
                className="w-fit rounded-full"
              />
            
          </div>
          <span className="text-sm text-white font-bold">بچگانه</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/2a3f0cfcd74c0ba1f2c5d30a6e4d029b.png"
                alt=""
                className="w-fit rounded-full"
              />
          </div>
          <span className="text-sm text-white font-bold">سرویس</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/a2523d95308e8038017244eae1a10cf4.png"
                alt=""
                className="w-fit rounded-full"
              />
          </div>
          <span className="text-sm text-white font-bold">نیم ست</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/b16df003331aca62134918ac8102734c.png"
                alt=""
                className="w-fit rounded-full"
              />
          </div>
          <span className="text-sm text-white font-bold">پابند</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/4d3acedf3bb3fdf705d153e1dcb95270.png"
                alt=""
                className="w-fit rounded-full"
              />
          </div>
          <span className="text-sm text-white font-bold">دستبند و انگشتر</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/3fb801d65b8a6794a5247b5f1ba724df.png"
                alt=""
                className="w-fit rounded-full"
                id="Sepahan"
              />
          </div>
          <span className="text-sm text-white font-bold">سپاهان</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/b78639583d37bec901b9ced59355b475.png"
                alt=""
                className="w-fit rounded-full"
                id="medal"
              />
          </div>
          <span className="text-sm text-white font-bold">مدال</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/0eaf02e673c5d005393cd83e32bd0f1f.png"
                alt=""
                className="w-fit rounded-full cursor-pointer"
                id="Zanjir"
              />
          </div>
          <span className="text-sm text-white font-bold">زنجیر</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/02d4ebf334c0e4097d2e9259a9fc25e1.png"
                alt=""
                className="w-fit rounded-full cursor-pointer"
                id="spacial"
              />
          </div>
          <span className="text-sm text-white font-bold">فروش ویژه</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/c565287df7a865e748814e24bede9e4d.png"
                alt=""
                className="w-fit rounded-full cursor-pointer"
                id="watch"
              />
          </div>
          <span className="text-sm text-white font-bold">ساعت</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/9d70c011e1e2f2fd6fa2a851e52c7a99.png"
                alt=""
                className="w-fit rounded-full cursor-pointer"
                id="gold"
              />
          </div>
          <span className="text-sm text-white font-bold">چرم و طلا</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/acafe85d082cc5fd7269429803576dda.png"
                alt=""
                className="w-fit rounded-full cursor-pointer"
                id="coin"
              />
          </div>
          <span className="text-sm text-white font-bold">سکه</span>
        </div>
        <div id="filter__container" className="text-center">
          <div className="rouded-full bg-white rounded-full w-fit">
              <img
                src="https://app.goldshiraz.com/upload/category/60a7412749b558bf40e4a2f5b976dd5f.png"
                alt=""
                className="w-fit rounded-full"
                id="men"
              />
          </div>
          <span className="text-sm text-white font-bold">مردانه</span>
        </div>
      </div>
    </section>
  );
}

export default Products;

export default function Footer() {
  return (
    <div className=" bg-gvhBlue-400 px-4 pb-4">
      <div className="flex justify-center pt-9">
        <div>
          <a href="https://www.gableviewhomes.com" target="_blank">
            <img src="/img/placeholder-gvh.png" className="px-2" width={292} />
</a>
          <hr className="mt-4 mb-4 border-t-[1px] border-gvhGold-400" />
          <p className="text-center text-gvhGold-100">
            Spaces designed for life.
          </p>
        </div>
      </div>

      <div className="flex text-center pt-5 md:pt-0 md:text-left flex-col md:flex-row md:justify-between">
        <div>
          <p className=" text-gvhGold-400 text-sm">©2022 Gable View Homes</p>
        </div>
        <div>
          <p className="text-gvhGold-400 text-sm">
            <a className=" hover:text-white transition-all duration-150" href="https://gableviewhomes.com/policies/" target="_blank">Privacy Policy</a> |      <a className=" hover:text-white transition-all duration-150" href="https://gableviewhomes.com/terms-conditions/" target="_blank">Terms of Use</a>
          </p>
        </div>
      </div>
{/* 
      <div className="fixed bottom-0 right-0 p-6 w-8 h-8 bg-white border flex justify-center items-center opacity-75">
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
          XS
        </div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          SM
        </div>
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
          MD
        </div>
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
          LG
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
          XL
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
          2XL
        </div>
      </div> */}
    </div>
  );
}

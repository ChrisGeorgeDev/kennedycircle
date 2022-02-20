import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

export default function Menu() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="bg-white top-0 fixed z-10 w-full shadow xl:block hidden">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                 
                  <div
                    className="hidden close-m-menu text-gray-700"
                    onClick="MenuHandler(this,false)"
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center">
                {/* Desktop LOGO */}
                  <a href="/">
              <img className="h-6" src="/img/icon/KC-Site-Logo-Horizontal-Menu.svg"/>
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="hidden menu-desktop xl:flex items-center">
                  <div className="relative">
                    <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-12 ">
                          <li className="cursor-pointer text-gray-600 uppercase text-sm leading-3 tracking-normal py-2 hover:text-gvhGold-400 focus:text-gvhGold-400 focus:outline-none">
                            <div className="flex items-center">
                              <Link href="/team">
                                <a className="sub-link text-[14px]">   The Team</a>
                              </Link>
                            </div>
                          </li>
                          <li className="cursor-pointer uppercase text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-gvhGold-400 focus:text-gvhGold-400 focus:outline-none flex items-center">
                            <Link href="/greenliving">
                              <a className="sub-link text-[14px]"> Green Features</a>
                            </Link>
                          </li>
                        </ul>
                      )}
                      <span className="link">
                        About
                        <div className="ml-2 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden menu-desktop xl:flex  ">
                  <Link href="/residences">
                    <a
                      className={
                        router.pathname == "/residences"
                          ? "active link "
                          : "link"
                      }
                    >
                      {" "}
                        Residences
                    </a>
                  </Link>

                  <Link href="/floorplans">
                    <a
                      className={
                        router.pathname == "/floorplans" 
                          ? "active link "
                          : "link"
                      }
                    >
                      {" "}
                        Floor plans
                    </a>
                  </Link>

                  <Link href="/amenities">
                    <a
                      className={
                        router.pathname == "/amenities"
                          ? "active link "
                          : "link"
                      }
                    >
                      {" "}
                        Amenities
                    </a>
                  </Link>

                  <Link href="/location">
                    <a
                      className={
                        router.pathname == "/location" ? "active link " : "link"
                      }
                    >
                      {" "}
                        Location
                    </a>
                  </Link>
                </div>
                <a href="#register" className="reg-cta">
                  {" "}
                  Register
                </a>
              </div>
            </div>
          </div>
        </nav>

        <nav>
          <div className="py-2 px-2 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
            <div>
            <a href="/">
              <svg
                className="h-[31px] md:hidden lg:hidden"
                width="122"
                height="66"
                viewBox="0 0 122 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.6842 27.1353C82.2337 19.8881 78.3108 13.3644 72.5815 8.67182C66.8522 3.97923 59.6696 1.40698 52.2531 1.39178C51.8333 1.39178 51.4458 1.39178 51.0098 1.39178C43.7113 3.63438 37.4422 8.37341 33.3085 14.7728C29.1748 21.1722 27.4423 28.8206 28.4164 36.3688C29.3906 43.917 33.009 50.8798 38.6331 56.0288C44.2572 61.1778 51.5257 64.1821 59.1562 64.5117C67.33 62.7013 74.4699 57.7794 79.0525 50.7964C83.635 43.8134 85.2971 35.3224 83.6842 27.1353V27.1353Z"
                  fill="#C4AB7A"
                />
                <path
                  d="M92.3392 26.001C90.6626 17.602 85.7073 10.2103 78.5628 5.45072C71.4182 0.691155 62.6693 -1.0466 54.2393 0.619481L53.5934 0.756242C61.3121 1.07856 68.668 4.10967 74.3606 9.31377C80.0533 14.5179 83.7161 21.5598 84.7017 29.1948C85.6873 36.8298 83.9321 44.5662 79.7465 51.0363C75.5608 57.5065 69.2142 62.2938 61.8286 64.552C63.5211 64.4873 65.2058 64.2882 66.8666 63.9566C75.295 62.2879 82.7133 57.3519 87.4901 50.2342C92.2669 43.1165 94.0111 34.3999 92.3392 26.001V26.001Z"
                  fill="#C4AB7A"
                />
                <path
                  d="M20.9029 23.9093C19.4238 28.7785 19.1078 33.9248 19.9802 38.9374C20.8526 43.9499 22.8891 48.6898 25.9272 52.7784C28.9653 56.8671 32.9207 60.1913 37.4777 62.4855C42.0346 64.7798 47.0668 65.9806 52.1724 65.9919C54.3407 65.9911 56.5038 65.781 58.6314 65.3644C59.7213 65.1528 60.7993 64.8843 61.8609 64.5599C60.9647 64.5599 60.0766 64.5599 59.1885 64.5599L58.5184 64.7048C53.0669 65.7847 47.4275 65.4354 42.1522 63.691C36.877 61.9467 32.1468 58.8671 28.4249 54.7539C24.7031 50.6406 22.1171 45.6347 20.9202 40.2264C19.7233 34.8181 19.9566 29.1927 21.5972 23.9012C37.1795 23.7645 51.6153 34.7457 63.0719 43.4583L65.05 44.9627L65.1873 45.0673L65.0419 45.1558C58.3695 49.0947 51.1526 52.0356 43.6223 53.8844L41.9592 54.3028L43.5739 54.8659C48.9542 56.4879 54.5442 57.3146 60.1654 57.3196C61.4976 57.3196 62.8701 57.2633 64.2749 57.1506C69.3101 56.7846 74.2356 55.5031 78.8076 53.3696H78.848C83.4357 54.645 88.2121 55.1106 92.9609 54.7452L94.4303 54.5843C95.0762 54.4958 95.6656 54.3912 96.2307 54.2786C97.9222 53.9476 99.5811 53.4685 101.188 52.8466L102.682 52.2191C107.66 49.8961 112.003 46.4106 115.341 42.0585C121.227 34.6572 121.865 24.0541 120.5 16.5965C119.273 9.85493 116.318 4.52923 112.604 2.27667C104.579 -2.55025 97.9908 2.47779 96.7555 3.53167H96.7151H96.6667C92.4522 3.15356 89.3277 6.58067 89.1985 6.74961L88.4557 7.55409H89.5618C91.8871 7.61845 95.165 8.96999 97.3853 12.5821C98.6229 14.6739 99.3296 17.0349 99.4441 19.4605V19.6375L99.2745 19.5812C98.2872 19.2481 97.2563 19.0611 96.2146 19.0261C93.0577 18.9295 86.8975 20.2087 81.1167 29.9027C78.8847 33.546 76.0765 36.8059 72.8008 39.5565L72.72 39.6289L72.6393 39.5485C70.8389 37.7304 69.0303 35.6789 67.1088 33.4988C60.3915 25.8642 52.0352 16.3632 38.8508 11.8259C36.0239 10.8189 33.0519 10.2755 30.0504 10.2169C34.4536 6.00756 39.9767 3.14563 45.9637 1.97097C47.6171 1.64551 49.2934 1.44915 50.9775 1.38369C51.7849 1.12626 52.681 0.900999 53.5611 0.707923C49.0456 0.535862 44.5432 1.29687 40.3372 2.94305C36.1313 4.58924 32.3128 7.08499 29.1219 10.2733C22.7275 10.4422 16.5511 13.0005 10.9076 17.8917C6.93519 21.3771 3.58544 25.5092 1.00114 30.1119L0 32.0265L1.76007 30.7635C8.24327 26.0975 14.6619 24.1185 20.9029 23.9093ZM77.1767 53.0799C74.6609 54.1552 72.0387 54.9641 69.3533 55.4934C67.6641 55.8226 65.9579 56.0589 64.2426 56.2013C58.1452 56.6496 52.0152 56.1062 46.0929 54.5924L45.665 54.4797L46.0929 54.3591C53.1189 52.4584 59.8387 49.5737 66.0511 45.7913H66.1157L66.1803 45.8396C70.6209 49.1701 74.1975 51.6399 77.2009 52.8547L77.4593 52.9673L77.1767 53.0799ZM98.2572 12.1316C97.4736 10.7954 96.4253 9.632 95.1761 8.71228C93.9269 7.79256 92.5029 7.13574 90.9909 6.78179L90.7325 6.72547L90.9344 6.57262C92.5605 5.19152 94.664 4.49861 96.7959 4.64186H97.0462L97.2238 4.47292C97.2884 4.40856 103.852 -1.74576 112.047 3.1616C115.519 5.23718 118.288 10.3296 119.467 16.7896C120.791 24.03 120.177 34.2952 114.51 41.431C109.383 47.8669 103.158 51.8893 96.0127 53.2811C90.866 54.2041 85.5808 54.0203 80.5112 52.7421L80.2044 52.6777L80.487 52.5248C80.9552 52.2674 81.4235 52.0019 81.8756 51.7204C83.8083 50.5543 85.625 49.2074 87.3012 47.6979V47.6979H87.3496C96.2953 48.0036 101.002 43.587 103.005 40.9322C106.686 36.049 107.413 29.3717 104.813 24.3115C103.853 22.5186 102.346 21.0761 100.51 20.1926H100.445V20.096C100.431 17.2831 99.6762 14.5232 98.2572 12.0914V12.1316ZM88.4315 46.6441L88.6414 46.4349C92.0744 42.9571 94.8843 38.9192 96.9493 34.4963C99.0116 30.4413 100.221 26.0091 100.502 21.4717V21.2786L100.679 21.3752C102.085 22.1605 103.237 23.3301 103.998 24.746C106.42 29.4683 105.733 35.7111 102.278 40.2806C99.8542 43.4249 96.3432 45.5584 92.428 46.2659C91.2228 46.5029 89.9988 46.6321 88.7706 46.6521L88.4315 46.6441ZM73.5597 40.2886C76.8776 37.4823 79.728 34.1696 82.0048 30.4739C87.5192 21.2304 93.2596 20.0156 96.1904 20.1041C97.297 20.1368 98.3896 20.3599 99.4198 20.7638H99.4925V20.9005C99.4925 24.8586 98.3057 29.2913 96.0289 34.078C93.8469 38.7722 90.7986 43.0159 87.0428 46.5877H86.9863C85.6036 46.5094 84.2279 46.3374 82.8687 46.0729C79.8976 45.4936 77.0314 43.7559 73.5759 40.4415L73.479 40.353L73.5597 40.2886ZM72.6716 41.0368L72.7523 41.1092C76.4017 44.6409 79.4535 46.4912 82.6588 47.1107C83.6842 47.3037 84.7014 47.4566 85.6703 47.5531H85.9529L85.7349 47.7382C83.6253 49.5149 81.3074 51.0304 78.8318 52.2513H78.7834H78.743C75.7396 51.3744 71.945 48.8162 67.1572 45.2362L67.02 45.1316L67.1653 45.0351C67.6094 44.7535 68.0615 44.4559 68.4894 44.1582C69.9265 43.1767 71.3071 42.1389 72.5909 41.077L72.6716 41.0368ZM66.3418 34.1826C68.2472 36.3466 70.0476 38.3981 71.8481 40.2162L71.9369 40.3047L71.84 40.3932C70.0345 41.8401 68.1476 43.1831 66.1884 44.4156H66.1157L66.0511 44.3674L63.7017 42.6216L63.5967 42.7584L63.6936 42.6136C55.7652 36.588 45.9314 29.0821 35.266 25.3171C31.0015 23.7451 26.499 22.9098 21.9525 22.8474C22.8554 20.2907 24.0788 17.858 25.5937 15.607C26.6324 14.0571 27.8019 12.5984 29.0896 11.2467C32.3091 11.1944 35.5116 11.7203 38.544 12.7993C51.4458 17.2642 59.358 26.2503 66.3418 34.1826V34.1826ZM3.37482 28.1409C5.67205 24.6239 8.43383 21.4309 11.5858 18.648C16.8014 14.1267 22.3481 11.6731 28.1046 11.303C25.0414 14.6467 22.705 18.5853 21.242 22.8715C19.3034 22.9053 17.3716 23.1099 15.4693 23.4829C11.2317 24.3525 7.19003 25.9885 3.54437 28.3098L3.08416 28.5994L3.37482 28.1409Z"
                  fill="#1C2A36"
                />
              </svg>
{/* Full Logo  */}
<img className="h-6 hidden md:block" src="/img/icon/KC-Site-Logo-Horizontal-Menu.svg"/>

                    </a>
              {/* Full Logo  */}
            </div>
            <div className="flex items-center">
              <div className="relative mr-6 ">
                <a href="#register" className="reg-cta">
                  {" "}
                  Register
                </a>
              </div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-screen fixed  z-50 top-0 bottom-0 transform  translate-x-0 "
                : "   w-full xl:hidden h-screen absolute z-50 top-0 bottom-0 transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64  fixed overflow-y-auto  top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex  flex-row  justify-between w-full">
                      <img className="h-8" src="/img/icon/kc-brandmark.svg"/>

                        <div
                          id="cross"
                          className="text-gray-800  justify-self-end  "
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon mb-1 icon-tabler icon-tabler-x"
                            width={40}
                            height={40}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a className="cursor-pointer">
                        <li
                          className="text-gray-800 pt-10"
                          onClick={() => setShow(!show)}
                        >
                          <Link href="/residences">
                            <a className="flex px-2 items-center pt-1 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out uppercase">
                              {" "}
                                Residences
                            </a>
                          </Link>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li
                          className="text-gray-800 pt-4"
                          onClick={() => setShow(!show)}
                        >
                          <Link href="/floorplans">
                            <a className="flex px-2 items-center pt-1 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out uppercase">
                              {" "}
                                Floor plans
                            </a>
                          </Link>
                        </li>
                      </a>

                      <a className="cursor-pointer">
                        <li
                          className="text-gray-800 pt-4"
                          onClick={() => setShow(!show)}
                        >
                          <Link href="/amenities">
                            <a className="flex px-2 items-center pt-1 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out uppercase">
                              {" "}
                                Amenities
                            </a>
                          </Link>
                        </li>
                      </a>

                      <a className="cursor-pointer">
                        <li
                          className="text-gray-800 pt-4"
                          onClick={() => setShow(!show)}
                        >
                          <Link href="/location">
                            <a className="flex px-2 items-center pt-1 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out uppercase">
                              {" "}
                                Location
                            </a>
                          </Link>
                        </li>
                      </a>
                  
                  
          

                      <li
                        className="text-gray-800 pt-4"
                      
                      >
                        <span className="flex px-2 items-center pt-1 text-sm leading-5 text-gray-700 focus:outline-none transition duration-150 ease-in-out uppercase">
                          {" "}
                          About
                        </span>
                      </li>

                      <li
                        className="text-gray-800 "
                        onClick={() => setShow(!show)}
                      >
                        <Link href="/team">
                          <a className="flex pl-5 items-center pt-4 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out uppercase">
                            {" "}
                              The Team
                          </a>
                        </Link>
                      </li>

                      <li
                        className="text-gray-800 "
                        onClick={() => setShow(!show)}
                      >
                        <Link href="/greenliving">
                          <a className="flex pl-5 items-center pt-4 text-sm leading-5 text-gray-700  focus:outline-none transition duration-150 ease-in-out uppercase">
                            {" "}
                            Green Features
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="flex justify-center mb-4 w-full"></div>
                    <div className="border-t border-gray-300 py-5">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>{" "}
                          <p className=" text-gray-800 text-base leading-5 ml-2">
                          Call to Book your virtual&nbsp;appointment<br/>905.336.8953
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}

import {useEffect, useState} from "react";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react";

const links: string[] = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export default function Navigation() {

    // Window width control
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [windowWidth]);

    // Burger click
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerOpen = () => {
        setIsBurgerOpen(true);
    }

    const handleBurgerClose = () => {
        setIsBurgerOpen(false);
    }

    const displayMobileMenu = () => {
        return (
            <Dialog open={isBurgerOpen} onClose={handleBurgerClose} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-[7rem]">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col {/*overflow-y-scroll*/} bg-white py-8 shadow-xl">
                                    <div className="px-8 flex flex-row items-center justify-end sm:px-6">
                                        <button
                                            type="button"
                                            onClick={() => handleBurgerClose()}
                                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="#00001A" fill-rule="evenodd">
                                                    <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/>
                                                    <path
                                                        d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/>
                                                </g>
                                            </svg>
                                            <span className="absolute -inset-2.5"/>
                                            <span className="sr-only">Close panel</span>
                                        </button>
                                    </div>
                                    <div
                                        className="relative mt-6 flex-1 px-8 pb-[500px] sm:px-6 flex flex-col items-start justify-center gap-6">
                                        {
                                            links.map((link, i) => {
                                                return <a
                                                    className="text-black hover:text-orange-300 text-lg font-medium"
                                                    href={`#${link}`}>{link}</a>;
                                            })
                                        }
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        );
    }

    return (
        <div className="flex flex-row items-center justify-between w-full">
            {
                windowWidth >= 620 ?
                    <svg className="flex flex-row items-center justify-center w-1/2" width="65" height="40"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"
                            fill="#00001A"/>
                    </svg>
                    :
                    <p className="font-bold text-4xl font-sans">W</p>
            }
            <div className="flex flex-row items-center justify-end gap-10 w-1/2 h-full">
                {
                    windowWidth >= 620 ?
                        links.map((link: string) => {
                            return <a className="text-slate-600 hover:text-orange-300" href={`#${link}`}>{link}</a>
                        })
                        : <button onClick={isBurgerOpen ? handleBurgerClose : handleBurgerOpen}>
                            {
                                isBurgerOpen ?
                                    displayMobileMenu()
                                    : <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#00001A" fill-rule="evenodd">
                                            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/>
                                            <path d="M0 0h40v3H0z"/>
                                        </g>
                                    </svg>
                            }
                        </button>
                }
            </div>
        </div>
    );
}
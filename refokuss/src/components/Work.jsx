import React, { useState } from "react"
import { motion, useScroll } from "framer-motion"

function Work() {
    const [images, setImages] = useState([
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d5844e884446135d24285_1.jpg",
            top: "50%",
            left: "50%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d5849b8b4e661775e010a_2.jpg",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d584d239547d640cd84b3_3.jpg",
            top: "45%",
            left: "56%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d585218bb52372d42644e_4.jpg",
            top: "60%",
            left: "53%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d5857e1d5aa1123c379dd_5.jpg",
            top: "43%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d585bb8b4e6783d5e010b_6.jpg",
            top: "65%",
            left: "55%",
            isActive: false,
        },
    ])

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true }
                )
            )
        }

        switch (Math.floor(data * 100)) {
            case 0:
                imagesShow([])
                break
            case 1:
                imagesShow([0])
                break
            case 2:
                imagesShow([0, 1])
                break
            case 3:
                imagesShow([0, 1, 2])
                break
            case 4:
                imagesShow([0, 1, 2, 3])
                break
            case 6:
                imagesShow([0, 1, 2, 3, 4])
                break
            case 8:
                imagesShow([0, 1, 2, 3, 4, 5])
                break
        }
    })

    return (
        <div className="w-full mt-10">
            <div className="relative max-w-screen-xl mx-auto text-center">
                <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
                    work
                </h1>
                <div className="absolute top-0 w-full h-full">
                    {images.map(
                        (elem, index) =>
                            elem.isActive && (
                                <img
                                    key={index}
                                    className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                                    src={elem.url}
                                    style={{ top: elem.top, left: elem.left }}
                                    alt=""
                                />
                            )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Work

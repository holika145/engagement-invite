import bgMain from "../Assets/Zero/ganeshbgtwo.png";
import centerImg from "../Assets/Zero/two.png";
import thoranam from "../Assets/thoranam.png";
import cornerLeft from "../Assets/sides.png";
import cornerRight from "../Assets/sides.png";
import bananaLeaf from "../Assets/banana.png"


const Zero = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Top Thoranam */}
            <img
                src={thoranam}
                alt=""
                className="absolute top-0 left-0 w-full h-auto mt-[-3%] origin-top z-20"
            />

            {/* Corner Decorations */}
            <img
                src={cornerLeft}
                alt=""
                className="absolute top-0 left-0 w-24 h-32 mt-[5%] ml-[-8%] origin-top-left animate-swing z-20"
            />

            <img
                src={cornerLeft}
                alt=""
                className="absolute top-0 left-0 w-24 h-24 mt-[5%] ml-[-5%] origin-top-left animate-swing z-20"
            />

            <img
                src={cornerLeft}
                alt=""
                className="absolute top-0 left-0 w-24 h-16 mt-[5%] ml-[-2%] origin-top-left animate-swing z-20"
            />

            <img
                src={cornerRight}
                alt=""
                className="absolute top-0 right-0 w-24 h-16 mt-[5%] mr-[-2%] origin-top-right scale-x-[-1] animate-swing z-20"
            />

            <img
                src={cornerRight}
                alt=""
                className="absolute top-0 right-0 w-24 h-24 mt-[5%] mr-[-5%] origin-top-right scale-x-[-1] animate-swing z-20"
            />

            <img
                src={cornerRight}
                alt=""
                className="absolute top-0 right-0 w-24 h-32 mt-[5%] mr-[-8%] origin-top-right scale-x-[-1] animate-swing z-20"
            />

            {/* Bottom Left Banana Leaves */}
            <img
                src={bananaLeaf}
                alt=""
                className="absolute bottom-0 left-0 ml-[-10%] w-28 sm:w-36 origin-bottom-left animate-swing z-20"
            />

            {/* <img
                src={bananaLeaf}
                alt=""
                className="absolute bottom-0 left-0 w-28 sm:w-36 mb-[8%] ml-[-8%] origin-bottom-left animate-swing z-20"
            /> */}

            {/* Bottom Right Banana Leaves */}
            <img
                src={bananaLeaf}
                alt=""
                className="absolute bottom-0 right-0 mr-[-13%] w-28 sm:w-36 origin-bottom-right scale-x-[-1] animate-swing z-20"
            />

            {/* <img
                src={bananaLeaf}
                alt=""
                className="absolute bottom-0 right-0 w-20 sm:w-28 mb-[8%] mr-[5%] origin-bottom-right scale-x-[-1] animate-swing z-20"
            /> */}

            {/* Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={bgMain}
                    alt=""
                    className="w-[300px] h-[300px] rounded-full object-cover animate-rotateSlow"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Center Image */}
            <div className="relative z-10 flex items-center justify-center">
                <img
                    src={centerImg}
                    alt=""
                    className="w-48 sm:w-64 animate-zoomInOut drop-shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Zero;
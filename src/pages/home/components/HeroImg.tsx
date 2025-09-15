type HeroImgProps = {
    imgSrc: string;
    imgAlt: string;
    styles: string;
};

function HeroImg({ imgSrc, imgAlt, styles }: HeroImgProps) {
    return (
        <div className={`w-full h-full overflow-hidden ${styles}`}>
            <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-cover object-center"
            />
        </div>
    );
}

export default HeroImg;

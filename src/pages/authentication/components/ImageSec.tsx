type ImageSectionProps = {
    src: string;
    alt: string;
};

function ImageSection({ src, alt }: ImageSectionProps) {
    return (
        <div className="bg-gray-100 rounded-3xl hidden sm:flex items-center justify-center h-100">
            <img
                src={src}
                alt={alt}
                className="w-full object-contain max-w-md mx-auto"
            />
        </div>
    );
}

export default ImageSection;

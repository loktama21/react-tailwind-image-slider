export default function SlideImage({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transition-all duration-500"
      />
    );
  }
  
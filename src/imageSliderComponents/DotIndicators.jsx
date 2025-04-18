export default function DotIndicators({ count, currentIndex, onDotClick }) {
    return (
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    );
  }
  
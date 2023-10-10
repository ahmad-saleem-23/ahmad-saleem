
interface ProjectDisplayProps {
  onClose: () => void
  // onNext: () => void
  // onPrev: () => void
  // className: string
  display: string
}

export default function ProjectDisplay({
  onClose,
  // onNext,
  // onPrev,
  // className,
  display
}: ProjectDisplayProps) {
  return (
    <div className={`image-display ${className}`}>
      <div className="image-container">
        {/* <img src={imageUrl} alt="img place holder" /> */}
        {display}
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {/* <div className="navigation-buttons">
          <button className="prev-button" onClick={onPrev}>
            &#8666;
          </button>
          <button className="next-button" onClick={onNext}>
            &#8667;
          </button>
        </div> */}
      </div>
    </div>
  )
}

const TiktokVideo = ({ videoId, thumbnailUrl, title }) => {
    return (
      <div className="snap-center flex-shrink-0 w-[320px] md:w-80">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-[320px] h-[570px] object-cover rounded-lg"
        />
        <h3 className="mt-2 text-sm md:text-base font-medium">{title}</h3>
      </div>
    );
  };
  
  export default TiktokVideo;
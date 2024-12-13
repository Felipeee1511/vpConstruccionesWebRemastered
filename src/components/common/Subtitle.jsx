const Subtitle = ({ className, children }) => {
    return <h2 className={`text-xl md:text-2xl font-semibold ${className}`}>{children}</h2>;
  };
  
  export default Subtitle;
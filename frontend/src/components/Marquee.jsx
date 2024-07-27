function Marquee({
    className,
    reverse,
    children,
    vertical = false,
    repeat = 4,
    ...props
  }) {
    function cn(...classes) {
      return classes.filter(Boolean).join(" ");
    }
  
    return (
      <div
        {...props}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] flex-row justify-around [gap:var(--gap)] ${
                reverse ? "[animation-direction:reverse]" : ""
              }
              `}
            >
              {children}
            </div>
          ))}
      </div>
    );
  }
  
  export default Marquee;
  
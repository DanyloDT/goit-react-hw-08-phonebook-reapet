export const Loader = ({ size = 24 }) => {
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255,0.06)',
    borderTopColor: '#A855F7',
    boxShadow: '0 0 10px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.25)',
  };

  return (
    <div
      className={`w-${Math.floor(size)} h-${Math.floor(
        size
      )} absolute top-[50%] left-[50%] flex items-center justify-center`}
    >
      <div style={style} className="animate-spin" />
    </div>
  );
};

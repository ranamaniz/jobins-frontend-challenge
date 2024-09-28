const defaultUserSrc = "/images/user.png";

const Avatar = ({ src = defaultUserSrc, isActive = true, alt = "avatar" }) => {
  return (
    <section className=" relative">
      <img
        src={src}
        alt={alt}
        className="w-9 h-9 rounded-50 object-scale-down bg-gray-200 overflow-hidden align-middle"
      />
      <span
        className={`absolute bottom-0 right-1 ${
          isActive ? "bg-success" : "bg-secondary"
        } w-2 h-2 rounded-50 border border-white`}
      ></span>
    </section>
  );
};

export default Avatar;

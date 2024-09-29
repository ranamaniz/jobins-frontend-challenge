const Card = ({ className, children }) => {
  return (
    <section className={`bg-white rounded-2xl p-4  md:p-6 ${className}`}>
      {children}
    </section>
  );
};

export default Card;

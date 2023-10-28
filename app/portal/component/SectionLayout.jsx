const SectionLayout = ({ pageTitle, compType }) => {
  return (
    <section className="relative grow">
      <div className="w-screen border-b border-ternary/30 pb-2 text-rotate absolute -bottom-16 left-0 hidden lg:block">
        <h2 className="text-6xl font-bold text-ternary/30 uppercase text-left">
          {pageTitle}
        </h2>
      </div>
      <div className="w-fill lg:ml-[74px] p-2">{compType}</div>
    </section>
  );
};

export default SectionLayout;

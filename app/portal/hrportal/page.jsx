import SectionLayout from '../component/SectionLayout';

const page = () => {
  return <SectionLayout pageTitle="Human Resource " compType={<Research />} />;
};

const Research = () => {
  return (
    <div>
      <h2 className="text-zinc-500/60 text-xl p-2">
        We're so glad to have you on our team! If you've just recently joined us
        make sure to watch the employee orientation video.
      </h2>
      <div>
        <div className="text-zinc-500/60 text-6xl">ACCESS RESTRICTED</div>
      </div>
    </div>
  );
};
export default page;

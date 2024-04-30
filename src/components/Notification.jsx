const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 border border-n-1/10 rounded-2xl gap-5`}
    ></div>
  );
};

export default Notification;

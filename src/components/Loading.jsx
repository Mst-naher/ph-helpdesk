
const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-3">
      <div className="h-30 w-30 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default Loading;

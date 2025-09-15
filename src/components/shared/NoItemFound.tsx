const NoItemFound = ({ text }: { text: string }) => {
  return <div className="border-gray-400 p-4 mb-6">No {text} found</div>;
};

export default NoItemFound;

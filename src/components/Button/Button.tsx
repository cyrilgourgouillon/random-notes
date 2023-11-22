export const Button = ({
  onClickCallback,
  children,
}: {
  onClickCallback: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClickCallback}
      className="p-3 drop-shadow-md rounded-lg bg-white hover:bg-neutral-50 active:bg-neutral-200 border border-neutral-800"
    >
      {children}
    </button>
  );
};

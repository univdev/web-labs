import { NormalLayoutProps } from "./index.types";

export const NormalLayout = ({ children }: NormalLayoutProps) => {
  return (
    <div className="NormalLayout">
      { children }
    </div>
  );
};

export default NormalLayout;

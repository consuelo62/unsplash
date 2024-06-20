import { CSSProperties } from "react";

import "./styles/spinner.css";

type Props = {
  className?: string;
  style?: CSSProperties;
};

export default function Spinner({ className = "", style }: Props) {
  return <div className={`spinner ${className}`} style={style} />;
}

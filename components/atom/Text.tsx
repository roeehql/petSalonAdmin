interface TextState {
  text: string;
  plusStyle?: string;
}

export const TextP = ({ text, plusStyle }: TextState) => {
  return <p className={`text-base tracking-tight ${plusStyle}`}>{text}</p>;
};

export const TitleH = ({ text, plusStyle }: TextState) => {
  return <h4 className={`py-4 text-xl tracking-tight ${plusStyle}`}>{text}</h4>;
};

export const Small = ({ text, plusStyle }: TextState) => {
  return (
    <small className={`h-5 text-xs text-red-600 ${plusStyle}`}>{text} </small>
  );
};

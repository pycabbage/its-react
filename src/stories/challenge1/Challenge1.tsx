interface Challenge1Props {
  /**
   * 名前
   */
  name: string;
}

export const Greeting = (props: Challenge1Props) => {
  return (
    <div className="">Hello, {props.name}</div>
  );
};

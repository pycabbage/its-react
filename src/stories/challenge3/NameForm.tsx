interface NameFormProps {
  onSubmit?: (name: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NameForm = (props: NameFormProps) => {
  return (
    <div>
      <form
        onSubmit={e => {
          const { value: name } = e.currentTarget.inputName as HTMLInputElement
          alert(`名前：${name}`)
          props.onSubmit?.(name)
          e.preventDefault()
        }}
        className="flex flex-col gap-2"
      >
        <div className="">
          <label htmlFor="inputName">名前:</label>
          <input type="text" id="inputName" name="inputName" className=" border-b-2 border-slate-800" />
        </div>
        <button type="submit" className="bg-slate-800 text-white rounded-md px-4 py-2">送信</button>
      </form>
    </div>
  );
};

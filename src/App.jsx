import { useCallback, useState } from 'react';
import { ChildArea } from './ChildArea';

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
   
  const onChangeText = (e) => setText(e.target.value);
  
  const onClickOpen = () => setOpen(!open);
  
  const onClickClose = useCallback(() => setOpen(false), []);
  
  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br/>
      <br/>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  )
}

export default App

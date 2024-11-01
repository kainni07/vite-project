import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
}

// メモ関数でコンポーネントをメモ化
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  
  console.log("ChildAreaのレンダリング");
  
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
   
  return (
    <>
      { open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) :  null  }
    </>
  );
});
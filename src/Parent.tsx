import React, { useEffect } from "react";
import Child from "./Child";

type Props = {
  roomId: string;
}

const Parent: React.FC<Props> = ({ roomId }) => {
  useEffect(() => {
    console.log(`[Parent]useEffect fired roomId: ${roomId}`);
  }, [roomId]);

  return (
    <>
    <div>parent roomId: {roomId} (string)</div>
    <Child roomId={Number(roomId)} />
    </>
  );
};

export default Parent;

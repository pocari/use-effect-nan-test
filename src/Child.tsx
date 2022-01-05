import React, { useEffect } from "react";

type Props = {
  roomId: Number;
}

const Child: React.FC<Props> = ({
  roomId
}) => {

  useEffect(() => {
    console.log(`[Child]useEffect fired roomId: ${roomId}`);
  }, [roomId]);

  return (
    <div>Child roomId: {roomId} (Number)</div>
  );
};

export default Child;

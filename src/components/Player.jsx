import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEaditing, setIsEditing] = useState(false);
    function handleEditclick() {
        setIsEditing((editing) =>!editing);
    }

    let playerName = <span className="player-name">{name}</span>;
    if (isEaditing) {
        playerName = <input type="text" required value={name} />;
    }
    return (
        <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditclick}>{!isEaditing ? 'Edit' : 'Save'}</button>
        </li>
    );
}
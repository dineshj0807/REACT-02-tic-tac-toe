import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleNameChange(event){
        setPlayerName(event.target.value);
    }
    
    function handleEditclick() {
        setIsEditing((editing) =>!editing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />;
    }
    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditclick}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    );
}
// GameModal.tsx
import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Game } from "../types/Game";
import "./GameModal.css";

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  return (
    <div className="modal-backdrop">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="modal-content"
      >
        <div className="modal-close-container">
          <button className="modal-close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <img
          src={game.imageUrl || "/static/images/default-game-image.jpg"}
          alt={game.title}
          className="modal-image-large"
        />

        <div className="modal-body">
          <h2 className="modal-title">{game.title}</h2>
          <p>
            <span className="modal-label">Genre:</span> {game.genreSet[0].name}
          </p>
          <p>
            <span className="modal-label">Description:</span> {game.description}
          </p>
          <p>
            <span className="modal-label">Trigger Warnings:</span>{" "}
            {game.triggerWarningSet.length > 0 ? (
              <ul className="modal-trigger-warnings">
                {game.triggerWarningSet.map((warning, index) => (
                  <li key={index}>{warning.description}</li>
                ))}
              </ul>
            ) : (
              "None"
            )}
          </p>
          <p>
            <span className="modal-label">Price:</span> ${game.price}
          </p>
          <p>
            <span className="modal-label">Platforms:</span>{" "}
            {game.platformSet.length > 0 ? (
              <ul className="modal-platforms">
                {game.platformSet.map((platform, index) => (
                  <li key={index}>{platform.name}</li>
                ))}
              </ul>
            ) : (
              "None"
            )}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GameModal;

'use strict';

const moveSpeed = 10;
const turnSpeed = 2;

/**
 * `updatePlayerPositionRotation`
 * Update the position and rotation of the current player camera.
 * @param {Object} camera - THREE.js camera.
 * @param {Object} dataStore - Central store of state data.
 */
const updatePlayerPositionRotation = (camera, dataStore) => {
  if (dataStore.moveForward) {
    camera.translateZ(-moveSpeed);
  }

  if (dataStore.moveBackward) {
    camera.translateY(-moveSpeed / 3);
  }

  if (dataStore.turnLeft) {
    camera.rotation.y += turnSpeed * Math.PI / 180;
  }

  if (dataStore.turnRight) {
    camera.rotation.y -= turnSpeed * Math.PI / 180;
  }

  if (dataStore.moveUp) {
    camera.translateY(moveSpeed / 2);
  }

  dataStore.player.state.position = [camera.position.x, camera.position.y, camera.position.z];
  dataStore.player.state.rotation = [camera.rotation.x, camera.rotation.y, camera.rotation.z];

  const hasPlayerMoved = dataStore.moveForward
    || dataStore.moveBackward
    || dataStore.turnLeft
    || dataStore.turnRight
    || dataStore.moveUp;

  // Return whether the player has moved.
  return hasPlayerMoved;
};

/**
 * `keyboardControls`
 * Update the position and rotation of the current player camera based on keyboard keys pressed up or down.
 * @param {Object} dataStore - Central store of state data.
 */
const keyboardControls = (dataStore) => {
  const setDirection = (input) => {
    const keyCode = input && input.keyCode;
    const enable = input && input.enable;

    if (dataStore.disablePlayerControls) {
      return;
    }

    switch (keyCode) {
      case 38: // Up arrow.
      case 87: // W
        dataStore.moveForward = enable;
        break;

      case 40: // Down arrow.
      case 83: // S
        dataStore.moveBackward = enable;
        break;

      case 37: // Left arrow.
      case 65: // A
        dataStore.turnLeft = enable;
        break;

      case 39: // Right arrow.
      case 68: // D
        dataStore.turnRight = enable;
        break;

      case 32: // Space bar.
        dataStore.moveUp = enable;
        break;
    }
  };

  const onKeyDown = (e) => {
    setDirection({
      event: e,
      keyCode: e.keyCode,
      enable: true
    });
  };

  const onKeyUp = (e) => {
    setDirection({
      event: e,
      keyCode: e.keyCode,
      enable: false
    });
  };

  document.addEventListener('keydown', onKeyDown.bind(this), false);
  document.addEventListener('keyup', onKeyUp.bind(this), false);

  return dataStore;
};

module.exports = {
  keyboardControls,
  updatePlayerPositionRotation
};

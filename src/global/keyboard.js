export const normal = {
  meta: {
    capsLock: {
      keySet: 'capsLock',
      text: '↑',
      classes: '',
      width: '12%',
    },
    capsUnlock: {
      keySet: 'default',
      text: '↑',
      classes: '',
      width: '12%',
    },
    backspace: {
      func: '',
      text: 'back',
      classes: '',
      width: '12.8%',
    },
    numbers: {
      keySet: 'numbers',
      text: '123',
      classes: '',
      width: '21.33%',
    },
    space: {
      key: ' ',
      text: 'space',
      classes: '',
      width: '45.33%',
    },
    enter: {
      func: '',
      text: 'enter',
      classes: '',
      width: '22.13%',
    },
    letter: {
      keySet: 'default',
      text: 'ABC',
      classes: '',
      width: '21.33%',
    },
  },
  default: [
    'q w e r t y u i o p',
    'a s d f g h j k l',
    '{capsLock} z x c v b n m {backspace}',
    '{numbers} {space} {enter}',
  ],
  capsLock: [
    'Q W E R T Y U I O P',
    'A S D F G H J K L',
    '{capsUnlock} Z X C V B N M {backspace}',
    '{numbers} {space} {enter}',
  ],
  numbers: [
    '1 2 3 4 5 6 7 8 9 0',
    '- / : ; ( ) $ & @',
    '{} . , ? ! \' " # {backspace}',
    '{letter} {space} {enter}',
  ],
};

export default {
  normal,
};

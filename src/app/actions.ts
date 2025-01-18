export interface SlabAction {
  label: string;
  value: number;
}
export const Actions = {
  NoAction: { label: '( No Action )', value: 0 },
  LeftStickUp: { label: 'Left Stick Up', value: 10 },
  LeftStickDown: { label: 'Left Stick Down', value: 11 },
  LeftStickLeft: { label: 'Left Stick Left', value: 12 },
  LeftStickRight: { label: 'Left Stick Right', value: 13 },
  FaceButton1Confirm: { label: 'Face Button 1 (Confirm)', value: 20 },
  FaceButton2Cancel: { label: 'Face Button 2 (Cancel)', value: 21 },
  FaceButton3: { label: 'Face Button 3', value: 22 },
  FaceButton4: { label: 'Face Button 4', value: 23 },
  ShoulderButtonLeft: { label: 'Shoulder Button Left', value: 30 },
  ShoulderButtonRight: { label: 'Shoulder Button Right', value: 31 },
  TriggerLeft: { label: 'Trigger Left', value: 32 },
  TriggerRight: { label: 'Trigger Right', value: 33 },
  Start: { label: 'Start', value: 40 },
  Select: { label: 'Select', value: 41 },
  StickPressLeft: { label: 'Stick Press Left', value: 50 },
  StickPressRight: { label: 'Stick Press Right', value: 51 },
  Home: { label: 'Home', value: 60 },
  Capture: { label: 'Capture', value: 61 },
  DPadUp: { label: 'D-Pad Up', value: 80 },
  DPadDown: { label: 'D-Pad Down', value: 81 },
  DPadLeft: { label: 'D-Pad Left', value: 82 },
  DPadRight: { label: 'D-Pad Right', value: 83 },
  Modifier1: { label: 'Modifier 1', value: 90 },
  Modifier2: { label: 'Modifier 2', value: 91 },
  Modifier3: { label: 'Modifier 3', value: 92 },
  RightStickUp: { label: 'Right Stick Up', value: 100 },
  RightStickDown: { label: 'Right Stick Down', value: 101 },
  RightStickLeft: { label: 'Right Stick Left', value: 102 },
  RightStickRight: { label: 'Right Stick Right', value: 103 },
  TriggerLeftSoftPress: { label: 'Trigger Left Soft Press', value: 110 },
  TriggerLeftMediumPress: { label: 'Trigger Left Medium Press', value: 111 },
  TriggerRightSoftPress: { label: 'Trigger Right Soft Press', value: 112 },
  TriggerRightMediumPress: { label: 'Trigger Right Medium Press', value: 113 },
  MaskLeftSticktoDPad: { label: 'Mask: Left Stick to D-Pad', value: 121 },
  MaskRightSticktoDPad: { label: 'Mask: Right Stick to D-Pad', value: 123 },
  MaskDPadtoLeftStick: { label: 'Mask: D-Pad to Left Stick', value: 120 },
  MaskDPadtoRightStick: { label: 'Mask: D-Pad to Right Stick', value: 122 },
  MaskLeftSticktoRightStick: {
    label: 'Mask: Left Stick to Right Stick',
    value: 124,
  },
  MaskRightSticktoLeftStick: {
    label: 'Mask: Right Stick to Left Stick',
    value: 125,
  },
};

export const valueToAction: { [number: number]: SlabAction} = {};

export const allActions = Object.values(Actions);

Object.values(Actions).forEach((action: SlabAction) => {
  valueToAction[action.value] = action;
});
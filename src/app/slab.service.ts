import { Injectable } from '@angular/core';
import { Buttons } from './buttons';
import pako from "pako";
import { ButtonData } from './button/button.component';
import { allActions, valueToAction } from './actions';

export type ButtonMapping = { [key: string]: number };
@Injectable({
  providedIn: 'root',
})
export class SlabService {
  buttonMapping: ButtonMapping = {};
  private buttonMappingCopy: ButtonMapping = {};
  constructor() {}

  async setCurrentConfiguration() {
    const response = await SlabApi.getButtonMapping();
    this.buttonMapping = response;
    return response;
  }

  getButtonData(number: number): ButtonData {
    const key = "button" + number;
    const value = this.buttonMapping[key];
    if (value === undefined) {
      throw "Button not found";
    }

    return { label: "A" + number, id: key, selectedAction: valueToAction[value], actions: allActions}
  }

  updateCurrentConfiguration(id: string, value: number) {
    this.buttonMapping[id] = value;
    console.log(this.buttonMapping);
  }

  commitChanges() {
    SlabApi.setButtonMapping(this.buttonMapping);
  }
  copy() {
    this.buttonMappingCopy = { ...this.buttonMapping };
  }
  paste() {
    this.buttonMapping = { ...this.buttonMappingCopy };
  }
}

class SlabApi {
  static async getButtonMapping(): Promise<ButtonMapping> {
    return fetch('./api/getButtonMapping').then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error("Error decompressing gzip response:", error);
    });
  }

  static async setButtonMapping(buttonMapping: ButtonMapping) {
    return fetch('./api/setButtonMapping', {
      method: 'POST',
      body: JSON.stringify(buttonMapping),
    }).then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error("Error decompressing gzip response:", error);
    });

    const compressed = pako.gzip(JSON.stringify(buttonMapping));
    return fetch('./api/setButtonMapping', {
      method: 'POST',
      body: compressed,
    }).then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error("Error decompressing gzip response:", error);
    });
  }
}

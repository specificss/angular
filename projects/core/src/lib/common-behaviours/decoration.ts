import { ComponentBaseProps } from "../common-abstractions/component";

/** @docs-private */
export interface CanDecoration {
  /** Theme decoration palette for the component. */
  decoration?: DecorationPalette;
}

export enum EDecoration {
  Default = "default",
  Discrete = "discrete",
  Elevated = "elevated",
  ElevatedBottom = "elevated-bottom",
  Sunken = "sunken"
}

/** Possible decoration palette values. */
export type DecorationPalette = EDecoration | undefined;

/** Mixin to augment a directive with a `decoration` property. */
export abstract class Decoration extends ComponentBaseProps {
  private _decoration: DecorationPalette;

  get decoration(): DecorationPalette {
    return this._decoration;
  }
  set decoration(value: DecorationPalette) {
    const decorationPalette: DecorationPalette = value || null;

    if (decorationPalette !== this._decoration) {
      if (this._decoration) {
        this._elementRef.nativeElement.classList.remove(
          `u-shadow---${this._decoration}`
        );
      }
      if (decorationPalette) {
        this._elementRef.nativeElement.classList.add(
          `u-shadow--${decorationPalette}`
        );
      }

      this._decoration = decorationPalette;
    }
  }
}

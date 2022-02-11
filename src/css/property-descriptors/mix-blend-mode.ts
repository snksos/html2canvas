import {IPropertyIdentValueDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {Context} from '../../core/context';

declare const enum MIX_BLEND_MODE {
    NORMAL = 'normal',
    MULTIPLY = 'multiply',
    SCREEN = 'screen',
    OVERLAY = 'overlay',
    DARKEN = 'darken',
    LIGHTEN = 'lighten',
    COLORDODGE = 'color-dodge',
    COLORBURN = 'color-burn',
    HARDLIGHT = 'hard-light',
    SOFTLIGHT = 'soft-light',
    DIFFERENCE = 'difference',
    EXCLUSION = 'exclusion',
    HUE = 'hue',
    SATURATION = 'saturation',
    COLOR = 'color',
    LUMINOSITY = 'luminosity'
}

export const mixBlendMode: IPropertyIdentValueDescriptor<MIX_BLEND_MODE> = {
    name: 'mix-blend-mode',
    initialValue: 'normal',
    prefix: false,
    type: PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (_context: Context, mixBlendMode: string) => {
        switch (mixBlendMode) {
            case 'normal':
                return MIX_BLEND_MODE.NORMAL;
            case 'multiply':
                return MIX_BLEND_MODE.MULTIPLY;
            case 'screen':
                return MIX_BLEND_MODE.SCREEN;
            case 'overlay':
                return MIX_BLEND_MODE.OVERLAY;
            case 'darken':
                return MIX_BLEND_MODE.DARKEN;
            case 'lighten':
                return MIX_BLEND_MODE.LIGHTEN;
            case 'color-dodge':
                return MIX_BLEND_MODE.COLORDODGE;
            case 'color-burn':
                return MIX_BLEND_MODE.COLORBURN;
            case 'hard-light':
                return MIX_BLEND_MODE.HARDLIGHT;
            case 'soft-light':
                return MIX_BLEND_MODE.SOFTLIGHT;
            case 'difference':
                return MIX_BLEND_MODE.DIFFERENCE;
            case 'exclusion':
                return MIX_BLEND_MODE.EXCLUSION;
            case 'hue':
                return MIX_BLEND_MODE.HUE;
            case 'saturation':
                return MIX_BLEND_MODE.SATURATION;
            case 'color':
                return MIX_BLEND_MODE.COLOR;
            case 'luminosity':
                return MIX_BLEND_MODE.LUMINOSITY;
            default:
                return MIX_BLEND_MODE.NORMAL;
        }
    }
};

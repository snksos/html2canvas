import {IPropertyIdentValueDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {Context} from '../../core/context';

declare const enum OBJECT_FIT {
    COVER = 'cover',
    CONTAIN = 'contain',
    FILL = 'fill',
    SCALE_DOWN = 'scale_down',
    NONE = 'none'
}

export const objectFit: IPropertyIdentValueDescriptor<OBJECT_FIT> = {
    name: 'object_fit',
    initialValue: 'none',
    prefix: false,
    type: PropertyDescriptorParsingType.IDENT_VALUE,
    parse: (_context: Context, direction: string) => {
        switch (direction) {
            case 'cover':
                return OBJECT_FIT.COVER;
            case 'contain':
                return OBJECT_FIT.CONTAIN;
            case 'fill':
                return OBJECT_FIT.FILL;
            case 'scale_down':
                return OBJECT_FIT.SCALE_DOWN;
            case 'none':
                return OBJECT_FIT.NONE;
            default:
                return OBJECT_FIT.NONE;
        }
    }
};

import * as React from "react";
import {Col, ColorPicker as AntdColorPicker, Divider, Row} from "antd";
import {SummerColors} from "../../core/color/summer-colors";
import {NeutralPaletteColors} from "../../core/color/neutral-palette-colors";
import {LuxuryColors} from "../../core/color/luxury-colors";
import {PrimaryColors} from "../../core/color/primary-colors";
import {ColorPickerProps} from "antd/es/color-picker/ColorPicker";
export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
    const _presets = (props.presets || []).concat([SummerColors, NeutralPaletteColors, LuxuryColors, PrimaryColors]);
    return (
        <AntdColorPicker {...props}
                         presets={_presets}
                         styles={{popupOverlayInner: {width: 480}}}
                         panelRender={(_, {components: {Picker, Presets}}) => (
                             <Row justify={`space-between`} wrap={false}>
                                 <Col span={12}>
                                     <Presets/>
                                 </Col>
                                 <Divider type="vertical" style={{height: "auto"}}/>
                                 <Col flex="auto">
                                     <Picker/>
                                 </Col>
                             </Row>
                         )}/>
    )
}
import { FunctionComponent } from "react";
import { Tooltip, Typography } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import './LabelWithTooltip.css'

const { Text } = Typography;

interface LabelWithTooltipProps {
    text: string
    tooltip?: string
}

const LabelWithTooltip: FunctionComponent<LabelWithTooltipProps> = ({text, tooltip}) => {

    return (
        <div>
            <Text>
                {text}
                {tooltip?
                    <Tooltip className='tooltip' title={tooltip}>
                        <InfoCircleOutlined />
                    </Tooltip>
                    : null
                }
            </Text>
        </div>
    )
}

export default LabelWithTooltip;
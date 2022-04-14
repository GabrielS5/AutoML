import React from 'react';
import NetworkLayerType, { toNetworkLayerComponent } from '../models/NetworkLayerType';

export default class NetworkLayer extends React.Component<{ onUpdate: any, index: number, type: NetworkLayerType }, {}> {
    constructor(props: { onUpdate: any, index: number, type: NetworkLayerType }) {
        super(props);

        this.state = { type: this.props.type };
    }

    handleInputChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value }, () => {
            this.props.onUpdate(this.props.index, this.state);
        })
    }

    render() {
        let child = toNetworkLayerComponent(this.props.type, this.handleInputChange);

        return <div className='bordered centered'>
            <h1>{NetworkLayerType[this.props.type]} Layer</h1>
            {child}
        </div>;
    }
}
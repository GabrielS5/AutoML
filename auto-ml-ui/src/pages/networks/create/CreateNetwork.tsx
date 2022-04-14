import React from 'react';
import NetworkLayer from './components/NetworkLayer';
import NetworkLayerModel from './models/NetworkLayerModel';
import NetworkLayerType from './models/NetworkLayerType';

export default class CreateNetwork extends React.Component<{}, { layers: any[], layersModels: NetworkLayerModel[] }> {

    constructor(props: { layers: any[], layersModels: NetworkLayerModel[] }) {
        super(props);
        this.state = { layers: [], layersModels: [] };
    }

    onAddLayer = (event: any) => {
        const key = this.state.layers.length;
        const type = parseInt(event.target.value);
        this.setState({
            layers: [...this.state.layers, <NetworkLayer key={key} index={key} type={type} onUpdate={this.onLayerUpdated} />],
            layersModels: [...this.state.layersModels, { type: type } as NetworkLayerModel]
        });
    }

    onLayerUpdated = (index: number, value: NetworkLayerModel) => {
        const layers = [...this.state.layersModels];
        layers[index] = value;
        this.setState({
            layersModels: layers
        });
    }

    render() {
        return <div>
            CreateNetwork
            <select value="empty" className="dropdownButton" onChange={this.onAddLayer}>
                <option value="empty">Add Layer</option>
                <option value={NetworkLayerType.Convolution}>Convolution</option>
                <option value={NetworkLayerType.Dense}>Dense</option>
            </select>

            {this.state.layers}
        </div>;
    }
}
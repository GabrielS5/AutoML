import React from 'react';
import ActivationInput from './ActivationInput';

export default class ConvolutionLayer extends React.Component<{ onInputChange: any }, {}> {
    render() {
        return (
            <form>
                <div>
                    <label>
                        Kernel Size X:
                        <input type="number" name="kernelSizeX" onChange={this.props.onInputChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Kernel Size Y:
                        <input type="number" name="kernelSizeY" onChange={this.props.onInputChange} />
                    </label>
                </div>
                <ActivationInput onInputChange={this.props.onInputChange} />
            </form>
        );
    }
}
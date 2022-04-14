import React from 'react';
import ActivationInput from './ActivationInput';

export default class DenseLayer extends React.Component<{ onInputChange: any }, {}> {
    render() {
        return (
            <form>
                <div>
                    <label>
                        Output:
                        <input type="number" name="output" onChange={this.props.onInputChange} />
                    </label>
                </div>
                <ActivationInput onInputChange={this.props.onInputChange} />
            </form>
        );
    }
}
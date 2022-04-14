import React from 'react';

export default class ActivationInput extends React.Component<{ onInputChange: any }, {}> {
    render() {
        return (
            <div>
                <label>
                    Activation:
                    <select name="activation" onChange={this.props.onInputChange}>
                        <option value="none">None</option>
                        <option value="relu">Relu</option>
                        <option value="sigmoid">Sigmoid</option>
                        <option value="softmax">Softmax</option>
                        <option value="tanh">Tanh</option>
                    </select>
                </label>
            </div>
        );
    }
}
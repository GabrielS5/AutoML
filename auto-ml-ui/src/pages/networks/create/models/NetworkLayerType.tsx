import DenseLayer from "../components/DenseLayer";
import ConvolutionLayer from "../components/ConvolutionLayer";
import React from "react";

enum NetworkLayerType {
    Convolution,
    Dense
};

export var toNetworkLayerComponent = (value: NetworkLayerType, callback: any) => {
    switch (value) {
        case NetworkLayerType.Convolution:
            return <ConvolutionLayer onInputChange={callback} />
        case NetworkLayerType.Dense:
            return <DenseLayer onInputChange={callback} />
    }
}

export default NetworkLayerType;
import NetworkLayerType from "./NetworkLayerType";

export default interface NetworkLayer {
    type: NetworkLayerType;
    output: number;
    kernelSizeX: number;
    kernelSizeY: number;
    activation: string;
}
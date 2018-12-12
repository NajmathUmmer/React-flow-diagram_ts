import * as React from 'react';
import {
  Diagram,
  diagramOn,
  setConfig,
  store as diagramStore,
} from 'react-flow-diagram';
import { config, customEntities } from './config-example';
// import model from './model-example';

class CustomDiagram extends React.PureComponent {
  public componentWillMount() {
    diagramStore.dispatch(setConfig(config));
    // diagramStore.dispatch(setEntities(model));

    diagramOn('anyChange', (entityState:any) =>
      // You can get the model back
      // after modifying the UI representation
      // tslint:disable-next-line:no-console
      console.info(entityState)
    );
  }
  public render() {
    return <Diagram customEntities={customEntities} />;
  }
}

export default CustomDiagram;
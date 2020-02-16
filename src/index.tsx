import { useEffect, useState } from "react";
import ArrayStore from "devextreme/data/array_store";
import React from "react";
import ReactDOM from "react-dom";

interface ItemObserverProps {
  item: any;
  dxArrayStore: ArrayStore;
}

interface ItemObserverState {
  key: string;
}

class ItemObserver extends React.Component<ItemObserverProps> {
  state: ItemObserverState;

  constructor(props: ItemObserverProps) {
    super(props);
    this.state = {
      key: props.dxArrayStore.key()
    };
  };

  componentDidMount() {
    // New item has been added to the array
    this.props.dxArrayStore.push([{
      type: 'insert',
      data: this.props.item
    }]);
  };

  shouldComponentUpdate(nextProps: ItemObserverProps) {
    if (nextProps.dxArrayStore !== this.props.dxArrayStore) {
      // dxArrayStore has changed. This should generally never happen.
      // But just in case, let's insert the item to the new ArrayStore:
      nextProps.dxArrayStore.push([{
        type: 'insert',
        data: nextProps.item
      }]);
    } else if (nextProps.item !== this.props.item) {
      // The observed item has changed. Update the corresponding ArrayStore entry:
      this.props.dxArrayStore.push([{
        type: 'update',
        key: this.props.item[this.state.key],
        data: nextProps.item
      }])
    }
    // Return false because we never render anything anyways.
    return false;
  };

  componentWillUnmount() {
    // The component only unmounts if the observed item is removed.
    this.props.dxArrayStore.push([{
      type: 'remove',
      key: this.props.item[this.state.key]
    }])
  };

  render() {
    return null;
  };
};

export const useDxArrayStore = (items: any[], key: string) => {
  const [dxArrayStore] = useState(
    new ArrayStore(
      {
        key: key,
        data: items
      }
    )
  );

  const [containerNode] = useState(
    document.createElement('null')
  );

  useEffect(() => {
    ReactDOM.render(
      items.map(item =>
        React.createElement(ItemObserver, { key: item[key], item: item, dxArrayStore: dxArrayStore })
      ), containerNode
    );
  }, [items, dxArrayStore, containerNode, key]);

  return dxArrayStore;
};
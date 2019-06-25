import * as React from 'react';

interface State {
  activeItem?: any
}

const withActiveItem = (Component) => {
  class WithActiveItem extends React.Component<React.ComponentProps<typeof Component>, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      return <Component
        activeItem={this.state.activeItem}
        setActiveItem={this._setActiveItem}
        {...this.props}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;

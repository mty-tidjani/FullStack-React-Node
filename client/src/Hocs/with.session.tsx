import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types/redux';
import { User } from '../types/model';
import { getUserSession, saveSessionData } from '../store/app/actions';

export type WithSessionProps = {
  sesUser: User;
  saveUser: (data: any) => void;
  getSession: () => void;
};

export default <P extends WithSessionProps>(
  WrappedComponent: React.ComponentType<P & WithSessionProps>
): any => {
  class WithSessionHoc_ extends Component {
    constructor(props: Readonly<{}>) {
      super(props);
      this.state = {};
    }

    render() {
      const Compo: any = WrappedComponent;
      return (
        // <ErrorBounds>
        <Compo {...this.props} />
        // </ErrorBounds>
      );
    }
  }

  const mapStateToProps = ({ app }: RootState) => ({
    sesUser: app.sesUser,
  });

  const mapDispatchToProps = (dispatch: any) => ({
    saveUser: (data: any) => dispatch(saveSessionData(data)),
    getSession: () => dispatch(getUserSession()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSessionHoc_);
};

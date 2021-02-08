import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, RootState } from '../types/redux';
import {
  addNoteQry,
  getUserSession,
  resetLoaders,
  saveSessionData,
  loadNoteBooksQry,
} from '../store/app/actions';

export type WithSessionProps = AppState & {
  saveUser: (data: any) => void;
  getSession: () => void;
  addNote: (title: string, desc: string) => void;
  resetLoaders: () => void;
  loadNoteBooks: () => void;
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
    ...app,
  });

  const mapDispatchToProps = (dispatch: any) => ({
    saveUser: (data: any) => dispatch(saveSessionData(data)),
    getSession: () => dispatch(getUserSession()),
    addNote: (title: string, desc: string) =>
      dispatch(addNoteQry({ title, desc })),
    resetLoaders: () => dispatch(resetLoaders()),
    loadNoteBooks: () => dispatch(loadNoteBooksQry()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSessionHoc_);
};

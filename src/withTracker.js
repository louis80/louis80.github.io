import React, { Component, } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize("G-VYJT4TRYGN");

export default function withTracker(WrappedComponent, options = {}) {
    const trackPage = (page) => {

        console.log('page', page);
        console.log('window.location.href : ', window.location.href);
        console.log('window.location.pathname : ',window.location.pathname);

        window.gtag('send', 'page_view', {
            page_location: window.location.href,
            page_path: page //window.location.pathname            
        });
    };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      console.log('page', page);
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      console.log('CHEMIN : ', currentPage, ' : ',nextPage );

      if (currentPage !== nextPage) {
        console.log('nextPage : ',nextPage);
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};


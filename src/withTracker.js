import React, { Component, } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize("G-VYJT4TRYGN");

export default function withTracker(WrappedComponent, options = {}) {
    const trackPage = (page) => {
        window.gtag('send', 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname            
        });
    };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      console.log(page);
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};


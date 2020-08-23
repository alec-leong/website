class TravelSiteReviewsServer extends React.Component {
  componentDidMount() {
    window.open(process.env.TRAVELSITE_REVIEWS_SERVER_URL, '_blank');
  }

  render() {
    return (
      <p>Redirecting to <a href={process.env.TRAVELSITE_REVIEWS_SERVER_URL}>{process.env.TRAVELSITE_REVIEWS_SERVER_URL}</a></p>
    )
  }
}

export default TravelSiteReviewsServer;

// export default function TravelSiteReviewsServer() {
//   return (
//     <iframe src={process.env.TRAVELSITE_REVIEWS_SERVER_URL || ''}>
//       <style jsx>{`
//         iframe {
//           border: none;
//           height: 100vmax;
//           overflow: hidden;
//           width: 100%;
//         }
//         `}</style>
//     </iframe>
//   )
// };

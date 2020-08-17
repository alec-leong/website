export default function TravelSiteReviewsServer() {
  return (
    <iframe src={process.env.TRAVELSITE_REVIEWS_SERVER_URL || ''}>
      <style jsx>{`
        iframe {
          border: none;
          height: 100vmax;
          overflow: hidden;
          width: 100%;
        }
        `}</style>
    </iframe>
  )
};

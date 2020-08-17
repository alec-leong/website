export default function BitCoinPriceIndex() {
  return (
    <iframe src={process.env.BITCOIN_PRICE_INDEX_URL || ''}>
      <style jsx>{`
        iframe {
          background-color: #FFFFFF;
          border: none;
          height: 100vmax;
          overflow: hidden;
          width: 100%;
        }
        `}</style>
    </iframe>
  )
};

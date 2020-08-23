class BitCoinPriceIndex extends React.Component {
  componentDidMount() {
    document.body.setAttribute('style', 'background-color: #000000;');
    window.open(process.env.BITCOIN_PRICE_INDEX_URL, '_blank');
  }

  render() {
    return (
      <p>Redirecting to <a href={process.env.BITCOIN_PRICE_INDEX_URL}>{process.env.BITCOIN_PRICE_INDEX_URL}</a></p>
    )
  }
}

export default BitCoinPriceIndex;

// export default function BitCoinPriceIndex() {
//   return (
//     <iframe src={process.env.BITCOIN_PRICE_INDEX_URL || ''}>
//       <style jsx>{`
//         iframe {
//           background-color: #FFFFFF;
//           border: none;
//           height: 100vmax;
//           overflow: hidden;
//           width: 100%;
//         }
//         `}</style>
//     </iframe>
//   )
// };

import Head from 'next/head';
import Link from 'next/link';
import * as THREE from 'three';

class HomePage extends React.Component {
  componentDidMount() {
    document.documentElement.setAttribute('lang', 'en');
    document.body.setAttribute('style', 'background-color: #000000;');

    const canvas = document.querySelector('#cube');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 400 / 400, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize( 400, 400 );

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const loader = new THREE.TextureLoader();
    const materials = [
      new THREE.MeshBasicMaterial({map: loader.load('AWS-Square.jpg')}),
      new THREE.MeshBasicMaterial({map: loader.load('React-Square.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('CSS-HTML-JS-Square.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Database-Square.png')}),
      new THREE.MeshBasicMaterial({map: loader.load('Node-Square.jpg')}),
      new THREE.MeshBasicMaterial({map: loader.load('Python-Square.jpg')}),
    ];
    const cube = new THREE.Mesh( geometry, materials);
    scene.add( cube );

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  }

  render() {
    return (
      <div>
        <Head>
          <meta property="og:site_name" content="alecleong.com" />
          <meta property="og:title" content="Alec Leong" />
          <meta property="og:description" content="Alec Leong's website." />
          <meta property="og:image" content="favicon.ico" />
          <meta property="og:url" content="http://alecleong.com/" />
          <meta property="og:type" content="personal" />
          <meta name="description" content="Alec Leong's website." />
          <title>Alec Leong</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans"></link>
        </Head>
        <center>
          <canvas id="cube"></canvas>
        </center>
        <div className="container">
          <Link href="/bitcoin-price-index">
            <button className="aws">
              <img src="/AWS-Mark-16px.png" alt="AWS mark" />
              /bitcoin-price-index
            </button>
          </Link>
          <Link href="/travelsite-reviews-server">
            <button className="aws">
              <img src="/AWS-Mark-16px.png" alt="AWS mark" />
              /travelsite-reviews-server
            </button>
          </Link>
        </div>
        <div className="container">
          <button className="github" onClick={() => window.open('https://github.com/alec-leong/bitcoin-price-index', '_blank')}>
              <img src="/GitHub-Mark-32px.png" alt="GitHub mark" width="16" height="16" />
              /bitcoin-price-index
          </button>
          <button className="github" onClick={() => window.open('https://github.com/alec-leong/travelsite-reviews-server', '_blank')}>
              <img src="/GitHub-Mark-32px.png" alt="GitHub mark" width="16" height="16" />
              /travelsite-reviews-server
          </button>
        </div>
        <style jsx>{`
          button.aws {
            background: #232F3E; // squid ink
            border-color: #FF9900; // amazon orange
            border-radius: 4px;
            color: #FFFFFF; // white
            font-family: "Droid Sans";
            font-size: 16px;
            outline: none;
          }
          button.aws:hover {
            cursor: pointer;
            border-color: #232F3E;
          }
          button.github {
            background: #FFFFFF; // white
            border-color: #000000; // black
            border-radius: 4px;
            color: #000000; // black
            font-family: "Droid Sans";
            font-size: 16px;
            outline: none;
          }
          button.github:hover {
            cursor: pointer;
            border-color: #FFFFFF; // white
          }
          div.container {
            display: flex;
            justify-content: space-evenly;
          }
        `}</style>
      </div>
    )
  }
}

export default HomePage

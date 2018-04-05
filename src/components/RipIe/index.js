import React from 'react';

class RipIe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.onCloseClick = this.onCloseClick.bind(this);
  }

  componentDidMount() {
    // ブラウザがIEかどうかの判定
    if(document.documentMode) {
      this.setState({
        isVisible: true,
      })
    }
  }

  onCloseClick() {
    this.setState({
      isVisible: false,
    });
  }

  render() {
    const transitionSpeed = '0.15s'

    const styles = {
      container: {
        background: '#F8D7DA',
        bottom: 0,
        boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
        color: '#721C24',
        margin: '2rem',
        maxWidth: '400px',
        opacity: this.state.isVisible ? 1 : 0, // for amimation
        padding: '2rem',
        position: 'fixed',
        right: 0,
        transition: `visibility ${transitionSpeed} ease-out, opacity ${transitionSpeed} ease-out`, // for amimation
        visibility: this.state.isVisible ? 'visible' : 'hidden', // for amimation
        zIndex: 5,
      },
      link: {
        color: '#721C24',
      },
      closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px',
      },
      ripImage: { 
        float: 'right',
        height: '100px',
      }
    }

    return (
      <div css={styles.container}>
        <div css={styles.closeButton} onClick={this.onCloseClick}>
          <i className="far fa-times-circle"></i>
        </div>

        <p>当サイトはInternet Explorerに対応しておりません。<br /><br />Internet ExplorerはITの可能性を狭め、エンジニア達を苦しめています。人助けだと思って、下記のようなブラウザを使ってみませんか。</p>
        <ul css={{ float: 'left' }}>
          <li>- <a href="https://www.google.co.jp/chrome/index.html" css={styles.link} target="_blank">Chrome（オススメ）</a></li>
          <li>- <a href="https://www.mozilla.org/ja/firefox/" css={styles.link} target="_blank">Firefox</a></li>
          <li>- <a href="https://www.apple.com/jp/safari/" css={styles.link} target="_blank">Safari</a></li>
          <li>- <a href="https://www.microsoft.com/ja-jp/windows/microsoft-edge" css={styles.link} target="_blank">Edge</a></li>
        </ul>
        <img src="/images/rip-ie.svg" css={styles.ripImage} />
        <div css={{clear: 'both'}}></div>
      </div>
    )
  }
}

export default RipIe

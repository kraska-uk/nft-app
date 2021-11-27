import React, { useRef, useState } from 'react';
import { hot } from 'react-hot-loader';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import { routerPaths } from '../../router/helper';

import { toast } from 'react-toastify';

import { Wallet } from 'ethers';

import copy from 'copy-to-clipboard';
import QRCode from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import getExternalLinkProps from '../../utils/getExternalLinkProps';



const ComponentToPrint = React.forwardRef((props, ref) => {
  const address = props.address;
  const privateKey = props.privateKey;
  const QRCodeSize = 400;

  return (
    <div ref={ref}>
      <br />
      <Container textAlign='center'>
        <Header as='h1'>
          <Header.Content>
            Your Ethereum Address
            <Header.Subheader>Text Text Text Text Text Text</Header.Subheader>
          </Header.Content>
        </Header>

        <Divider />
        <Header as='h3'>
          <Header.Content>
            <a
              style={{ color: 'rgba(0,0,0,.87)', }}
              href={'https://etherscan.io/address/' + address}
              {...getExternalLinkProps()}
            >Address: {address}</a>
            <Header.Subheader>Use this QR code to view the address on the Ethereum blockchain.</Header.Subheader>
          </Header.Content>
        </Header>
        {address && <div style={{ marginLeft: 'auto', marginRight: 'auto', }}>
          <QRCode size={QRCodeSize} value={'https://etherscan.io/address/' + address} />
        </div>}

        <Divider />
        <Header as='h3'>
          <Header.Content>
            Private key: {privateKey}
            <Header.Subheader>Use this QR code to access this address with a private key.</Header.Subheader>
          </Header.Content>
        </Header>
        {privateKey && <div style={{ marginLeft: 'auto', marginRight: 'auto', }}>
          <QRCode size={QRCodeSize} value={privateKey} />
        </div>}
      </Container>
    </div>
  );
});

function NewWalletPage() {
  const [wallet, setWallet] = useState({ address: null, privateKey: null });

  const handleNew = () => {
    const walletRaw = Wallet.createRandom();
    setWallet({
      address: walletRaw.address,
      privateKey: walletRaw.privateKey,
    });
    toast.info('New Wallet generated!');
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCopy = () => {
    copy(wallet.address);
    toast.info('Address copied!');
  }

  const handleClean = () => {
    setWallet({
      address: null,
      privateKey: null,
    });
    toast.info('Cleaned!');
  }

  return (
    <Page title={'New Ethereum Wallet'}>
      <Container textAlign='center'>
        <Button primary onClick={handleNew}>1. New Wallet</Button>
        <Button color='red' onClick={handlePrint}>2. Print Wallet</Button>
        <Button color='green' onClick={handleCopy}>3. Copy Address</Button>
        <Button color='red' onClick={handleClean}>4. Clean</Button>
        <Button color='green'
          as={Link}
          to={{
            pathname: routerPaths.mint,
            state: { mintToAddress: wallet.address }
          }}>5. Mint</Button>
      </Container>

      <Divider />
      <div>
        <ComponentToPrint
          ref={componentRef}
          address={wallet.address}
          privateKey={wallet.privateKey}
        />
      </div>
      <br /><br />
    </Page>
  );
};

export default hot(module)(NewWalletPage);

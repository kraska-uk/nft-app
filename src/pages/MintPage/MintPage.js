import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import { Container, Header, Grid, Input, Button } from 'semantic-ui-react';
import Page from '../../components/Page';

import { toast } from 'react-toastify';
import { useEagerConnect, useActiveWeb3React } from '../../hooks/index';

import { Contract, utils } from 'ethers';
import { KraskaNftAddress } from '../../constants';
import KraskaNftAbi from '../../abis/KraskaNftAbi.json';
import getExternalLinkProps from '../../utils/getExternalLinkProps';



function MintPage(props) {
  const triedEager = useEagerConnect();
  const context = useActiveWeb3React();
  const { library, chainId, account, active, error } = context;


  const [state, setState] = useState({
    to: props.location.state?.mintToAddress, tokenIds: ''
  });

  const handleChange = (e, { name, value }) => {
    setState({ ...state, [name]: value, });
  }

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      utils.isAddress(state.to) && state.tokenIds
      && triedEager && active && account
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [state, triedEager, active, account]);


  const handleMint = async () => {
    const tokenIds = state.tokenIds.split(',');
    for (let i in tokenIds) {
      tokenIds[i] = parseInt(tokenIds[i].trim());
    }

    const signer = library.getSigner();
    const contract = new Contract(KraskaNftAddress[chainId], KraskaNftAbi, signer);
    const txPromise = contract.safeMint(state.to, tokenIds);
    toast.promise(
      txPromise,
      {
        pending: 'Waiting for the signing',
        success: {
          render({ data }) {
            const txIsPending = (<div>Transaction is pending <a href={'https://etherscan.io/tx/' + data.hash} {...getExternalLinkProps}>{data.hash}</a></div>);

            toast.promise(
              data.wait(1),
              {
                pending: {
                  render() {
                    return (txIsPending);
                  },
                  icon: "🚀",
                },
                success: {
                  render() {
                    return <div>Transaction done 👌</div>;
                  },
                  icon: "🟢",
                },
                error: 'Transaction rejected 🤯'
              });

            return (<div>Transaction is signed</div>);
          },
          icon: "🟢",
        },
        error: {
          render({ data }) {
            return (<div>Signing is rejected ({data.code}, {data.message})</div>);
          },
          icon: "❌",
        },
      }
    );
  }

  const handleClean = () => {
    setState({ to: '', tokenIds: '', });
    toast.info('Cleaned!');
  }


  return (
    <Page title={'Mint NFTs'}>
      <Container>
        <Header as='h1'>
          <Header.Content>
            Mint new NFTs to Address
            <Header.Subheader>Contract: <a
              href={'https://etherscan.io/token/' + KraskaNftAddress[chainId]}
              {...getExternalLinkProps()}
            >{KraskaNftAddress[chainId]}</a>
            </Header.Subheader>
          </Header.Content>
        </Header>


        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Input fluid required
                name='to' label='to:' placeholder='Ethereum Address: 0x...'
                value={state.to}
                error={!utils.isAddress(state.to)}
                success={utils.isAddress(state.to)}
                onChange={handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input fluid required
                name='tokenIds' label='tokenIds:' placeholder='0,1,2'
                value={state.tokenIds}
                onChange={handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button fluid color='green' onClick={handleMint} disabled={disabled}>Mint</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button fluid color='red' type='submit' onClick={handleClean}>Clean</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Page>
  );
};

export default hot(module)(MintPage);

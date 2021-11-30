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



function AdminPage(props) {
  const triedEager = useEagerConnect();
  const context = useActiveWeb3React();
  const { library, chainId, account, active, error } = context;

  const getContract = (withSigner = false) => {
    if (withSigner) {
      const signer = library.getSigner();
      return new Contract(KraskaNftAddress[chainId], KraskaNftAbi, signer);
    } else {
      return new Contract(KraskaNftAddress[chainId], KraskaNftAbi, library);
    }
  }
  const toastTxSend = (tx) => {
    const txIsPending = (<div>Transaction is pending <a href={'https://etherscan.io/tx/' + tx.hash} {...getExternalLinkProps()}>{tx.hash}</a></div>);
    toast.promise(
      tx.wait(1),
      {
        pending: {
          render() {
            return (txIsPending);
          },
          icon: "🚀",
        },
        success: 'Transaction done 👌',
        error: 'Transaction rejected 🤯'
      }
    );
  }


  const [info, setInfo] = useState({ updated: false });
  const [disabledUpdate, setDisabledUpdate] = useState(false);
  const handleUpdate = async () => {
    setDisabledUpdate(true);
    try {
      const newInfo = { updated: true };
      const contract = getContract();

      const name = await contract.name();
      newInfo['name'] = name;

      const symbol = await contract.symbol();
      newInfo['symbol'] = symbol;

      const owner = await contract.owner();
      newInfo['owner'] = owner;

      const totalSupply = await contract.totalSupply();
      newInfo['totalSupply'] = totalSupply.toString();

      const contractURI = await contract.contractURI();
      newInfo['contractURI'] = contractURI;

      try {
        const baseTokenURI = await contract.baseTokenURI();
        newInfo['baseTokenURI'] = baseTokenURI;
      } catch (error) { }

      const tokenURI = await contract.tokenURI(0);
      newInfo['tokenURI'] = tokenURI;

      setInfo(newInfo);
    } catch (error) {
      console.error(error);
      toast.error(`${error.code}: ${error.message}`);
    }
    setDisabledUpdate(false);
  }
  useEffect(() => {
    if (!info.updated && library) {
      handleUpdate();
    }
  }, [info, library]);


  const [state, setState] = useState({
    newOwner: '',
    newContractURI: '',
    newBaseTokenURI: '',
  });
  const handleChange = (e, { name, value }) => {
    setState({ ...state, [name]: value, });
  }

  const handleSetNewOwner = async () => {
    if (!utils.isAddress(state.newOwner)) return;
    try {
      const contract = getContract(true);
      const tx = await contract.transferOwnership(state.newOwner);
      toastTxSend(tx);
    } catch (error) {
      console.error(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  }

  const handleSetContractURI = async () => {
    if (state.newContractURI === '') return;
    try {
      const contract = getContract(true);
      const tx = await contract.setContractURI(state.newContractURI);
      toastTxSend(tx);
    } catch (error) {
      console.error(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  }

  const handleSetBaseTokenURI = async () => {
    if (state.newBaseTokenURI === '') return;
    try {
      const contract = getContract(true);
      const tx = await contract.setBaseTokenURI(state.newBaseTokenURI);
      toastTxSend(tx);
    } catch (error) {
      console.error(error);
      toast.error(`${error.code}: ${error.message}`);
    }
  }


  return (
    <Page title={'Admin'}>
      <Container>
        <Header as='h1'>
          <Header.Content>
            Admin Page
            <Header.Subheader>Contract: <a
              href={'https://etherscan.io/token/' + KraskaNftAddress[chainId]}
              {...getExternalLinkProps()}
            >{KraskaNftAddress[chainId]}</a>
            </Header.Subheader>
          </Header.Content>
        </Header>

        <Button fluid color='green' onClick={handleUpdate} disabled={disabledUpdate}>Update</Button>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>name:</Grid.Column>
            <Grid.Column width={12}>{info.name}</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>ymbol:</Grid.Column>
            <Grid.Column width={12}>{info.symbol}</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>owner:</Grid.Column>
            <Grid.Column width={12}>
              {info.owner === account && account ? <b>You</b> : null} <a
                href={'https://etherscan.io/address/' + info.owner}
                {...getExternalLinkProps()}
              >{info.owner}</a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>transferOwnership:</Grid.Column>
            <Grid.Column width={12}>
              <Input fluid required
                name='newOwner' label='newOwner:' placeholder='Ethereum Address: 0x...'
                value={state.newOwner}
                error={!utils.isAddress(state.newOwner)}
                success={utils.isAddress(state.newOwner)}
                onChange={handleChange}
                action={<Button
                  color='red' content='Set'
                  disabled={!utils.isAddress(state.newOwner)}
                  onClick={handleSetNewOwner}
                />}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>contractURI:</Grid.Column>
            <Grid.Column width={12}><a
              href={info.contractURI}
              {...getExternalLinkProps()}
            >{info.contractURI}</a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>setContractURI:</Grid.Column>
            <Grid.Column width={12}>
              <Input fluid required
                name='newContractURI' label='newContractURI:' placeholder='URI string'
                value={state.newContractURI}
                onChange={handleChange}
                action={<Button
                  color='red' content='Set'
                  onClick={handleSetContractURI}
                />}
              />
            </Grid.Column>
          </Grid.Row>


          <Grid.Row>
            <Grid.Column width={3}>baseTokenURI:</Grid.Column>
            <Grid.Column width={12}><a
              href={info.baseTokenURI}
              {...getExternalLinkProps()}
            >{info.baseTokenURI}</a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>setBaseTokenURI:</Grid.Column>
            <Grid.Column width={12}>
              <Input fluid required
                name='newBaseTokenURI' label='newBaseTokenURI:' placeholder='URI string'
                value={state.newBaseTokenURI}
                onChange={handleChange}
                action={<Button
                  color='red' content='Set'
                  onClick={handleSetBaseTokenURI}
                />}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>tokenURI(0):</Grid.Column>
            <Grid.Column width={12}><a
              href={info.tokenURI}
              {...getExternalLinkProps()}
            >{info.tokenURI}</a>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>totalSupply:</Grid.Column>
            <Grid.Column width={12}>{info.totalSupply}</Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Page>
  );
};

export default hot(module)(AdminPage);

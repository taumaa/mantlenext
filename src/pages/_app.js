import '@/styles/globals.css'
import Head from "next/head";

import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, avalancheFuji } from 'wagmi/chains';
import MainContainer from "@/components/containers/MainContainer";
import { publicProvider } from 'wagmi/providers/public';

const mantleChain = {
    id: 5001,
    name: 'Mantle Testnet',
    network: 'mantle',
    iconUrl: 'https://www.mantle.xyz/favicon.ico',
    iconBackground: '#fff',
    nativeCurrency: {
        decimals: 18,
        name: 'BitDAO',
        symbol: 'BIT',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.mantle.xyz'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://explorer.testnet.mantle.xyz/' },
    },
    testnet: true,
};


const { chains, provider } = configureChains(
    [mantleChain],
    [
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


export default function App({ Component, pageProps }) {
  return (
      <div>
            <Head>
                <title>Mantle Punks</title>
            </Head>
            <WagmiConfig client={wagmiClient}>
              <RainbowKitProvider chains={chains}>
                  <MainContainer>
                    <Component {...pageProps} />
                  </MainContainer>
              </RainbowKitProvider>
            </WagmiConfig>
      </div>
  )
}
